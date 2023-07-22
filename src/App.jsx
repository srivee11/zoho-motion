import { useState } from 'react'
import NavBar from './components/NavBar'

import { ScrollLink } from "react-scroll";
import Home from './components/Home';
import FeaturedApps from './components/FeaturedApps';
import Zoho_one from './components/ZohoOne';
import Testimonials from './components/Testimonials';


function App () {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedApps/>
      <Zoho_one/>
      <Testimonials/>
    </div>
  )
}

export default App
