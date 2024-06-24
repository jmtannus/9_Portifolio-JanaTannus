import React from "react";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="h-[160px] rounded-xl">
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              
              {/* details section */}
              <div>
                <h1>{project.name} </h1>
                <p>{project.description}</p>
                <a href={project.previwLink}>View Project</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;
