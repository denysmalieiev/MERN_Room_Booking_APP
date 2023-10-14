import React, { useEffect, useState } from 'react';
import "./Details.css"


const Home = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
  });

  useEffect(() => {
    // Fetch user data from the server after successful sign-in
    fetch('/api/userdata')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error or redirect to a sign-in page if the user is not authenticated
      });
  }, []);

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
                        <h4>Name: {userData.name}</h4>
                        <h4>Number: {userData.number}</h4>
                        <h4>Email: {userData.email}</h4>
                        </center>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home
