import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, CheckCircle2, Zap, Users, 
  Rocket, Lightbulb, Briefcase, GraduationCap, 
  ChevronRight, MapPin, Globe, Sparkles, Target
} from "lucide-react";

const CareersPage = () => {
  const [filter, setFilter] = useState("All");

  const openRoles = [
    { id: "01", title: "Software Developer", dept: "Engineering", type: "Full-time", loc: "Remote" },
    { id: "02", title: "UI/UX Designer", dept: "Design", type: "Full-time", loc: "Chennai / Hybrid" },
    { id: "03", title: "Web Developer", dept: "Engineering", type: "Full-time", loc: "Remote" },
    { id: "04", title: "Digital Marketing Executive", dept: "Marketing", type: "Full-time", loc: "Remote" },
    { id: "05", title: "DevOps Engineer", dept: "Engineering", type: "Full-time", loc: "Remote" },
    { id: "06", title: "Internships (UI/UX, Dev, Marketing)", dept: "Internship", type: "Skill-based", loc: "Hybrid" },
  ];

  const filteredJobs = filter === "All" ? openRoles : openRoles.filter(j => j.dept === filter || (filter === "Internship" && j.dept === "Internship"));

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827] font-sans antialiased selection:bg-blue-100">
      
      {/* --- GRID OVERLAY --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

    

      <main className="relative max-w-6xl mx-auto px-5 md:px-10">
        
        {/* --- PREMIUM HERO SECTION --- */}
<header className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden  px-5 md:px-10">
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-5xl"
  >
    {/* Animated Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-8 shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
      </span>
      Careers at FKode Solution
    </div>

    {/* Main Headline */}
    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] md:leading-[0.85] text-gray-900 mb-8">
      Great ideas come from <br /> 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic px-1">
        passionate people.
      </span>
    </h1>

    {/* Content Grid - Mobile Optimized */}
    <div className="grid md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-7">
        <p className="text-gray-600 text-base md:text-xl leading-relaxed font-medium mb-6">
          At FKode Solution, we believe great ideas come from passionate people. 
          We are a growing technology company focused on building innovative digital solutions for businesses.
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl italic border-l-2 border-blue-100 pl-4">
          If you love technology, creativity, and solving real-world problems, 
          FKode is the place for you. We are always looking for talented individuals 
          ready to learn, grow, and build the future with us.
        </p>
      </div>

      {/* Quick Stats - Looks Great on Desktop, Hides/Stacks on Mobile */}
      <div className="md:col-span-5 grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="text-2xl font-bold text-blue-600">100%</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Innovation</div>
        </div>
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="text-2xl font-bold text-blue-600">Global</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Impact</div>
        </div>
      </div>
    </div>
  </motion.div>
  
  {/* Subtle Background Element */}
  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] -z-10" />
