import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About_me from './About_me'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path='/' index element = {<About_me/>}/>
    <Route path='/Resume' index element = {<Resume/>}/>
    <Route path='/Projects' index element = {<Projects/>}/>
    <Route path='/Contact' index element = {<Contact/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default App