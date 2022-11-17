import React from 'react';
import Lottie from 'react-lottie';
import "./dashboard.css";
import  user from './../../../../public/assets/Icon/user.json';
import  category from './../../../../public/assets/Icon/type.json';
import  books from './../../../../public/assets/Icon/books.json';
import audioBooks from "./../../../../public/assets/Icon/audiobook.json";

function Dashboard() {
    const userIcon = {
        loop: true,
        autoplay: true,
        animationData: user,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const categoryIcon = {
        loop: true,
        autoplay: true,
        animationData: category,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const bookIcon = {
        loop: true,
        autoplay: true,
        animationData: books,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const audioBookIcon = {
        loop: true,
        autoplay: true,
        animationData: audioBooks,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
  return (
      <>
          <div className="grid grid-cols-3 gap-3">
              <div className="card-1 rounded-md">
                  <div className="flex">
                      <div className=" flex-1 py-2 text-center">
                          <Lottie options={userIcon} height={120} width={120} />
                      </div>
                      <div className="text-dark-1 flex-1 text-center">
                          <p className="text-2xl font-bold pt-14">200</p>
                      </div>
                  </div>
              </div>

              <div className="card-2 rounded-md">
                  <div className="flex">
                      <div className=" flex-1 py-2 text-center">
                          <Lottie
                              options={categoryIcon}
                              height={120}
                              width={120}
                          />
                      </div>
                      <div className="text-dark-1 flex-1 text-center">
                          <p className="text-2xl font-bold pt-14">200</p>
                      </div>
                  </div>
              </div>

              <div className="card-3 rounded-md">
                  <div className="flex">
                      <div className=" flex-1 py-2 text-center">
                          <Lottie options={bookIcon} height={120} width={120} />
                      </div>
                      <div className="text-dark-1 flex-1 text-center">
                          <p className="text-2xl font-bold pt-14">200</p>
                      </div>
                  </div>
              </div>

              <div className="card-4 rounded-md">
                  <div className="flex">
                      <div className=" flex-1 py-2 text-center">
                          <Lottie
                              options={audioBookIcon}
                              height={120}
                              width={120}
                          />
                      </div>
                      <div className="text-dark-1 flex-1 text-center">
                          <p className="text-2xl font-bold pt-14">200</p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Dashboard
