import React from 'react'

const socialLinks = [
  {
    href: 'https://github.com/PJain7988',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.273.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.58 9.58 0 012.504.336c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.566 4.936.359.309.678.921.678 1.856 0 1.339-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.014 10.014 0 0022 12c0-5.514-4.486-10-10-10z" />
      </svg>
    ),
    alt: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/priya72062/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.604 4.1 5.5 3 5.5S1.02 4.604 1.02 3.5 1.9 1.5 3 1.5s1.98.896 1.98 2zM.5 7h5V23h-5V7zm7 0h4.837v2.768h.068c.675-1.28 2.326-2.635 4.786-2.635 5.117 0 6.064 3.36 6.064 7.725V23h-5v-6.872c0-1.64-.028-3.75-2.286-3.75-2.287 0-2.635 1.787-2.635 3.635V23h-5V7z" />
      </svg>
    ),
    alt: 'LinkedIn'
  },
  {
    href: 'https://www.instagram.com/im__garg_551/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    ),
    alt: 'Instagram'
  },
  {
    href: 'mailto:priyajain7988@gmail.com',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8 7l8-5H4l8 5zm0 2l-8-5v10h16V8l-8 5z" />
      </svg>
    ),
    alt: 'Email'
  },
  {
    href: 'https://leetcode.com/u/Student_GU/',
    icon: (
      <img src="/images/leetcode.jpeg" alt="LeetCode" className="w-6 h-6" />
    ),
    alt: 'LeetCode'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="md-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>
          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/bgdlrrja"
          className="xl:pl-10 2xl:pl:20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Priya Jain"
                className="text-field reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="priyajain7988@gmail.com"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
