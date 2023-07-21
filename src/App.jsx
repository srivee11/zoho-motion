import { useState } from 'react'
import NavBar from './components/NavBar'

import { ScrollLink } from "react-scroll";
import Home from './components/Home';
import FeaturedApps from './components/FeaturedApps';
import Zoho_one from './components/Zoho_one';


function App () {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedApps/>
      <Zoho_one/>
    </div>
  )
}

export default App
