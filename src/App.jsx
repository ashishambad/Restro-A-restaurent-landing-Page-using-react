import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import Abouts from './sections/Abouts'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Abouts/>
      <Stats/>
      
    </div>
  )
}

export default App