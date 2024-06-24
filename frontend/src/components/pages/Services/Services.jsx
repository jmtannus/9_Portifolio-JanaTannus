import React from "react";
import ServicesBox from "./ServicesBox";
import Heading from "../../HelperComp/Heading";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading
        title="Services"
        subtitle="Html, Css, JavaScript, FrontEnd, Requisitos, Design Gráfico, Vendas"
      />

      {/* Services Card */}
      <ServicesBox />
    </div>
  );
};

export default Services;
