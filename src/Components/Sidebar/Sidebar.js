import React from "react"
import "./Sidebar.css"
import 'boxicons'
import { Link, useLocation } from 'react-router-dom';
const Home = () => {
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';
    const isBook = location.pathname === '/book';
    const isRent = location.pathname === '/rent';
    return (
        <>
        <section className="sidebar">
            
            <div className="sidebar">
                <a href="/" className="logo">
                <box-icon name='home' type='solid' ></box-icon>
                    <div className="logo-name"><span>ROOM</span>BOOKING</div>
                </a>
                <ul className="side-menu">
                    <li className={isDashboard ? 'active' : ''}><a href="dashboard"><box-icon name='dashboard' type='solid' ></box-icon>Dashboard</a></li>
                    <li className={isBook ? 'active' : ''}><a href="book"><box-icon name='store-alt' ></box-icon>Book</a></li>
                    <li className={isRent ? 'active' : ''}><a href="rent"><box-icon name='money-withdraw' ></box-icon>Rent</a></li>
                </ul>
                <ul className="side-menu">
                    <li className="logout">
                    <a href="sign-in" className="logout">
                        <box-icon name='log-out-circle' color='red'></box-icon>
                        Logout
                    </a>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <div className="content">
                <nav>
                    <box-icon name='menu' className='bx'></box-icon>
                    <img src='images/user.png' alt="User Icon" className="icn"/>
                </nav>
            </div>
        </section>
        </>
    )
}

export default Home
