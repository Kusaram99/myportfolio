import React from "react";
import CyberMatrixHero from "@/components/ui/cyber-matrix-hero";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <>
      <CyberMatrixHero />
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
