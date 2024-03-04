import { useState } from 'react'
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import './App.css'
import About from './pages/About/About';
import Home from './pages/Header/Home';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <>
      
    <Router>
    {/* <Header /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
