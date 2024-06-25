// eslint-disable-next-line no-unused-vars
import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
        </div>
        {/* skills sections */}
        <div className="space-y-7">
          <SkillsLevel skillName="Design" percentage={"90%"} />
          <SkillsLevel skillName="HTML" percentage={"90%"} />
          <SkillsLevel skillName="CSS" percentage={"75%"} />
          <SkillsLevel skillName="JavaScript" percentage={"60%"} />
          <SkillsLevel skillName="ReactJS" percentage={"70%"} />
          <SkillsLevel skillName="Figma" percentage={"50%"} />
          <SkillsLevel skillName="Requirements Analysis" percentage={"89%"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
