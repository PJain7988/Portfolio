import React, { useState } from "react";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, Send } from "lucide-react";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("priyajain7988@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-16 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <MessageSquare size={16} />
            <span>Let's Build Something Great Together</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Touch</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Available for Software Development Engineer (SDE) roles, full-stack web projects, and technical collaborations.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <Mail size={24} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-zinc-400 font-medium">Direct Email</div>
              <div className="text-sm font-bold text-white truncate">priyajain7988@gmail.com</div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-1 font-semibold"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied Email!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          <div className="p-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-xs text-zinc-400 font-medium">Location</div>
              <div className="text-sm font-bold text-white">Panipat, Haryana</div>
              <div className="text-xs text-zinc-400 mt-0.5">India (Open to Relocation)</div>
            </div>
          </div>

          <div className="p-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl backdrop-blur-xl flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Send size={24} />
            </div>
            <div>
              <div className="text-xs text-zinc-400 font-medium">Status</div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Actively Hiring / Available
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">Full-Time SDE & Internships</div>
            </div>
          </div>

        </div>

      </div>

      <Contact />
    </div>
  );
};

export default ContactPage;
