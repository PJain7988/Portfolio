import React from "react";
import CodingAchievements from "../components/CodingAchievements";
import { motion } from "framer-motion";
import { Trophy, Code2, Flame, Award, CheckCircle } from "lucide-react";

const CodingPage = () => {
  return (
    <div className="pt-28 pb-16 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        
        {/* Page Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            <Trophy size={16} />
            <span>Competitive Programming & Verified Profiles</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Coding Profiles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500">CP Ratings</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Live statistics and verified profiles across Codeforces, CodeChef, LeetCode, GeeksforGeeks, HackerRank, and national coding hackathons.
          </p>
        </motion.div>

        {/* CP Quick Summary Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl mb-12 shadow-xl"
        >
          <div className="p-4 bg-zinc-950/70 border border-zinc-800/70 rounded-2xl text-center">
            <div className="text-sm text-zinc-400 font-medium mb-1">LeetCode Solved</div>
            <div className="text-2xl md:text-3xl font-black text-amber-400">1000+</div>
            <div className="text-xs text-zinc-400 mt-1">Rating: 1551 (Top 32%)</div>
          </div>

          <div className="p-4 bg-zinc-950/70 border border-zinc-800/70 rounded-2xl text-center">
            <div className="text-sm text-zinc-400 font-medium mb-1">CodeChef Rating</div>
            <div className="text-2xl md:text-3xl font-black text-amber-500">1360</div>
            <div className="text-xs text-zinc-400 mt-1">1★ (Diamond League)</div>
          </div>

          <div className="p-4 bg-zinc-950/70 border border-zinc-800/70 rounded-2xl text-center">
            <div className="text-sm text-zinc-400 font-medium mb-1">Codeforces Rating</div>
            <div className="text-2xl md:text-3xl font-black text-red-400">922</div>
            <div className="text-xs text-zinc-400 mt-1">Rank: Newbie</div>
          </div>

          <div className="p-4 bg-zinc-950/70 border border-zinc-800/70 rounded-2xl text-center">
            <div className="text-sm text-zinc-400 font-medium mb-1">HackerRank Badge</div>
            <div className="text-2xl md:text-3xl font-black text-emerald-400">5★ C++</div>
            <div className="text-xs text-zinc-400 mt-1">Gold Verified</div>
          </div>
        </motion.div>

      </div>

      <CodingAchievements />
    </div>
  );
};

export default CodingPage;
