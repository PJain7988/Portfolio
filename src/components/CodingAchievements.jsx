import React, { useState, useEffect } from "react";
import { ArrowUpRight, Award, Code2, Trophy, Flame, Star, CheckCircle2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodingAchievements() {
  const [activeTab, setActiveTab] = useState("all");
  const [isSyncing, setIsSyncing] = useState(false);

  // Live CP Data State
  const [liveStats, setLiveStats] = useState({
    codeforces: { rating: 922, rank: "Newbie", solved: "100+ Solved" },
    leetcode: { rating: 1551, rank: "Top 32% Globally", solved: "1000+ Solved" },
    codechef: { rating: 1360, rank: "1★ (Diamond League)", solved: "255+ Solved" }
  });

  // Automatically fetch live rating & questions count from public APIs
  const fetchLiveCodingStats = async () => {
    setIsSyncing(true);
    try {
      // 1. Fetch Codeforces API
      const cfRes = await fetch("https://codeforces.com/api/user.info?handles=Priya_GU");
      if (cfRes.ok) {
        const cfData = await cfRes.json();
        if (cfData.status === "OK" && cfData.result.length > 0) {
          const user = cfData.result[0];
          setLiveStats((prev) => ({
            ...prev,
            codeforces: {
              ...prev.codeforces,
              rating: user.rating || 922,
              rank: user.rank ? user.rank.charAt(0).toUpperCase() + user.rank.slice(1) : "Newbie"
            }
          }));
        }
      }

      // Fetch Codeforces Solved Count
      const cfStatusRes = await fetch("https://codeforces.com/api/user.status?handle=Priya_GU");
      if (cfStatusRes.ok) {
        const statusData = await cfStatusRes.json();
        if (statusData.status === "OK") {
          const solvedSet = new Set();
          statusData.result.forEach((sub) => {
            if (sub.verdict === "OK" && sub.problem) {
              solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
            }
          });
          if (solvedSet.size > 0) {
            setLiveStats((prev) => ({
              ...prev,
              codeforces: {
                ...prev.codeforces,
                solved: `${solvedSet.size}+ Solved`
              }
            }));
          }
        }
      }

      // 2. Fetch LeetCode Stats API
      const lcRes = await fetch("https://leetcode-stats-api.herokuapp.com/Student_GU");
      if (lcRes.ok) {
        const lcData = await lcRes.json();
        if (lcData.status === "success" && lcData.totalSolved) {
          setLiveStats((prev) => ({
            ...prev,
            leetcode: {
              ...prev.leetcode,
              solved: `${lcData.totalSolved}+ Solved`
            }
          }));
        }
      }
    } catch (err) {
      console.log("Using cached profile metrics:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    fetchLiveCodingStats();
  }, []);

  const platforms = [
    {
      id: "codeforces",
      type: "cp",
      name: "Codeforces",
      handle: "Priya_GU",
      rank: liveStats.codeforces.rank,
      rating: liveStats.codeforces.rating,
      maxRating: liveStats.codeforces.rating,
      solved: liveStats.codeforces.solved,
      badgeColor: "from-red-500/20 via-orange-500/10 to-transparent",
      borderColor: "border-red-500/40 hover:border-red-500",
      tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
      accentBg: "bg-red-500",
      verifyLink: "https://codeforces.com/profile/Priya_GU",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeforces/codeforces-original.svg",
      description: `Active competitive programmer. Live Codeforces Rating: ${liveStats.codeforces.rating} (${liveStats.codeforces.rank}).`,
      tags: [`Rating: ${liveStats.codeforces.rating}`, `Rank: ${liveStats.codeforces.rank}`, liveStats.codeforces.solved, "Live API Synced"]
    },
    {
      id: "codechef",
      type: "cp",
      name: "CodeChef",
      handle: "priya_jain_01",
      rank: liveStats.codechef.rank,
      rating: liveStats.codechef.rating,
      maxRating: 1360,
      solved: liveStats.codechef.solved,
      badgeColor: "from-amber-600/20 via-amber-500/10 to-transparent",
      borderColor: "border-amber-500/40 hover:border-amber-500",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      accentBg: "bg-amber-600",
      verifyLink: "https://www.codechef.com/users/priya_jain_01",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codechef/codechef-original.svg",
      description: `1★ CodeChef Rating: ${liveStats.codechef.rating} (DSA Rating: 1628). Participated in 5+ rated contests.`,
      tags: [`Rating: ${liveStats.codechef.rating}`, "DSA Rating: 1628", liveStats.codechef.solved, "Diamond League"]
    },
    {
      id: "leetcode",
      type: "cp",
      name: "LeetCode",
      handle: "Student_GU",
      rank: liveStats.leetcode.rank,
      rating: liveStats.leetcode.rating,
      maxRating: 1551,
      solved: liveStats.leetcode.solved,
      badgeColor: "from-yellow-500/20 via-orange-500/10 to-transparent",
      borderColor: "border-yellow-500/40 hover:border-yellow-500",
      tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      accentBg: "bg-yellow-500",
      verifyLink: "https://leetcode.com/u/Student_GU/",
      logo: "/images/leetcodeprofile.jpg",
      description: `${liveStats.leetcode.solved} Data Structures & Algorithms problems. Contest Rating 1551.`,
      tags: [liveStats.leetcode.solved, "Max Rating: 1551", "Top 32% Global", "Live API Synced"]
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
            <span>Live Sync CP & Certifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Coding Profiles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Live Achievements</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-6">
            Live auto-synced metrics from Codeforces, CodeChef, LeetCode, GeeksforGeeks, HackerRank, and verified certificates.
          </p>

          <button
            onClick={fetchLiveCodingStats}
            disabled={isSyncing}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-xl text-zinc-300 hover:text-white text-xs font-semibold transition-all"
          >
            <RefreshCw size={14} className={isSyncing ? "animate-spin text-blue-400" : "text-blue-400"} />
            <span>{isSyncing ? "Syncing API Data..." : "Refresh Live Stats"}</span>
          </button>
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
