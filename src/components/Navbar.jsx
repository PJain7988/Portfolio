import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navOpen, closeNav }) => {
    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Coding Profiles', link: '/coding' },
        { label: 'Projects', link: '/projects' },
        { label: 'Skills', link: '/skills' },
        { label: 'Experience & Education', link: '/experience' },
        { label: 'Contact', link: '/contact' }
    ];

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-1">
                {navItems.map(({ label, link }, key) => (
                    <NavLink
                        key={key}
                        to={link}
                        onClick={closeNav}
                        className={({ isActive }) =>
                            `px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                            }`
                        }
                        end={link === '/'}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
