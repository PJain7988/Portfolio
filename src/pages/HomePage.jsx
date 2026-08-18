import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Skill from "../components/Skill";
import CodingAchievements from "../components/CodingAchievements";
import Contact from "../components/Contact";

const HomePage = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <CodingAchievements />
            <Project />
            <Skill />
            <Contact />
        </main>
    );
};

export default HomePage;
