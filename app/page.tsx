"use client";

// creating a portfolio using Nextjs

import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
