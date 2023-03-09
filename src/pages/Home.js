import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import {Skills} from "../components/Skills/Skills";
import MiniProjects from '../components/MiniProjects/MiniProjects'
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <MiniProjects />
      <About />
      <Skills/>
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
