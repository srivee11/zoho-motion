import { useState } from 'react'
import NavBar from './components/NavBar'

import { ScrollLink } from "react-scroll";
import Home from './components/Home';
import FeaturedApps from './components/FeaturedApps';
import Zoho_one from './components/ZohoOne';
import Testimonials from './components/Testimonials';
import Zoho_enterprises from './components/zoho_enterprises';
import Privacy from './components/Privacy';


function App () {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedApps/>
      <Zoho_one/>
      <Testimonials/>
      <Zoho_enterprises/>
      <Privacy/>
    </div>
  )
}

export default App
