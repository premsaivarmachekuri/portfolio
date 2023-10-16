import { useState } from 'react'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Skills from './pages/Skills'
import Cards from './pages/Cards/Card'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      {/* <Cards /> */}
    </>
  )
}

export default App
