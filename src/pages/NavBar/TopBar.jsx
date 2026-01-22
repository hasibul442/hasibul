import React from 'react'
import { Link } from 'react-router-dom'
import style from './topbar1.module.css'
import { useTheme } from '../../context/ThemeContext'

function TopBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <nav id="navbar" className={style.navbar}>
                <ul>
                    <li><Link className="nav-link active" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    {/* <li><Link className="nav-link" to="/resume">Resume</Link></li> */}
                    {/* <li><Link className="nav-link" to="/services">Services</Link></li> */}
                    <li><Link className="nav-link" to="/experience">Experience</Link></li>
                    <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li><Link className="nav-link" to="/blogs">Blogs</Link></li>
                    <li>
                        <button 
                            className={style.theme_toggle} 
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <i className="bi bi-sun-fill"></i>
                            ) : (
                                <i className="bi bi-moon-fill"></i>
                            )}
                        </button>
                    </li>
                </ul>
                <i className={`${style.mobile_nav_toggle} bi bi-list `}></i>
            </nav>
        </>
    )
}

export default TopBar
