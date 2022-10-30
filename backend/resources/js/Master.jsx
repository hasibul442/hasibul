import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Page/Home";


function Master() {
    return (
        <>
            <Router>
                <div id="wrapper">
                    <NavBar />
                    <SideBar />
                    <div className="content-page">
                        <div className="content">
                            <div className="container-fluid">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default Master;
