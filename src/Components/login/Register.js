import React, { useState } from "react"
import "./design.css"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"


const Register = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', number: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Registration successful!');
        window.location.href = 'sign-in'
      } else {
        console.error('Registration failed.');
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
            <h1>REGISTER</h1>
            <form action='' onSubmit={handleSubmit}>
              <input 
              type='text'
              name='name'
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder='Name' required />
              <input type='email'
              name='email'
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder='Email' required />
              <input type='number'
              name='number'
              id="number"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              placeholder='Number' required />
              <input type='password'
              name='password'
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder='Password' required />

              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register
