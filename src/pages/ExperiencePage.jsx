import React from "react";
import Internship from "../components/Internship";
import Education from "../components/Education";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Clock, Award } from "lucide-react";

const ExperiencePage = () => {
  return (
    <div className="pt-28 pb-16 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            <Briefcase size={16} />
            <span>Career Journey & Credentials</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Education</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Software engineering internships, machine learning development, data structure mentorship, and academic achievements.
          </p>
        </motion.div>

      </div>

      <Internship />
      <Education />
    </div>
  );
};

export default ExperiencePage;
