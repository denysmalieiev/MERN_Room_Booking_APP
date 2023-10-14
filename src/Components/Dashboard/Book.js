import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import "./Book.css"

const Home = () => {
    return (
        <>
        <Sidebar />
        <section className="content">
            <main>
                <div class="header">
                    <div class="left">
                        <h1>Book Room</h1>
                        <ul class="breadcrumb">
                            <li><a href="#">
                                Book Now
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="cards">
                <div class="card">
                    <div class="image">
                        <img src="images/gallery-2.jpg" />
                    </div>
                    <div class="title">
                        <h1>Chennai</h1>
                    </div>
                    <div class="des">
                        Min : 1 day<br />Max : 30 days<br />Cost per day : Rs.1000
                        <button>Book Now</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="images/popular3.jpg" />
                    </div>
                    <div class="title">
                        <h1>Coimbatore</h1>
                    </div>
                    <div class="des">
                        Min : 1 day<br />Max : 30 days<br />Cost per day : Rs.1050
                        <button>Book Now</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="images/popular1.jpg" />
                    </div>
                    <div class="title">
                        <h1>Madurai</h1>
                    </div>
                    <div class="des">
                        Min : 1 day<br />Max : 10 days<br />Cost per day : Rs.1050
                        <button>Book Now</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="images/dest-1.jpg" />
                    </div>
                    <div class="title">
                        <h1>Bangalore</h1>
                    </div>
                    <div class="des">
                        Min : 1 day<br />Max : 20 days<br />Cost per day : Rs.1200
                        <button>Book Now</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="images/popular4.jpg" />
                    </div>
                    <div class="title">
                        <h1>Goa</h1>
                    </div>
                    <div class="des">
                        Min : 1 day<br />Max : 20 days<br />Cost per day : Rs.1200
                        <button>Book Now</button>
                    </div>
                </div>
                </div>

            </main>
        </section>
    </>
  )
}

export default Home
