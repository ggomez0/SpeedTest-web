import express from 'express';
import { UniversalSpeedTest, DistanceUnits } from 'universal-speedtest';

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

app.get('/speedtest', async (_, res) => {
    const SpeedTest = new UniversalSpeedTest({
        debug: true,
        tests: {
            measureUpload: true,
            measureDownload: true,
        },
        units: {
            distanceUnit: DistanceUnits.km
        }
    });
      
    const testResult = await SpeedTest.performOoklaTest();
    res.send(testResult);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
