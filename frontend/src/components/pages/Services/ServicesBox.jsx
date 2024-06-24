// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlineAnalytics } from "react-icons/md";

const ServicesData = [
  {
    name: "UX research",
    description:
      "Adept at identifying user needs and crafting user-centered solutions through usability testing and qualitative research. Passionate about translating insights into actionable improvements for enhanced user experiences and successful product outcomes.",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Specializing in Graphic Design",
    description:
      "Crafting visually stunning and impactful designs that resonate with target audiences and elevate brand identities through creativity and innovation.",
    icon: <VscLightbulbSparkle className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description:
      "Skilled at translating concepts into intuitive, user-centric web solutions through modern technologies and stylish design. Dedicated to optimizing user experiences for successful outcomes.",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Effective Requirements Analysis",
    description:
      "Proficient in identifying, documenting, and analyzing project requirements to ensure precise alignment with stakeholder needs and project objectives.",
    icon: <MdOutlineAnalytics className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }, index) => (
          <div
            key={index}
            className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}
          >
            <div className="p-2 space-y-2">
              {icon}
              <h1>{name}</h1>
              <p className="small-text" style={{ fontSize: "12px" }}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
