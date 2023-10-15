import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./design.css"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log(response);
      if (response.ok) {
        console.log('Sign-in successful!');
        if (response.data){
          console.log(response);
          localStorage.setItem("currentuser",response);
        }
        window.location.href = 'dashboard'
      } else {
        console.error('Sign-in failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
      <Navbar />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <h1>LOG IN</h1>
            <form action='' onSubmit={handleSubmit}>
              <input
              type='text'
              name='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder='Email' />
              <input
              type='password'
              name='password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <span>Forgot Password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login
