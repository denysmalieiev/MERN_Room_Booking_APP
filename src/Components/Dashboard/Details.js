import React, { useEffect, useState } from 'react';
import "./Details.css"


const Home = () => {

  try {
    // Fetch user data from the server after successful sign-in
    const res = localStorage.getItem("currentuser");
    console.log(res);
    const result = fetch('/api/userdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).data
    console.log(result);

  } catch(e){
    console.log(e);
  }
  const res = localStorage.getItem("details");
  const datas = {
    name: res.name,
    email: res.email,
    number: res.number,
  }
  console.log(datas);

    return (
        <>
            <section className="content">
                <main>
                    <div className="header">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li><a href="">
                                        Profile
                                    </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pic">
                        <center>
                        <img src='images/user.png' alt="User Icon" className="ic"/>
                        <h4>Name: Midhun</h4>
                        <h4>Number: 8903909217</h4>
                        <h4>Email: midhun890390@gmail.com</h4>
                        </center>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home
