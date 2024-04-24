import './App.css'
import { Aside } from './components/aside'
import { Header } from './components/header'
import { About } from './pages/about'
import { Hero } from './pages/hero'
import { Schedule } from './pages/schedule'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Aside/>
      <About/>
      <Schedule/>
    </>
  )
}

export default App
