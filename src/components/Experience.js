import React from "react";

const Experience = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div pb-8>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Entry-level web developer with 2 years’ experience in HTML, CSS, and
          React. Proven ability to create reusable components for an
          enterprise-level web application. Passionate about technology and
          building scalable web solutions
        </p>
        <br />
        <p className="text-xl">
          Also have intrest in Cricket , Travelling, Cooking, Fitness
        </p>
      </div>
    </div>
  );
};

export default Experience;
