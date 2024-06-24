// eslint-disable-next-line no-unused-vars
import React from "react";
import ServicesBox from "./ServicesBox";
import Heading from "../../HelperComp/Heading";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading
        title="Services"
        subtitle="Html, Css, JavaScript, ReactJs, FrontEnd, Requirements Analysis, Grafic Design, Art & Photography"
      />

      {/* Services Card */}
      <ServicesBox />
    </div>
  );
};

export default Services;
