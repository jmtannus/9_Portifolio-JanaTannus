// eslint-disable-next-line no-unused-vars
import React from "react";
import MyBook from "./components/MyBook";
import BgTexture from "./assets/brown-wooden-flooring.jpg";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%"
};

const App = () => {
  return (
    <div style={BgTextureStyle} className="w-full h-full flex justify-center items-center">
      <MyBook />
    </div>
  );
};

export default App;
