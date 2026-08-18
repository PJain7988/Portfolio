import React from 'react';
import ReviewCard from './ReviewCard';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

const reviews = [
  {
    content:
      'Priya has shown incredible growth in Data Structures and Algorithms. Her consistency in problem solving and dedication to clean engineering is commendable.',
    name: 'Pankaj Bajaj',
    imgSrc: '/images/pankaj-bajaj.jpeg',
    company: 'Geeta Technical Hub',
    rating: 5,
  },
  {
    content:
      'Priya Jain is one of our most active students, constantly learning and building. Her full-stack engineering skills set a high standard for her peers.',
    name: 'Geeta Technical Hub',
    imgSrc: '/images/GTH.jpeg',
    company: 'Geeta University',
    rating: 5,
  },
  {
    content:
      '1000+ LeetCode problems solved across dynamic programming, trees, and graphs. Exceptional algorithmic problem-solving accuracy.',
    name: 'LeetCode CP Benchmark',
    imgSrc: '/images/leetcodeprofile.jpg',
    company: 'LeetCode (Rating 1551)',
    rating: 5,
  },
  {
    content:
      'Engineered 10+ scalable web solutions using React, Node.js, Express, MongoDB, and Tailwind CSS with real-time features.',
    name: 'GitHub Open Source',
    imgSrc: '/images/git.png',
    company: 'GitHub Portfolio',
    rating: 5,
  },
  {
    content:
      'During her internship, Priya displayed strong technical and analytical skills in algorithm design, debugging, and software architecture.',
    name: 'Technical Mentorship',
    imgSrc: '/images/GU.jpeg',
    company: 'Coding Blocks',
    rating: 5,
  },
  {
    content:
      'Her discipline and determination to keep mastering Data Structures and Full-Stack Engineering makes her a standout candidate for SDE roles.',
    name: 'Academic Review',
    imgSrc: '/images/aakash.jpeg',
    company: 'Geeta University',
    rating: 5,
  },
];

// Duplicate for continuous seamless infinite loop
const doubleReviews = [...reviews, ...reviews];

const Review = () => {
  return (
    <section id="reviews" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <MessageSquareQuote size={16} />
            <span>Continuous Infinite Testimonial Train</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Mentors & Peer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Endorsements</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Hover over any testimonial card to pause the continuous sliding train animation.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Track ("Working like a train") */}
      <div className="w-full overflow-hidden flex py-4 relative">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubleReviews.map(({ content, name, imgSrc, company, rating }, key) => (
            <div key={key} className="w-[340px] md:w-[420px] shrink-0">
              <ReviewCard
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
                rating={rating}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
