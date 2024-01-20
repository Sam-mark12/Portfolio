import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Exp from './components/Exp'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Exp />
      <Contact />

      <SocialLinks />

    </div>
  )
}

export default App
