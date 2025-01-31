import Speedtest from './Speedtest'
import speedtestLogo from './assets/speedtest.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <nav className="pt-6 pl-44 pr-44 max-w-screen flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="">
          <img src={speedtestLogo} alt="speedtest logo" className='h-8 w-36 '/>
          </a>
          <div className='mr-100'></div>
        </div>
        <div className="hidden md:flex space-x-10 font-bold-500">
          <a href="#" className="text-gray-300 hover:text-blue-300">Apps</a>
          <a href="#" className="text-gray-300 hover:text-blue-300">Learn</a>
          <a href="#" className="text-gray-300 hover:text-blue-300">Data</a>
          <a href="#" className="text-gray-300 hover:text-blue-300">About</a>
        </div>
        <div className="flex space-x-2">
          <img src={viteLogo} alt="vite logo" className="h-8 w-8" />
          <img src={reactLogo} alt="react logo" className="h-8 w-8" />
        </div>
      </nav>

      <div className="App">
        <Speedtest />
      </div>
    </>
  )
}

export default App
