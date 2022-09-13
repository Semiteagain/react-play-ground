import React from 'react'
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/nav/Nav'
import Header from './component/header/Header' 
import About from './component/about/About'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Header />} />
        <Route path="about" element={<About />} />
       
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App