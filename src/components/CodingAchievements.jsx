import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CodingAchievements() {
  const achievements = [
    {
      imgSrc: "/images/leetcodeprofile.jpg",
      title: "LeetCode Profile",
      tags: ["C++", "DSA", "Problem Solving"],
      verifyLink: "https://leetcode.com/u/student_GU/",
    },
    {
      imgSrc: "/images/leetcodeBadge.png",
      title: "LeetCode Badges",
      tags: ["100+ Problems", "Daily Streak", "Consistency"],
      verifyLink: "https://leetcode.com/u/student_GU/",
    },
    {
      imgSrc: "/images/HackerRank.png",
      title: "HackerRank Profile",
      tags: [
        "Problem Solving (Basic)",
        "Frontend Developer (React)",
        "Node.js (Basic)",
        "C++ Badge",
      ],
      verifyLink: "https://www.hackerrank.com/2301301053_priya",
    },
    {
      imgSrc: "/images/code-carnage.png",
      title: "Code Carnage - Alexa Developers Community-CU",
      tags: ["Certification", "C++", "DSA", "Problem Solving"],
      verifyLink: "https://app.truscholar.io/profile?credId=68a0c67a6d6168fb30f96d48",
    },
    {
      imgSrc: "/images/innovate-nsut.jpg",
      title: "InnovateNSUT’25 (Avinya’25)",
      tags: ["Participation", "Innovation", "Frontend Development"],
      verifyLink: "https://unstop.com/certificate-preview/0a6e49cd-b26e-4eab-a1fc-a1d083dd74b6?utm_campaign",
    },
    {
      imgSrc: "/images/flipkart-runway.jpg",
      title: "Flipkart Runway: Season 5",
      tags: ["Participation", "DSA", "MySQL"],
      verifyLink: "https://unstop.com/certificate-preview/1ca4d2b7-c47b-47bd-8529-28733ce2a9ca?utm_campaign",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Coding Achievements 🏆
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  View <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
