import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import "./Rent.css"

const Home = () => {
    return (
        <>
        <Sidebar />
        <section className="content">
            <main>
                <div class="header">
                    <div class="left">
                        <h1>Rent Room</h1>
                        <ul class="breadcrumb">
                            <li><a href="#">
                                Rent Now
                            </a></li>
                        </ul>
                    </div>
                </div>

                <ul class="insights">
                    <li>
                        <box-icon name='add-to-queue' size='35px' color='blue'></box-icon>
                        <span class="info">
                            <h3>
                                Add Room
                            </h3>
                        </span>
                    </li>
                    <li>
                        <box-icon type='solid' name='edit'size='35px' color='green'></box-icon>
                        <span class="info">
                            <h3>
                                Update Room
                            </h3>
                        </span>
                    </li>
                    <li>
                        <box-icon name='message-square-x' type='solid' size='35px' color='red'></box-icon>
                        <span class="info">
                            <h3>
                                Delete Room
                            </h3>
                        </span>
                    </li>
                </ul>

                <div class="bottom-data">
                    <div class="orders">
                        <div class="header">
                            <i class='bx bx-receipt'></i>
                            <h3>Your Rooms</h3>
                            <i class='bx bx-filter'></i>
                            <i class='bx bx-search'></i>
                        </div>
                        
                        <div class="card">
                            <div class="image">
                                <img src="images/gallery-2.jpg" />
                            </div>
                            <div class="title">
                                <h1>Chennai</h1>
                            </div>
                            <div class="des">
                                Min : 1 day<br />Max : 30 days<br />Cost per day : Rs.1000
                                <button>View</button>
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
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}

export default Home
