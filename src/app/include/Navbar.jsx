import Link from 'next/link';
import React from 'react'
import { FaBuffer } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html " target="_blank">
                        <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold">Soft UI Dashboard 3</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link  active" href="/">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " href="../pages/tables.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Tables</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/billing.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Billing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/virtual-reality.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Virtual Reality</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/rtl.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">RTL</span>
                            </a>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/profile.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/sign-in.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Sign In</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/sign-up.html">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <FaBuffer size={20} />
                                </div>
                                <span className="nav-link-text ms-1">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Navbar