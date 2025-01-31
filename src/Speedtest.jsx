import { useState, useEffect } from 'react';

function Speedtest() {
  const [ping, setPing] = useState('--');
  const [download, setDownload] = useState('--');
  const [upload, setUpload] = useState('--');

  useEffect(() => {
    const controller = new AbortController();
    return () => controller.abort();
  }, []);

  const runSpeedTest = async () => {
    setPing('Testing...');
    setDownload('Testing...');
    setUpload('Testing...');

    const pingStart = performance.now();
    try {
      await fetch('https://api.github.com/ping', { 
        mode: 'no-cors',
        cache: 'no-cache'
      });
      const pingTime = Math.round(performance.now() - pingStart);
      setPing(`${pingTime}ms`);
    } catch (e) {
      setPing('Error');
    }

    try {
      const startTime = performance.now();
      const response = await fetch('https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js' + Math.random(), {
      cache: 'no-store'
      });
      const blob = await response.blob();
      const endTime = performance.now();
      const fileSizeInBits = blob.size * 8;
      const durationInSeconds = (endTime - startTime) / 1000;
      const speedMbps = ((fileSizeInBits / 1000000) / durationInSeconds).toFixed(4);
      setDownload(`${speedMbps} Mbps`);
    } catch (e) {
      setDownload('Error');
    }

    try {
      const blob = new Blob([new ArrayBuffer(1024*1024)]);
      const startTime = performance.now();
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: blob
      });
      const endTime = performance.now();
      const fileSizeInBits = blob.size * 8;
      const speedMbps = (fileSizeInBits / (endTime - startTime) / 1000).toFixed(2);
      setUpload(`${speedMbps} Mbps`);
    } catch (e) {
      setUpload('Error');
    }
  };

  return (
    <div className="speedtest-container">
      <div className="metrics">
        <div className="metric-item">
          <h3>Ping</h3>
          <p>{ping}</p>
        </div>
        <div className="metric-item">
          <h3>Download</h3>
          <p>{download}</p>
        </div>
        <div className="metric-item">
          <h3>Upload</h3>
          <p>{upload}</p>
        </div>
      </div>

      <button onClick={runSpeedTest}>Start Speed Test</button>

      <style jsx>{`
        .speedtest-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .metrics {
          display: flex;
          gap: 20px;
          margin: 20px 0;
        }
        .metric-item {
          text-align: center;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Speedtest;