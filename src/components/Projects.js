import React from "react";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      src: "https://i.ibb.co/FDTKw4Q/gastronome-high-resolution-logo.png",
      href: "https://main--gastronome1.netlify.app/",
      dref: "https://github.com/Tanmay0799/Gastronome",
    },
    {
      id: 2,
      src: "https://i.ibb.co/F7zX6mP/ask-me-ratings-high-resolution-logo.png",
      href: "https://movieapp0799.netlify.app/",
      dref: "https://github.com/Tanmay0799/Movie_app",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my latest projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map(({ id, src, href, dref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="img"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = href;
                  }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = dref;
                  }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
