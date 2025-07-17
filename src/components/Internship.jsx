import React from 'react';

const internships = [
  {
    role: 'Full Stack Development Intern',
    duration: 'June 2025 – August 2025',
    company: 'Coding Blocks, Geeta University, Panipat',
    details: [
      'Designed and developed end-to-end full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Created responsive, scalable UIs and integrated RESTful APIs to ensure seamless user experience and efficient data flow.',
      'Collaborated in a project-based environment, gaining practical exposure to Agile methodology and Git version control.',
    ],
  },
  {
    role: 'Data Structures & Algorithms (DSA) with C++',
    duration: 'June 2024 – August 2024',
    company: 'Coding Blocks, Geeta University, Panipat',
    details: [
      'Solved 700+ DSA problems on LeetCode, mastering advanced topics including recursion, dynamic programming, backtracking, and greedy algorithms.',
      'Participated in peer learning and mentoring sessions to reinforce understanding of core computer science concepts and algorithm design.',
      'Improved problem-solving speed and accuracy for technical interviews through daily practice and mock contests.',
    ],
  },
  {
    role: 'Frontend Web Development Intern',
    duration: 'May 2024 – June 2024',
    company: 'Octanet Pvt. Ltd. (Remote)',
    details: [
      'Built responsive websites using HTML, CSS, JavaScript, and Bootstrap, applying UI/UX principles for a better user interface.',
      'Completed real-world projects in a remote work setting, improving collaboration and communication in virtual teams.',
      'Followed development best practices, focusing on clean code, accessibility, and cross-browser compatibility.',
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="bg-zinc-900 py-16 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Internship Experience</h2>

      <div className="space-y-10">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{intern.role}</h3>
            <p className="text-sm text-zinc-400">{intern.duration}</p>
            <p className="text-sm text-zinc-300 italic mb-4">{intern.company}</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
              {intern.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
