import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import Product from './component/Product'
import Vault from './component/Vault'
import CTA from './component/CTA'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Service />
      <Product />
      <Vault />
      <CTA />
    </BrowserRouter>
  )
}

export default App