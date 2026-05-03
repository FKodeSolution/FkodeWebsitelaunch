import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Command, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Workflow, 
  FileText, 
  LineChart,
  CheckCircle2,
  ChevronRight,
  Plus
} from 'lucide-react';

const FKodeAcceleration = () => {
  const bundleItems = [
    { title: "Logo & Brand Identity", icon: <Command size={18} /> },
    { title: "Enterprise Business Website", icon: <Cpu size={18} /> },
    { title: "GST & Legal Registration", icon: <FileText size={18} /> },
    { title: "Social Media Ecosystem", icon: <LineChart size={18} /> },
    { title: "Corporate Email Systems", icon: <ShieldCheck size={18} /> },
    { title: "Smart Billing / POS Software", icon: <Workflow size={18} /> },
    { title: "Marketing Starter Kit", icon: <Zap size={18} /> },
    { title: "Corporate Collaterals", icon: <CheckCircle2 size={18} /> }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Limited Slots for Q3 2026
          </motion.div>
          
          <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-10 text-slate-950">
            Start Your Business <br />
            <span className="text-blue-600 italic font-medium text-4xl md:text-[5rem]">In Just 7 Days.</span>
          </h2>
          
          <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl">
            Stop juggling multiple vendors. We provide the complete digital, legal, and operational infrastructure required for a world-class business launch.
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Left: The Bundle */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-slate-200 rounded-[3rem] p-10 md:p-14 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-10 text-slate-200 group-hover:text-blue-100 transition-colors pointer-events-none">
              <Plus size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Launch Acceleration Package</h3>
              <p className="text-slate-500 mb-12 max-w-md">The essential business stack for serious entrepreneurs.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {bundleItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700 tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Metric & Advantage */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-xl shadow-blue-200 flex flex-col justify-between min-h-[280px] group">
              <div className="flex justify-between items-start">
                <Zap size={32} fill="white" className="group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-500/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Record Time</span>
              </div>
              <div>
                <h4 className="text-7xl font-bold tracking-tighter mb-2">168h</h4>
                <p className="text-sm font-medium opacity-80 italic tracking-wide">From Concept to Commercial Launch</p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-[3rem] p-10 text-white">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ChevronRight className="text-blue-500" /> The FKode Edge
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "One Unified Strategy", sub: "No fragmented vendor communication." },
                  { label: "Absolute Ownership", sub: "All source code and IP remains yours." },
                  { label: "Automated Growth", sub: "Pre-configured funnels from day one." }
                ].map((edge, i) => (
                  <li key={i} className="border-l-2 border-blue-500 pl-4 group cursor-default">
                    <p className="text-sm font-bold group-hover:text-blue-400 transition-colors">{edge.label}</p>
                    <p className="text-xs text-slate-400 mt-1">{edge.sub}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison & Action Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Comparison */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-[3.5rem] border border-slate-100">
            <div className="p-8 flex flex-col justify-center">
              <h4 className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-[0.3em] text-center">Traditional Approach</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["5+ Vendors", "Delayed", "Friction", "High Cost", "Inconsistent"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-400 line-through opacity-60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-blue-100 flex flex-col items-center justify-center">
              <h4 className="text-[10px] font-black text-blue-600 mb-6 uppercase tracking-[0.3em]">The FKode Solution</h4>
              <div className="space-y-3">
                {["One Team", "One Strategy", "One System"].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 size={14} className="text-blue-600" /> {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* THE PRIME BUTTON - Now properly placed in grid */}
          <Link 
            to="/contact" 
            className="lg:col-span-4 group bg-blue-600 text-white rounded-[3rem] py-10 px-8 font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:bg-slate-950 transition-all duration-500 flex flex-col items-center justify-center gap-2 overflow-hidden relative"
          >
            <div className="flex items-center gap-3 relative z-10">
              Launch Now 
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
            
            <span className="text-[10px] opacity-60 font-light lowercase tracking-widest relative z-10">
              Get started in 7 days
            </span>
            
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default FKodeAcceleration;