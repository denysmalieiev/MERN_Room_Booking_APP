import React from "react"
import "./About.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"
const About = () => {
  return (
    <>
    <Navbar />
      <HeadTitle />

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              About <span>Us</span>
            </h1>
            <p>Welcome to Guest Room Booking
            At Guest Room Booking, we're passionate about creating memorable experiences for our guests. 
            Our mission is to provide you with a seamless and enjoyable booking process, so you can focus on what truly matters – your stay.</p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
