import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/jotjoy-happy-notes.png";
import ProjectImg2 from "../assets/projects/ecommerce.jpg";
import ProjectImg3 from "../assets/projects/playlist-JanaT.png";
import ProjectImg4 from "../assets/projects/jotjoy-happy-notes.png";

const ProjectData = [
  {
    name: "JotJoy Happy Notes website",
    description: "Complete responsive website using ReactJs and Tailwind CSS",
    image: ProjectImg1,
    previewLink: "https://joyjot-365.netlify.app",
  },
  {
    name: "E-commerce website",
    description: "Complete responsive website using ReactJs and Tailwind CSS",
    image: ProjectImg2,
    previewLink: "https://jmt2.netlify.app",
  },
];

const ProjectData2 = [
  {
    name: "Playlist JanaT app",
    description: "Complete responsive aplication using JavaScript, HTML and CSS",
    image: ProjectImg3,
    previewLink: "https://music-player-jt.vercel.app/",
  },
  {
    name: "JotJoy Happy Notes website",
    description: "Complete responsive website using ReactJs and Tailwind CSS",
    image: ProjectImg4,
    previewLink: "https://joyjot-365.netlify.app",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="Meu Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2}  />
      </Page>
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
