import React from "react";
import ProjectBox from "./ProjectBox.jsx";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Projects
        </h1>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
          Welcome to my space of creativity and innovation!
        </p>
      </div>
      {/* project section */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
