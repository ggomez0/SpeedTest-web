import Speedtest from './Speedtest'
import speedtestLogo from './assets/speedtest.svg'
import help from './assets/help.svg'
import account from './assets/account.svg'
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
          <a href="https://www.speedtest.net/apps" className="text-gray-300 hover:text-blue-300">Apps</a>
          <a href="https://www.speedtest.net/about/knowledge/glossary" className="text-gray-300 hover:text-blue-300">Learn</a>
          <a href="https://www.ookla.com/articles" className="text-gray-300 hover:text-blue-300">Data</a>
          <a href="https://www.speedtest.net/apps" className="text-gray-300 hover:text-blue-300">About</a>
        </div>
        <div className="flex space-x-2">
          <a href='https://www.speedtest.net/help'><img src={help} alt="vite logo" className="h-6 w-4" /></a>
          <img src={account} alt="react logo" className="h-6 w-4" />
        </div>
      </nav>

      <Speedtest />

      <footer className="fixed bottom-0 w-full py-4 flex justify-center items-center">
        <p className="text-gray-300 text-sm">© 2025 - Speedtest like Ookla</p>
      </footer>

    </>
  )
}

export default App
