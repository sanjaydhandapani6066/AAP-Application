// import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/navbar.css'

const Navbar = () => {
  return (
  //   <header className="header">
  //   <a className="port-logo">ZEN<span className='vista-span'>VISTA</span></a>
  //   <nav className="navbar">
  //     <a href="#"style={{'--i':12}} className='active'>HOME</a>
  //     <a href="#"style={{'--i':13}}>COURSES</a>
  //     <a href="#"style={{'--i':14}}>ACADEMY</a>
  //     <a href="#"style={{'--i':15}}>CONTACT</a>
  //   </nav>
  // </header>
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item"><span className='head-col'>ZENVISTA</span></Link>
        </div>
        <div className="navbar-end">
          <Link to="/home" className="navbar-item"><span className='head-col'>HOME</span></Link>
          <Link to="/courses" className="navbar-item"><span className='head-col'>ACADEMIES</span></Link>
          <Link to="/enrolled" className="navbar-item"><span className='head-col'>ENROLLED COURSES</span></Link>
          <Link to="/login" className="navbar-item"><span className='head-col'>LOG OUT</span></Link>
        </div>
      </nav>
  )
}

export default Navbar
