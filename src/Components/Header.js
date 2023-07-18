import React from 'react'
import headercss from '../../src/ComponentsCSS/Header.css'
import Logo from '../../src/Images/Logo.png'
import {Link} from 'react-router-dom'
import Homepage from '../WebPages/Homepage'
import StudyMaterial from '../WebPages/StudyMaterial'
import MyCourse from '../WebPages/MyCourse' 
import ProfilePage from '../WebPages/ProfilePage'
import YourProgress from '../WebPages/YourProgress'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary appheader">
  <div className="container-fluid ">
    
    <Link className="navbar-brand" to="/"><img src={Logo} id='logoimageheader'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={StudyMaterial}>Study Material</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to={MyCourse}>My Courses</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ProfilePage}>Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >Your Progress</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search" >
        <input className="form-control me-2" id='searchbarheader' type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

  </div>
</nav>
    </div>
  )
}

export default Header;
<span className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</span>