import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Internship from "../components/Internship";
import { motion } from "framer-motion";
import { User, Award, Code, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="pt-28 pb-16 bg-zinc-950 min-h-screen text-white">
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        <User size={16} />
                        <span>About Me & Career Roadmap</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        Driven by Code, Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Problem Solving</span>
                    </h1>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                        I am a Computer Science student at Geeta University with a passion for software engineering, competitive programming, and intelligent systems.
                    </p>
                </motion.div>
            </div>

            <About />

            {/* Core Pillars */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                            <Code size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Full-Stack Development</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Architecting responsive, modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), Tailwind CSS, and REST APIs.
                        </p>
                    </div>

                    <div className="p-8 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Competitive Programming</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            1000+ problems solved on LeetCode (1551 rating), rated on Codeforces (922 Newbie) and CodeChef (1360 rating, 1★ Diamond League).
                        </p>
                    </div>

                    <div className="p-8 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Artificial Intelligence & ML</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Hands-on experience developing ML predictive models, Data Preprocessing, Scikit-learn, and NLP applications during industry internship.
                        </p>
                    </div>
                </div>
            </div>

            <Internship />
            <Education />

            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-1"
                >
                    <span>Explore My Projects</span>
                    <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;
