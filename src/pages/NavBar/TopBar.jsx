import React from 'react'
import { Link } from 'react-router-dom'
import style from './topbar1.module.css'

function TopBar() {
    return (
        <>
            <nav id="navbar" className={style.navbar}>
                <ul>
                    <li><Link className="nav-link active" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    <li><Link className="nav-link" to="/resume">Resume</Link></li>
                    <li><Link className="nav-link" to="/services">Services</Link></li>
                    <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </>
    )
}

export default TopBar