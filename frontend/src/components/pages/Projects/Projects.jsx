// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
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

Projects.propTypes = {
  ProjectData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      // Add other properties as needed
    })
  ).isRequired,
};

export default Projects;
