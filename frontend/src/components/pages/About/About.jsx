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
        subtitle="Discover more about who I am, my skills and my passion for creating innovative solutions."
      />
      {/* Details section */}
      <div className="mt-12 text-slate-500 text-sm">
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
          <a
            href="https://www.facebook.com/janatannus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook className="social-btn" />
          </a>

          <a
            href="https://www.instagram.com/janamadeiratannus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="social-btn" />
          </a>

          <a
            href="https://github.com/jmtannus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="social-btn" />
          </a>
          <a
            href="https://www.linkedin.com/in/janaina-tannus-58b32229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="social-btn" />
          </a>
        </div>
        {/* button links */}
        <div className="flex space-x-4 mt-10">
          <a href="/frontend/public/resumeTeixeiraJanaina.pdf" download className="primary-btn">
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
