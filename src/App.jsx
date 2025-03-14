import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Services from './components/Services'
import Achevements from './components/Achevements'
import Blog from './components/Blog'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/> 
      <Brand/>
      <Services/>
      <Achevements/>
      <Blog/> 
    </>
  )
}

export default App