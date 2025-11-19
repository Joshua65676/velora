import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import Product from './component/Product'
import Vault from './component/Vault'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Service />
      <Product />
      <Vault />
    </BrowserRouter>
  )
}

export default App