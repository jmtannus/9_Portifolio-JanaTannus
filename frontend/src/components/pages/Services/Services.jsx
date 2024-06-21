import React from "react";
import ServicesBox from "./ServicesBox";


const Services = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
          Html, Css, JavaScript, FrontEnd, Requisitos, Design Gráfico, Vendas
        </p>
      </div>

      {/* Services Card */}
      <ServicesBox />
    </div>
  );
};

export default Services;
