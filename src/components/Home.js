import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Entry-level web developer with 2 years’ experience in HTML, CSS, and
            React. Proven ability to create reusable components for an
            enterprise-level web application. Passionate about technology and
            building scalable web solutions
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/65/3c/75/653c759f23a58107ca0ff57de215d149.jpg"
            alt="img"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
