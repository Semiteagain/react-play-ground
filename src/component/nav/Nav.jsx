import './nav.css'
import {Link} from 'react-router-dom'


const Nav = () => {
  return   <nav>
     <div className="container nav__container">
      <Link to="/"><h4>Designwise</h4> </Link>
      <ul className="nav__menu">
        <li><Link to="/about">About</ Link ></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
     </div>
</nav>
}

export default Nav