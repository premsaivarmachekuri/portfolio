import { useState } from 'react'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Skills from './pages/Skills'
import Cards from './pages/Cards/Card'
import Projects from './pages/Projects'
import About from './pages/About'
import More from './pages/More'
import ScrollingList from './components/ScrollingList'
// import LineChart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <More />
      <ScrollingList />
      {/* <LineChart /> */}
      {/* <Cards /> */}
      {/* <Cards /> */}
    </>
  )
}

export default App
