import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Service />
    </BrowserRouter>
  )
}

export default App