import './App.css'
import { Aside } from './components/aside'
import { Header } from './components/header'
import { About } from './pages/about'
import { Hero } from './pages/hero'
import { OurSpace } from './pages/ourSpace'
import { Schedule } from './pages/schedule'
import { Services } from './pages/services'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Aside/>
      <About/>
      <Services/>
      <Schedule/>
      <OurSpace/>
    </>
  )
}

export default App
