import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img
              src={personImg}
              alt="foto de Janaina"
              className="w-[220px] mx-auto"
            />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello!</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I´m Janna
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
                I am a versatile professional who blends fashion, technology,
                and well-being with a unique touch. With patience, care, and
                creativity, I move each project forward, always with kindness
                and respect. My commitment is to ensure that everyone involved
                achieves a high quality of life and personal satisfaction. I am
                here to bring innovation and a special touch to everything I do.
                Let's create something amazing together!🌟
              </p>
              <a
                className="inline-block primary-btn mr-4"
                href="mailto:jmtannus@gmail.com"
              >
                {" "}
                Resume
              </a>
              <a
                className="inline-block primary-btn "
                href="mailto:jmtannus@gmail.com"
              >
                {" "}
                More...
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
