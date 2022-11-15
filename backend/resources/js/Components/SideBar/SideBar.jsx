
import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {

  return (
      <>
          <div className="flex">
              <div className={`w-72 h-screen bg-primary relative`}>
                  <div className="absolute cursor-pointer right-2 top-5 w-7 ">
                      <i className="fa-solid fa-bars fa-xl" style={{ color:"#fff" }}></i>
                  </div>
              </div>
              <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                  <h1>Home Page</h1>
              </div>
          </div>
      </>
  );
}

export default SideBar
