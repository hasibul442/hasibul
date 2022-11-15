
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function SideBar() {
    const [open, setOpen] = useState(true);
  return (
      <>
          <div className="flex">
              <div
                  className={`${
                      open ? "w-72" : "w-20"
                  } duration-300 h-screen bg-primary relative`}
              >
                  <div
                      className="absolute cursor-pointer bg-primary right-0 top-3 p-2"
                      onClick={() => setOpen(!open)}
                  >
                      <i
                          className={`fa-solid  ${
                              open ? "fa-backward" : "fa-forward"
                          } text-light `}
                      ></i>
                  </div>
              </div>
              <div className="flex-1 h-screen">
                  <NavBar/>
              </div>
          </div>
      </>
  );
}

export default SideBar
