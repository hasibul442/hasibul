import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Page/Home";


function Master() {
    return (
        <>
            
                <SideBar />
                {/* <NavBar /> */}
            
        </>
    );
}

export default Master;
