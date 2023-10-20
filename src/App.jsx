import { useState } from 'react'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Skills from './pages/Skills'
import Cards from './pages/Cards/Card'
import Projects from './pages/Projects'
import About from './pages/About'
import More from './pages/More'
import ScrollToTop from './components/ScrollToTop'
// import LineChart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <More />
      {/* <LineChart /> */}
      {/* <Cards /> */}
      {/* <Cards /> */}
      <ScrollToTop />
    </div>
  )
}

export default App
