import React from 'react';
import { ButtonPrimary } from './Button';

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' }, // Updated from 'Work'
  { label: 'Internships', href: '#internships' }, // Added Internships section
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'Email', href: 'mailto:priyajain7988@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/PJain7988' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/priya72062/' },
  { label: 'Instagram', href: 'https://www.instagram.com/im__garg_551/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Student_GU/' },
  { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/user/user_96fineo2gqw/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/2301301053_priya' },
  { label: 'Portfolio', href: 'https://portfolio-alpha-eosin-98.vercel.app/' }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up text-center lg:text-left">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:priyajain7988@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 font-semibold reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 font-semibold reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-10 mb-8 gap-4">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm text-center reveal-up">
            &copy; 2025 <span className="text-zinc-200">Priya Jain</span> • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
