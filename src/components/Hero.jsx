import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Code, Download, ArrowRight, Trophy, Sparkles, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    const cpStats = [
        { label: "LeetCode Solved", value: "1000+", link: "/coding" },
        { label: "CodeChef Rating", value: "1360", link: "/coding" },
        { label: "Codeforces Rating", value: "922", link: "/coding" },
        { label: "HackerRank", value: "5★ C++", link: "/coding" }
    ];

    return (
        <section id="home" className="pt-28 lg:pt-36 pb-16 overflow-hidden relative bg-zinc-950">
            {/* Background Glow Spheres */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Text & Intro */}
                    <div>
                        {/* Status Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 mb-6 bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg"
                        >
                            <figure className="w-7 h-7 rounded-full overflow-hidden border border-zinc-700 shrink-0">
                                <img
                                    src="/images/avatar-1.jpg"
                                    width={28}
                                    height={28}
                                    alt="Priya Jain"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="flex items-center gap-2 text-zinc-300 text-xs md:text-sm font-medium">
                                <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]">
                                    <span className="absolute inset-0 w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                                </span>
                                Available for SDE & Engineering Roles
                            </div>
                        </motion.div>

                        {/* Name Headline */}
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Priya Jain</span> 👋
                        </motion.h1>

                        {/* Animated Typewriter Subtitle */}
                        <motion.div 
                            className="mb-6 text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 min-h-[48px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typewriter
                                words={[
                                    "Software Development Engineer (SDE)",
                                    "Full-Stack Web Developer (MERN)",
                                    "Competitive Programmer (1000+ Solved)",
                                    "AI & ML Specialist"
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={35}
                                delaySpeed={1800}
                            />
                        </motion.div>

                        {/* Bio Paragraph */}
                        <motion.p
                            className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-[55ch]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Computer Science Engineer passionate about building scalable full-stack applications and solving algorithmic problems. Rated on Codeforces, CodeChef, and LeetCode.
                        </motion.p>

                        {/* Action CTA Buttons */}
                        <motion.div 
                            className="flex flex-wrap items-center gap-4 mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <a
                                href="/images/Priya_Jain.pdf"
                                download
                                className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
                            >
                                <Download size={18} />
                                <span>Download Resume</span>
                            </a>

                            <Link 
                                to="/coding"
                                className="flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-blue-500/50 text-zinc-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Trophy size={18} className="text-amber-400" />
                                <span>Coding Profiles</span>
                            </Link>

                            <Link 
                                to="/projects"
                                className="flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white font-semibold rounded-xl transition-all duration-300"
                            >
                                <span>Projects</span>
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        {/* CP Stats Overview Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl backdrop-blur-md"
                        >
                            {cpStats.map((stat, idx) => (
                                <Link 
                                    to={stat.link} 
                                    key={idx}
                                    className="p-3 bg-zinc-950/60 border border-zinc-800/50 rounded-xl text-center hover:border-blue-500/40 transition-colors group"
                                >
                                    <div className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-zinc-400 font-medium mt-1">
                                        {stat.label}
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Image Banner with Floating Glass Cards */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative w-full max-w-[440px]"
                        >
                            {/* Glowing halo frame */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 rounded-[40px] blur-lg opacity-40 animate-pulse"></div>

                            {/* Image container */}
                            <figure className="relative w-full bg-zinc-900 border border-zinc-800 rounded-[36px] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/hero-banner.png"
                                    alt="Priya Jain"
                                    className="w-full h-auto object-cover"
                                />
                            </figure>

                            {/* Floating Card 1: Codeforces & CodeChef */}
                            <motion.div 
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-zinc-900/95 border border-zinc-800 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3"
                            >
                                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <Terminal size={22} />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-400 font-medium">Codeforces & CodeChef</div>
                                    <div className="text-sm font-bold text-white">Active CP Competitor</div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: 1000+ Problems */}
                            <motion.div 
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 bg-zinc-900/95 border border-zinc-800 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3"
                            >
                                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                                    <Sparkles size={22} />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-400 font-medium">DSA Problems</div>
                                    <div className="text-sm font-bold text-white">1000+ Solved</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
