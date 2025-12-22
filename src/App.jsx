import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
// import MouseGlow from "./components/mouse_glow/MouseGlow";

const App = () => {
  return (
    <>
      {/* <MouseGlow /> Ensure this is present at the highest level */}
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
