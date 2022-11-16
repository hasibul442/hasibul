
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import  rightarrow from './../../../../public/assets/Icon/rightarrow.json';
import Lottie from 'react-lottie';

function SideBar() {
    const [open, setOpen] = useState(true);

    const rightarrows = {
        loop: true,
        autoplay: true,
        animationData: rightarrow,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
  return (
      <>

              <div
                  className={`${
                      open ? "w-48" : "w-14"
                  } duration-300 h-screen bg-primary-1 relative`}
              >
                  <div
                      className="absolute cursor-pointer bg-primary-1 right-0 top-3 p-2"
                      onClick={() => setOpen(!open)}
                  >
                    <div className={` duration-300 ${open ? "rotate-180" : "rotate-360"}`}>
                        <Lottie options={rightarrows}  height={40} width={40}/>
                    </div>
                  </div>
              </div>


      </>
  );
}

export default SideBar
