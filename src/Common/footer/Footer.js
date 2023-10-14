import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Welcome to Guest Room Booking
            At Guest Room Booking, we're passionate about creating memorable experiences for our guests. 
            Our mission is to provide you with a seamless and enjoyable booking process, so you can focus on what truly matters – your stay.</p>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="gallery">Gallery</a>
              </li>

              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
