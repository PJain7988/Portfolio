import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Skill from "../components/Skill";
import CodingAchievements from "../components/CodingAchievements";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Internship from "../components/Internship";

const HomePage = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <CodingAchievements />
            <Project />
            <Skill />
            <Internship />
            <Education />
            <Review />
            <Contact />
        </main>
    );
};

export default HomePage;
