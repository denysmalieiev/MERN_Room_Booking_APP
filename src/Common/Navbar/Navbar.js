import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="about">
                About
              </a>
            </li>
            <li>
              <a href="gallery">
                Gallery
              </a>
            </li>
            
            <li>
              <a href="contact">
                Contact
              </a>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <a href="sign-in">
                <button className='primary-btn'>Sign in</button>
                </a>
            </li>
            <li>
              <a href="register">
                <button className='primary-btn'>Sign up</button>
              </a>
            </li>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar
