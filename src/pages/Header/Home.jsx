import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../NavBar/TopBar'


function Home() {
  return (
    <>

      <header id="header">
        <div className="container">

          <h1><a href="/">Mohammad Hasibul Hasan</a></h1>
          {/* <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>  */}
          <h2>I'm a passionate <span>Softwar Developer</span> from Bangladesh</h2>

          <TopBar />

          <div className="social-links">
            <a href="https://github.com/hasibul442" className="github"><i className="bi bi-github"></i></a>
            <a href="https://www.facebook.com/hasibul.hasan.77582/" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/mohammad-hasibul-hasan/" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>

        </div>
      </header>

    </>
  )
}

export default Home
