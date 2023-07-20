import { useState } from 'react'
import NavBar from './components/NavBar'

import { ScrollLink } from "react-scroll";
import Home from './components/Home';
import FeaturedApps from './FeaturedApps';


function App () {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedApps/>
    </div>
  )
}

export default App