</header>

        {/* --- WHY JOIN (BENTO STYLE - COMPACT) --- */}
        <section className="py-10 border-t border-gray-50">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-blue-600" size={18} />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Why Join FKode?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 p-6 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col justify-between group hover:shadow-xl hover:shadow-blue-100/50 transition-all">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-900">Work on Real-world Projects</h3>
                  <p className="text-blue-700/70 text-sm leading-relaxed max-w-md">Experience building products with modern technologies and solving real-world problems for global businesses.</p>
                </div>
                <div className="flex gap-4 mt-6">
                  {["Next.js", "React", "Cloud", "AI"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/50 rounded-full text-[10px] font-bold text-blue-600 border border-blue-200">{tech}</span>
                  ))}
                </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all">
                <Users className="text-blue-600 mb-4" size={24} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Startup Team</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Join a friendly and collaborative work environment where every voice matters.</p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-900 text-white flex flex-col justify-between group overflow-hidden relative">
                <div className="z-10">
                  <Zap className="text-yellow-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold mb-2">Rapid Growth</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Opportunity to learn, innovate, and grow your career quickly.</p>
                </div>
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Target size={120} />
                </div>
            </div>

            <div className="md:col-span-2 p-6 rounded-3xl border border-gray-100 bg-[#FAFAFA] flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">Performance Driven Culture</h3>
                  <p className="text-gray-500 text-xs italic">"Flexible, creative, and result-oriented."</p>
                </div>
                <CheckCircle2 size={32} className="text-green-500 opacity-20" />
            </div>
          </div>
        </section>

        {/* --- OPPORTUNITIES (DASHBOARD STYLE) --- */}
        <section className="bg-[#f8fafc] py-24 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Headline Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-31 gap-6">
          <div className="max-w-xl ">
           <div className="flex items-center justify-center md:justify-start w-full mb-5">

  <div className="
      font-automata
      flex items-center
      whitespace-nowrap
      text-sm sm:text-lg md:text-2xl
      uppercase tracking-wide">

    {/* F */}
    <span className="text-blue-600 font-bold">F</span>

    {/* K */}
    <span className="text-orange-500 font-bold">K</span>

    {/* ode Solution */}
    <span className="text-slate-700 font-medium">
      ode Solution
    </span>

  </div>

</div>
   
            <p className="text-slate-500 text-lg leading-relaxed">
              At FKode Solution, we believe great ideas come from passionate people. 
              We are a growing technology company focused on building innovative solutions.
            </p>
          </div>
          <div className="text-right">
            <span className="text-slate-400 text-sm font-medium uppercase tracking-widest">
              {openRoles.length} Open Positions
            </span>
          </div>
        </div>

        {/* Roles Section - No Buttons, just clean rows */}
        <div className="border-t border-slate-200">
          {openRoles.map((role, index) => (
            <div 
              key={index} 
              className="group border-b border-slate-200 py-8 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 hover:bg-white hover:px-6 cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>
                <div className="flex gap-4 text-sm text-slate-400">
                  <span>{role.location}</span>
                  <span>•</span>
                  <span>{role.type}</span>
                </div>
              </div>

              {/* Minimalist Arrow */}
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600 stroke-current stroke-2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="mt-20 p-10 bg-slate-900 rounded-2xl text-center relative max-w-6xl mx-auto px-5 md:px-10">
          <h4 className="text-white text-xl font-semibold mb-2">Build the future with us.</h4>
          <p className="text-slate-400 mb-0">
            Share your profile at <span className="text-blue-400 font-mono">careers@fkodesolution.com</span>
          </p>
        </div>

      </div>
    </section>
        {/* --- INTERNSHIP HIGHLIGHT  --- */}
        <section className="py-12 mb-20">
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-white to-indigo-100 overflow-hidden shadow-2xl shadow-blue-100/50 border border-white">
            <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2.3rem] flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200">
                           <GraduationCap size={28} />
                        </div>
                        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">🎓 Internship Opportunities</h3>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      FKode Solution offers skill-based internship programs for students and fresh graduates who want real industry experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Hands-on project experience",
                        "Guidance from senior devs",
                        "High PPO conversion rate"
                      ].map((t, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-700">
                          <CheckCircle2 size={18} className="text-blue-500" /> {t}
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                      Submit Internship Application <ChevronRight size={16} />
                    </button>
                </div>
                <div className="w-full md:w-72 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                        <Globe size={14} /> Focus Track
                    </div>
                    <ul className="space-y-4">
                        {["UI/UX Design", "Frontend Dev", "Backend Dev", "Marketing"].map(track => (
                            <li key={track} className="flex items-center justify-between text-sm font-bold text-gray-800">
                                {track} <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- MINIMAL FOOTER --- */}
      <footer className="bg-white border-t border-gray-200 py-10 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] gap-6">
          <div className="flex items-center gap-4">
            <span>FKODE SOLUTION © 2026</span>
            <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
            <span className="hidden md:block">Privacy Policy</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Mail</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;