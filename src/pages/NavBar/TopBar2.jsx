import React from 'react'
import { Link } from 'react-router-dom'
import style from './topbar2.module.css'
function TopBar2() {
    return (
       <div className={style.navBar_Background}>
         <div className='container'>
            <nav className={`${style.navbar1} navbar navbar-expand-lg`}>
                <h1><a className="navbar-brand" href="/">Hasibul Hasan</a></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/about">About</Link></li>
                        <li><Link className="nav-link" to="/resume">Resume</Link></li>
                        <li><Link className="nav-link" to="/services">Services</Link></li>
                        <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
       </div>
    )
}

export default TopBar2