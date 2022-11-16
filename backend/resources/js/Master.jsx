import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Dashboard from "./Page/Dashboard/Dashboard";
import Home from "./Page/Home";


function Master() {
    return (
        <>
        <div className="flex">
                <SideBar />

                <div className="flex-1 h-screen">
                  <div>
                        <NavBar/>
                  </div>

                  <div className="p-3">
                    <Dashboard/>
                  </div>

              </div>
        </div>

        </>
    );
}

export default Master;
