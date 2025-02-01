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

    try {
      const pingStart = performance.now();
      await fetch('https://www.google.com', { method: 'HEAD', mode: 'no-cors' });
      const pingTime = Math.round(performance.now() - pingStart);
      setPing(`${pingTime} ms`);
    } catch {
      setPing('Error');
    }

    try {
      const startTime = performance.now();
      const response = await fetch(
        'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js', 
        { cache: 'no-store' }
      );
      const blob = await response.blob();
      const endTime = performance.now();
      const fileSizeInBits = blob.size * 8;
      const durationInSeconds = (endTime - startTime) / 1000;
      const speedMbps = ((fileSizeInBits / 1000000) / durationInSeconds).toFixed(2);
      setDownload(`${speedMbps} Mbps`);
    } catch {
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
    <div className="flex flex-col items-center justify-center gap-4 mt-20">
      <div className="flex flex-row items-center justify-center gap-36">
        <div className=" bg-gray-800 p-8 rounded-lg">
          <h3 className='font-bold text-xl'>PING</h3>
          <p>{ping}</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className='font-bold text-xl'>Download</h3>
          <p>{download}</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className='font-bold text-xl'>Upload</h3>
          <p>{upload}</p>
        </div>
      </div>
      <br />

      <button className='bg-blue-500 text-white rounded-2xl p-6' onClick={runSpeedTest}>Start Speed Test</button>

    </div>
  );
}

export default Speedtest;