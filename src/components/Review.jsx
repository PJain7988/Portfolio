import React from 'react';
import ReviewCard from './ReviewCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    content:
      'Priya has shown incredible growth in Data Structures and Algorithms. Her consistency in the 100DaysOfCode challenge is commendable.',
    name: 'Pankaj Bajaj',
    imgSrc: '/images/pankaj-bajaj.jpeg',
    company: 'Geeta Technical Hub',
    rating: 5,
  },
  {
    content:
      'Priya Jain is one of our most active students, constantly learning and building. Her dedication and skills are a great example for others.',
    name: 'Geeta Technical Hub',
    imgSrc: '/images/GTH.jpeg',
    company: 'Geeta University',
    rating: 4,
  },
  {
    content:
      'Solved 500+ LeetCode problems across all levels. Excellent understanding of recursion, trees, dynamic programming, and problem-solving.',
    name: 'LeetCode Journey',
    imgSrc: '/images/leetcode.jpeg',
    company: 'LeetCode',
    rating: 5,
  },
  {
    content:
      'Created 10+ high-quality projects using C++, JavaScript, React, HTML, and CSS including a portfolio, e-commerce UI, and task tracker.',
    name: 'Projects Showcase',
    imgSrc: '/images/git.png',
    company: 'GitHub',
    rating: 4,
  },
  {
    content:
      'During her internship, Priya displayed strong technical and analytical skills in C++, debugging, and problem-solving on real-world tasks.',
    name: 'Internship Review',
    imgSrc: '/images/GU.jpeg',
    company: 'Coding Blocks',
    rating: 4,
  },
  {
    content:
      'Her discipline and determination to keep up with DSA and Web Development is what makes her stand out among her peers.',
    name: 'Mentor Feedback',
    imgSrc: '/images/aakash.jpeg',
    company: 'Geeta University',
    rating: 5,
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      x: '-1000',
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up text-center text-white">
          What Others Say About Me
        </h2>
        <div className="scrub-slide flex gap-6 w-fit flex-nowrap px-2">
          {reviews.map(({ content, name, imgSrc, company, rating }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              rating={rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
