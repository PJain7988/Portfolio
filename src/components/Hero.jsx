import React from "react";
import { motion } from "framer-motion";
import { ButtonOutline } from "./Button";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section id="home" className="pt-0 lg:pt-0">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
                            <img
                                src="/images/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="Priya Jain"
                                className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <motion.h2
                        className="headline-1 mt-5 mb-8 lg:mb-10 text-3xl md:text-5xl font-extrabold leading-snug 
                       bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 
                       bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Typewriter
                            words={[
                                "Hi, I'm Priya Jain 👋",
                                "Software Development Engineer",
                                "Full-Stack Web Developer",
                                "AI & Machine Learning Enthusiast",
                                "Competitive Programmer"
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </motion.h2>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="/images/PriyaJainCV.pdf"
                            download
                            className="btn btn-primary flex items-center gap-2"
                        >
                            <span className="material-symbols-rounded">download</span>
                            Download CV
                        </a>

                        <ButtonOutline
                            href="#layout"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>
                <div className="flex justify-center lg:block lg:mt-0">
                    <figure className="w-full lg:max-w-[480px] ml-auto 
                     bg-gradient-to-t from-sky-400 via-25% via-sky-40/40 to-55% 
                     rounded-[30px] lg:rounded-[60px] overflow-hidden">
                        <img
                            src="/images/hero-banner.png"
                            alt="Priya Jain"
                            className="w-full h-auto object-cover"
                        />
                    </figure>
                </div>

            </div>
        </section>
    );
};

export default Hero;
