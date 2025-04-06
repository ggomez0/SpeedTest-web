import { useState, useEffect } from 'react';

function Speedtest() {
  const [ping, setPing] = useState('--');
  const [download, setDownload] = useState('--');
  const [upload, setUpload] = useState('--');
  const [testing, setTesting] = useState(false);

  const runSpeedTest = async () => {
   

    try {
      setTesting(true);
      setPing('Testing..');
      setDownload('Testing..');
      setUpload('Testing..');
      
      const response = await fetch('http://localhost:3000/speedtest');
      const data = await response.json();
      
      console.log("Speed Test Result:", data);
      setPing(data.pingResult.latency);
      setDownload(data.downloadResult.speed);
      setUpload(data.uploadResult.speed);
  
    } catch (error) {
      console.error("Error:", error);
      setPing('Error');
      setDownload('Error');
      setUpload('Error');
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-20">
      <div className="flex flex-row items-center justify-center gap-8 md:gap-16 lg:gap-36 flex-wrap">
        <div className="bg-gray-800 p-8 rounded-lg text-center min-w-48">
          <h3 className="font-bold text-xl mb-2">PING</h3>
          <p className="text-2xl">{ping} ms</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg text-center min-w-48">
          <h3 className="font-bold text-xl mb-2">DOWNLOAD</h3>
          <p className="text-2xl">{download} mbps</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg text-center min-w-48">
          <h3 className="font-bold text-xl mb-2">UPLOAD</h3>
          <p className="text-2xl">{upload} mbps</p>
        </div>
      </div>
      <br />

      <button 
        className={`${testing ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-2xl p-6 font-bold transition-colors`} 
        onClick={runSpeedTest}
        disabled={testing}
      >
        {testing ? 'Test on Progress...' : 'Start Speed Test'}
      </button>

      
      <p className="text-sm text-gray-500 mt-4 max-w-lg text-center">
        This test uses 'Universal Speedtest' to do your connection speedtest.
      </p>
    </div>
  );
}

export default Speedtest;