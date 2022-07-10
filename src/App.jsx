import React from 'react'
import Home from './pages/Home/Home.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience.jsx'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Experience/>
      <Contact />
      <Footer />
    </>
  )
}

export default App