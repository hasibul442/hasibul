import Link from 'next/link';
import React from 'react'
import * as FaIcons from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" href="/admin">
                        <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold">Hasibul Hasan</span>
                    </Link>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link  active" href="/admin">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaBuffer size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/skills">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaHive size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Skills</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/interests">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaRocket size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Interests</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/experiences">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaArrowsTurnRight size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Experiences</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/educations">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaBook size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Education</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/projects">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaAtom size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Projects</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/testimonials">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaAward size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Testimonials</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin/blogs">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaBlog size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Blogs</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/admin">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaIcons.FaUser size={16} />
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="/admin">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaSignOutAlt size={16}/>
                                </div>
                                <span className="nav-link-text ms-1">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar