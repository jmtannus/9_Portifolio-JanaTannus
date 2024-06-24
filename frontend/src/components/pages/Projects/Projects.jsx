import React from "react";
import ProjectBox from "./ProjectBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading
        title="Projects"
        subtitle="Welcome to my space of creativity and innovation!"
      />
      {/* project section */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
