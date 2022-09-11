import React from 'react'
import "./index.css"
import Nav from './component/nav/Nav'
import Header from './component/header/Header' 
import About from './component/about/About'


const App = () => {
  return (
    <div>
         <Nav />
         <Header/>

        <About />

    
       
    </div>
  )
}

export default App