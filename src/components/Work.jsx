import React, { useState } from "react";
import jobPortal from "../assets/projects/jobPortal.png";
import spotify from "../assets/projects/spotify1.png";
import cartApp from "../assets/projects/cartApp.png";
import todoApp from "../assets/projects/todoApp.png";
import blogNextApp from "../assets/projects/blogNextApp.png";
import crudApp from "../assets/projects/crudApp.png";
import websiteDesign from "../assets/projects/websiteDesign.png";
import todoKanaban from "../assets/projects/todoKanaban.png";
import rateCalendar from "../assets/projects/rateCalendar.png";
import accounting1 from "../assets/projects/accounting1.png";
import accounting2 from "../assets/projects/accounting2.png";
import accounting3 from "../assets/projects/accounting3.png";
import accounting4 from "../assets/projects/accounting4.png";
import accounting5 from "../assets/projects/accounting5.png";

import ImageGalleryModal from "./ImageGalleryModal";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const openGallery = (images) => {
    setGalleryImages(images);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setGalleryImages([]);
  };

  const images = [
    { original: spotify },
    { original: cartApp },
    { original: todoApp },
    { original: blogNextApp },
    { original: crudApp },
    { original: websiteDesign },
  ];
  return (
    <div name="work" className="w-full text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${jobPortal})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Job Portal MERN Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://jobportalfrontend-r7o2.onrender.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/jobPortalFrontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${spotify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Spotify Clone Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://spotify-clone-rtk.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/spotify-clone/tree/main/pro-15-spotify-clone-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${cartApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-xl font-bold text-white">
                E-commerce Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://shopping-cart-redux.onrender.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/simple-shopping-cart-redux"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${accounting1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center px-4">
              <span className="text-xl font-bold text-white">
                Accounts Software Using NextJs & Strapi
              </span>
              <div className="pt-8 text-center">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() =>
                    openGallery([
                      { original: accounting1 },
                      { original: accounting2 },
                      { original: accounting3 },
                      { original: accounting4 },
                      { original: accounting5 },
                    ])
                  }
                >
                  Demo
                </button>
                <a
                  href="https://github.com/zituhossain/simple-shopping-cart-redux"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {isOpen && (
              <ImageGalleryModal
                images={galleryImages}
                onClose={closeGallery}
              />
            )}
          </div>

          <div
            style={{ backgroundImage: `url(${todoApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Todo Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://todo-app-using-redux-toolkit.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/Todo-app-using-redux-toolkit"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${blogNextApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Blog Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://blog-app-next-js-pink-rho.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/blogAppNextJs"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${websiteDesign})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                React Tailwind Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-tailwind-website.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/Simple-Website-using-react-tailwind"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${todoKanaban})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                React Todo Board
              </span>
              <div className="pt-8 text-center">
                <a href="https://to-do-board-omega.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/toDoBoard"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${rateCalendar})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                React Calender App
              </span>
              <div className="pt-8 text-center">
                <a href="https://qmqhtj-5173.csb.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/zituhossain/rateCalenderApp"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
