import "./nav.css"


const Nav = () => {
  return   <nav>
     <div className="container nav__container">
      <a href="/"><h4>Designwise</h4> </a>
      <ul className="nav__menu">
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
     </div>
</nav>
}

export default Nav