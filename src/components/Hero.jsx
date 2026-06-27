import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section id="home" className="pt-24 lg:pt-28 pb-12 overflow-hidden relative">
            {/* Decorative background glows */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 items-center lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-3 mb-8 bg-zinc-900/80 border border-zinc-800 backdrop-blur-md w-fit px-4 py-2 rounded-full shadow-lg"
                    >
                        <figure className="img-box w-7 h-7 rounded-full overflow-hidden border border-zinc-700">
                            <img
                                src="/images/avatar-1.jpg"
                                width={28}
                                height={28}
                                alt="Priya Jain"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                                <span className="absolute inset-0 w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                            </span>
                            Available for new opportunities
                        </div>
                    </motion.div>

                    <motion.h2
                        className="headline-1 mb-3 lg:mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Hi, I'm Priya Jain 👋
                    </motion.h2>

                    <motion.div 
                        className="mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 min-h-[40px] md:min-h-[50px] lg:min-h-[60px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Typewriter
                            words={[
                                "Software Development Engineer",
                                "Full-Stack Web Developer",
                                "AI & ML Enthusiast",
                                "Competitive Programmer"
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                        />
                    </motion.div>


                    <motion.div 
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <a
                            href="/images/Priya_Jain.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1"
                        >
                            <span className="material-symbols-rounded text-xl">download</span>
                            Download Resume
                        </a>

                        <a 
                            href="#about"
                            className="flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            Explore Profile
                            <span className="material-symbols-rounded text-xl">arrow_downward</span>
                        </a>
                    </motion.div>
                </div>

                <div className="flex justify-center lg:block mt-16 lg:mt-0">
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
