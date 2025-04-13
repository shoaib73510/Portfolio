import React from 'react'

import Skills from './assets/Components/Skills'
import Projects from './assets/Components/Projects'
import Contact from './assets/Components/Contact'
import Hero from './Hero'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'

import Aboutme from './assets/Components/Aboutme'


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <div className="conatiner d-flex justify-content-center align-items-center">
    
    <Routes>
      <Route  path='/' index element= {<Hero/>} />
      <Route  path='/about'  element= {<Aboutme/>} />
      <Route  path='/skills' element= {<Skills/>} />
      <Route  path='/project' element= {<Projects/>} />
      <Route  path='/contact' element= {<Contact/>} />


    </Routes>

   </div>
   
   </BrowserRouter>
  )
}

export default App