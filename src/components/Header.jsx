import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { Menu, X, Mail, Sparkles } from 'lucide-react';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="fixed top-4 left-0 w-full flex justify-center items-center z-50 transition-all duration-300 px-4">
            <div className="max-w-6xl w-full mx-auto px-5 py-2.5 flex justify-between items-center bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl">
                
                {/* Brand Logo */}
                <Link to="/" className="logo flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center border border-blue-400/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-extrabold text-lg tracking-tighter">PJ</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-black tracking-wider uppercase text-sm group-hover:text-blue-400 transition-colors duration-300">
                            Priya Jain
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 tracking-tight flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            SDE & Developer
                        </span>
                    </div>
                </Link>

                {/* Navbar Navigation Items */}
                <div className="relative flex items-center">
                    <Navbar navOpen={navOpen} closeNav={() => setNavOpen(false)} />
                </div>
                
                {/* Right Action Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/contact"
                        className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
                    >
                        <Mail size={16} />
                        <span>Contact Me</span>
                    </Link>

                    <button 
                        className="menu-btn md:hidden text-zinc-300 hover:text-white" 
                        onClick={() => setNavOpen(!navOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {navOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
