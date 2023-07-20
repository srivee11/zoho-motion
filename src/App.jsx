import { useState } from 'react'
import NavBar from './components/NavBar'

import { ScrollLink } from "react-scroll";
import Home from './components/Home';


function App () {
  return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
