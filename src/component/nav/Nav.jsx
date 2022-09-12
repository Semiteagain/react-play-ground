import "./nav.css"


const Nav = () => {
  return <nav >
     <div className="container nav__container">
      <a href="index.html"><h4>DESIGNWISE</h4></a>
      <ul className="nav__menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
     </div>
   
  </nav>
}

export default Nav