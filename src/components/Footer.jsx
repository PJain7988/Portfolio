import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2, Trophy, Terminal, MapPin } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Me', path: '/about' },
        { label: 'Coding Profiles', path: '/coding' },
        { label: 'Projects Showcase', path: '/projects' },
        { label: 'Technical Skills', path: '/skills' },
        { label: 'Experience & Education', path: '/experience' },
        { label: 'Contact', path: '/contact' }
    ];

    const cpProfiles = [
        { label: 'Codeforces (Priya_GU)', url: 'https://codeforces.com/profile/Priya_GU' },
        { label: 'CodeChef (priya_jain_01)', url: 'https://www.codechef.com/users/priya_jain_01' },
        { label: 'LeetCode (Student_GU)', url: 'https://leetcode.com/u/Student_GU/' },
        { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/user_96fineo2gqw/' },
        { label: 'HackerRank (5★ C++)', url: 'https://www.hackerrank.com/profile/2301301053_priya' }
    ];

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    
                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3 group w-fit">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-lg">
                                PJ
                            </div>
                            <span className="text-white font-extrabold text-lg tracking-wide group-hover:text-blue-400 transition-colors">
                                Priya Jain
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                            Software Development Engineer specializing in Full-Stack Web Engineering, Data Structures & Algorithms, and AI/ML applications.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Available for Engineering Opportunities
                        </div>
                    </div>

                    {/* Column 2: Navigation Directory */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                            <Code2 size={18} className="text-blue-400" />
                            <span>Navigation</span>
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {navLinks.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-white hover:translate-x-1 transition-all inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Coding Profiles */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                            <Trophy size={18} className="text-amber-400" />
                            <span>Coding Profiles</span>
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {cpProfiles.map((cp, idx) => (
                                <li key={idx}>
                                    <a
                                        href={cp.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block"
                                    >
                                        {cp.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Social Connect */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                            <Mail size={18} className="text-cyan-400" />
                            <span>Get In Touch</span>
                        </h4>
                        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                            Safidon, Haryana 126112, India<br />
                            <a href="mailto:priyajain7988@gmail.com" className="text-blue-400 hover:underline">
                                priyajain7988@gmail.com
                            </a>
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/PJain7988"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500 transition-all hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/priya72062/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500 transition-all hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/im__garg_551/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500 transition-all hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Back To Top */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
                    <p>© {new Date().getFullYear()} Priya Jain. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 text-zinc-300 hover:text-white transition-all"
                    >
                        <span>Back to top</span>
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
