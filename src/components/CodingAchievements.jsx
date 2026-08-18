import React, { useState } from "react";
import { ArrowUpRight, Award, Code2, Trophy, Flame, Star, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodingAchievements() {
  const [activeTab, setActiveTab] = useState("all");

  const platforms = [
    {
      id: "codeforces",
      type: "cp",
      name: "Codeforces",
      handle: "Priya_GU",
      rank: "Newbie",
      rating: 922,
      maxRating: 922,
      solved: "100+ Problems",
      badgeColor: "from-red-500/20 via-orange-500/10 to-transparent",
      borderColor: "border-red-500/40 hover:border-red-500",
      tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
      accentBg: "bg-red-500",
      verifyLink: "https://codeforces.com/profile/Priya_GU",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeforces/codeforces-original.svg",
      description: "Active competitive programming participant. Max rating 922 (Newbie).",
      tags: ["Rating: 922", "Handle: Priya_GU", "Competitive Programming"]
    },
    {
      id: "codechef",
      type: "cp",
      name: "CodeChef",
      handle: "priya_jain_01",
      rank: "1★ (Diamond League)",
      rating: 1360,
      maxRating: 1360,
      solved: "255+ Solved",
      badgeColor: "from-amber-600/20 via-amber-500/10 to-transparent",
      borderColor: "border-amber-500/40 hover:border-amber-500",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      accentBg: "bg-amber-600",
      verifyLink: "https://www.codechef.com/users/priya_jain_01",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codechef/codechef-original.svg",
      description: "1★ CodeChef rating 1360 (DSA Rating: 1628). Participated in 5+ rated contests.",
      tags: ["Rating: 1360", "DSA Rating: 1628", "255+ Solved", "Diamond League"]
    },
    {
      id: "leetcode",
      type: "cp",
      name: "LeetCode",
      handle: "Student_GU",
      rank: "Top 32% Globally",
      rating: 1551,
      maxRating: 1551,
      solved: "1000+ Solved",
      badgeColor: "from-yellow-500/20 via-orange-500/10 to-transparent",
      borderColor: "border-yellow-500/40 hover:border-yellow-500",
      tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      accentBg: "bg-yellow-500",
      verifyLink: "https://leetcode.com/u/Student_GU/",
      logo: "/images/leetcodeprofile.jpg",
      description: "1000+ Data Structures & Algorithms problems solved. Contest Rating 1551.",
      tags: ["1000+ Problems", "Max Rating: 1551", "Top 32% Global", "DSA Expert"]
    },
    {
      id: "gfg",
      type: "cp",
      name: "GeeksforGeeks",
      handle: "user_96fineo2gqw",
      rank: "Active Solver",
      rating: 240,
      maxRating: 240,
      solved: "86+ Solved",
      badgeColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "border-emerald-500/40 hover:border-emerald-500",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      accentBg: "bg-emerald-500",
      verifyLink: "https://www.geeksforgeeks.org/user/user_96fineo2gqw/",
      logo: "/images/gfg.png",
      description: "86+ DSA problems solved with overall coding score of 240+.",
      tags: ["86+ Solved", "Score: 240+", "Data Structures"]
    },
    {
      id: "hackerrank",
      type: "cp",
      name: "HackerRank",
      handle: "2301301053_priya",
      rank: "5★ Gold Badge",
      rating: "5 Star",
      maxRating: "5 Star",
      solved: "C++ Gold Badge",
      badgeColor: "from-green-500/20 via-emerald-500/10 to-transparent",
      borderColor: "border-green-500/40 hover:border-green-500",
      tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
      accentBg: "bg-green-500",
      verifyLink: "https://www.hackerrank.com/profile/2301301053_priya",
      logo: "/images/HackerRank.png",
      description: "5 Star Gold Badge in C++ Problem Solving & Verified Skill Certifications.",
      tags: ["5★ C++ Badge", "Verified Certification", "Algorithm Design"]
    },
    {
      id: "gemini",
      type: "cert",
      name: "Google Gemini Certified Student",
      handle: "Google for Education",
      rank: "Generative AI",
      rating: "Certified",
      maxRating: "Certified",
      solved: "GenAI & Prompting",
      badgeColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
      borderColor: "border-blue-500/40 hover:border-blue-500",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      accentBg: "bg-blue-500",
      verifyLink: "https://edu.google.accredible.com/ecefd81d-55c7-4dae-9729-9151b9929774",
      logo: "/images/google_gemini.png",
      description: "Official Google for Education certification in Generative AI technology & applications.",
      tags: ["Google Certified", "Generative AI", "AI Prompting"]
    },
    {
      id: "100days",
      type: "cert",
      name: "#100DaysOfCode Challenge",
      handle: "PJain7988/100_Day_challenge",
      rank: "Consistent Solver",
      rating: "100 Days",
      maxRating: "Completed",
      solved: "100+ Days Code",
      badgeColor: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-purple-500/40 hover:border-purple-500",
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      accentBg: "bg-purple-500",
      verifyLink: "https://github.com/PJain7988/100_Day_challenge",
      logo: "/images/100days.png",
      description: "Completed 100 days of consistent coding challenge in DSA and Web Development.",
      tags: ["Consistency", "100 Days Code", "GitHub Milestone"]
    },
    {
      id: "code-carnage",
      type: "cert",
      name: "Code Carnage - Alexa Devs CU",
      handle: "TruScholar Verified",
      rank: "Certificate of Merit",
      rating: "Winner/Merit",
      maxRating: "Top Rank",
      solved: "C++ & DSA",
      badgeColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-cyan-500/40 hover:border-cyan-500",
      tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accentBg: "bg-cyan-500",
      verifyLink: "https://app.truscholar.io/profile?credId=68a0c67a6d6168fb30f96d48",
      logo: "/images/code-carnage.png",
      description: "Certification in competitive coding hackathon organized by Alexa Developers Community.",
      tags: ["Code Carnage", "TruScholar Verified", "C++ Contest"]
    },
    {
      id: "innovate-nsut",
      type: "cert",
      name: "InnovateNSUT’25 (Avinya’25)",
      handle: "Unstop Verified",
      rank: "National Finalist",
      rating: "NSUT '25",
      maxRating: "NSUT '25",
      solved: "Hackathon Project",
      badgeColor: "from-rose-500/20 via-amber-500/10 to-transparent",
      borderColor: "border-rose-500/40 hover:border-rose-500",
      tagColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      accentBg: "bg-rose-500",
      verifyLink: "https://unstop.com/certificate-preview/0a6e49cd-b26e-4eab-a1fc-a1d083dd74b6?utm_campaign",
      logo: "/images/innovate-nsut.jpg",
      description: "National hackathon participation & project submission at NSUT Delhi.",
      tags: ["NSUT Delhi", "Innovation Hackathon", "Unstop Certificate"]
    },
    {
      id: "flipkart-runway",
      type: "cert",
      name: "Flipkart Runway: Season 5",
      handle: "Flipkart Engineering",
      rank: "Qualified Round 1",
      rating: "Season 5",
      maxRating: "Season 5",
      solved: "DSA & Database",
      badgeColor: "from-indigo-500/20 via-sky-500/10 to-transparent",
      borderColor: "border-indigo-500/40 hover:border-indigo-500",
      tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      accentBg: "bg-indigo-500",
      verifyLink: "https://unstop.com/certificate-preview/1ca4d2b7-c47b-47bd-8529-28733ce2a9ca?utm_campaign",
      logo: "/images/flipkart-runway.jpg",
      description: "Participated in Flipkart Runway Season 5 engineering assessment challenge.",
      tags: ["Flipkart Runway", "DSA & SQL", "Engineering Track"]
    }
  ];

  const filteredItems = platforms.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <section id="achievements" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Trophy size={16} className="text-blue-400" />
            <span>Competitive Programming & Certifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Coding Profiles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Achievements</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Direct verified metrics from Codeforces, CodeChef, LeetCode, GeeksforGeeks, HackerRank, and national hackathon certificates.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Profiles ({platforms.length})
            </button>
            <button
              onClick={() => setActiveTab("cp")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "cp"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Coding Platforms (5)
            </button>
            <button
              onClick={() => setActiveTab("cert")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "cert"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Certifications & Contests (5)
            </button>
          </div>
        </div>

        {/* Grid Cards */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-zinc-900/80 backdrop-blur-xl border ${item.borderColor} rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col justify-between`}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.badgeColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  {/* Top Image / Logo Header */}
                  <div className="relative h-44 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/80 flex items-center justify-center p-6">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/leetcodeprofile.jpg";
                      }}
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-zinc-950/80 border border-zinc-800 text-zinc-300 backdrop-blur-md flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${item.accentBg}`}></span>
                      {item.rank}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-zinc-400 text-xs mb-4 font-mono">
                      @{item.handle}
                    </p>

                    <p className="text-zinc-300 text-sm mb-5 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${item.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-0 relative z-10">
                  <a
                    href={item.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-blue-500 text-zinc-200 hover:text-white font-semibold text-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500 shadow-md"
                  >
                    <span>Verify Profile / Certificate</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
