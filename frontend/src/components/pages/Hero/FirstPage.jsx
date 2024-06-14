import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto -my-12" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello!</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                Me chamo Janaína
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
              Profissional multifacetada. Minha abordagem integra moda,
            tecnologia e bem-estar, combinando paciência, carinho, criatividade
            e atenção aos detalhes. Cada projeto conduzo com simpatia e
            educação, refletindo meu compromisso sincero com a qualidade de vida e a
            realização pessoal de todos que fazem parte do processo. 🌟
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:jmtannus@gmail.com"
              >
                {" "}
                
Contrate-me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
