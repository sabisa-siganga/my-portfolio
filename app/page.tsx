"use client";

import Link from "next/link";
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
