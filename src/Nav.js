import React from 'react';
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <nav className="navbar-brand-lg"  > Fiances</nav>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse nav justify-content-end navbar-light " id="navbarNavDropdown">
    <ul className="navbar-nav  ">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Home </Link>
      </li>
      <li className="nav-item">
        <Link to='/about' className="nav-link">About-us</Link>
      </li>
      <li className="nav-item">
        <Link to='/contact' className="nav-link" >Contact</Link>
      </li>
    
    </ul>
  </div>
</nav>
    
        </div>
    )
}


export default Nav;