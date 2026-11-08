import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import Abouts from './sections/Abouts'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Abouts/>
    </div>
  )
}

export default App