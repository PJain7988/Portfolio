import React from 'react';

const internships = [
  {
    role: 'AI/ML Developer',
    duration: 'June 2026 – July 2026',
    company: 'ThinkNEXT Technologies Pvt. Ltd., Mohali',
    details: [
      'Developed ML models using Python, Pandas, NumPy, and Scikit-learn for predictive analytics.',
      'Performed data preprocessing, feature engineering, and exploratory data analysis on real-world datasets.',
      'Implemented classification, regression, and clustering algorithms to solve business problems.',
    ],
  },
  {
    role: 'Full Stack Developer',
    duration: 'June 2025 – August 2025',
    company: 'Coding Blocks (Geeta University, Panipat)',
    details: [
      'Designed and developed end-to-end full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Created responsive, scalable UIs and integrated RESTful APIs to ensure seamless user experience and efficient data flow.',
      'Collaborated in a project-based environment, gaining practical exposure to Agile methodology and Git version control.',
    ],
  },
  {
    role: 'Data Structures & Algorithms',
    duration: 'June 2024 – August 2024',
    company: 'Coding Blocks (Geeta University, Panipat)',
    details: [
      'Solved 1000+ DSA problems on LeetCode, mastering advanced topics including recursion, dynamic programming, backtracking, and greedy algorithms.',
      'Participated in peer learning and mentoring sessions to reinforce understanding of core computer science concepts and algorithm design.',
      'Improved problem-solving speed and accuracy for technical interviews through daily practice and mock contests.',
    ],
  },
  {
    role: 'Frontend Developer',
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
    <section id="internship" className="py-20 bg-[#111]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white reveal-up">
          Experience <span className="text-blue-500">&</span> Internships
        </h2>

        <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-12">
          {internships.map((intern, index) => (
            <div key={index} className="relative pl-8 md:pl-12 reveal-up group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-[#111] group-hover:bg-blue-400 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              
              {/* Content Card */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg hover:border-zinc-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{intern.role}</h3>
                    <p className="text-lg text-zinc-300 font-medium">{intern.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-zinc-950 text-zinc-300 text-sm font-semibold rounded-full border border-zinc-700 w-fit shrink-0 shadow-inner">
                    {intern.duration}
                  </span>
                </div>
                
                <ul className="list-none space-y-3 mt-6">
                  {intern.details.map((point, idx) => (
                    <li key={idx} className="text-zinc-400 flex items-start">
                      <span className="mr-3 text-blue-500 mt-[2px] font-bold">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
