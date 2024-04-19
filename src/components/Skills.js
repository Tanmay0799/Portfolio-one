import React from "react";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked on </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <img
              src="https://logowik.com/content/uploads/images/492_html5.jpg"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img
              src="https://logowik.com/content/uploads/images/123_css3.jpg"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">React</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500">
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">GitHub</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd23nvRRunfXZ2Y7VqnV7LUkxI1B82Aq-N9nDc3aJdHw&s"
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
