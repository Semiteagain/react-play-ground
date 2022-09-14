import './index.css'
import Nav from "./component/nav/Nav"
import Header from './component/header/Header'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import {Route, Routes} from 'react-router-dom'



const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </div>
  )
}

export default App