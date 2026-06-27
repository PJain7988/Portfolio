import React, { useState } from 'react'
import Navbar from './Navbar'

const Header = () => {
    const [navOpen , setNavOpen] = useState(false);
    return (
        <header className="fixed top-4 left-0 w-full flex justify-center items-center z-40 transition-all duration-300">
            <div className="max-w-6xl w-[92%] mx-auto px-4 py-3 flex justify-between items-center bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl shadow-2xl">
                <h1>
                    <a href="/" className="logo flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 shadow-inner group-hover:border-blue-500/50 transition-colors">
                            <img src="/images/logo.svg" width={24} height={24} alt="Priya Jain" className="group-hover:scale-110 transition-transform duration-300"/>
                        </div>
                        <span className="text-white font-bold tracking-widest uppercase text-sm hidden lg:block group-hover:text-blue-400 transition-colors duration-300">Priya Jain.</span>
                    </a>
                </h1>
                
                <div className="relative md:justify-self-center flex items-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavOpen(!navOpen)}>
                        <span className="material-symbols-rounded text-white">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen}/>
                </div>
                
                <a href="#contact" className="hidden md:flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-0.5">
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header
