import {Link} from 'react-router-dom'
import "./nav.css"


const Nav = () => {
  return   <nav>
  <ul className='container nav__container'>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>
}

export default Nav