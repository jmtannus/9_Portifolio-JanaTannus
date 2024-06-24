import React from "react";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading
        title="About"
        subtitle="Welcome to my space of creativity and innovation!"
      />
      {/* Details section */}
      <div className="mt-10 text-slate-500 ">
        <p>
          I am a versatile professional with a rich combination of skills in
          technology and well-being.
        </p>{" "}
        <br />
        <p>
          My hard skills include Html, Css, JavaScript, FrontEnd development,
          Requirements Analysis, Graphic Design using tools like Figma and
          CorelDraw, and GitHub for version control.
        </p>{" "}
        <br />
        <p>
          I also have knowledge in quality assurance, Scrum: Agile Methodology
          for Processes and Management, Power BI, and NoSql.
        </p>{" "}
        <br />
        <p>
          In addition to my technical skills, I integrate fashion, technology,
          and well-being with a unique approach. I am patient, attentive,
          creative, with a keen eye for detail.
        </p>{" "}
        <br />
        <p>
          Each project is carried out with empathy and courtesy, driven by a
          commitment to enhance the quality of life and personal fulfillment for
          all involved.
        </p>
        {/* social links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* button links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn ">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
