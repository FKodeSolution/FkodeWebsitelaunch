import React from "react";
import { Link } from "react-router-dom";
import { 
  FiCheckCircle, 
  FiArrowUpRight, 
  FiTarget, 
  FiShield, 
  FiLayers, 
  FiCpu, 
  FiGlobe, 
  FiTrendingUp,
  FiCornerDownRight
} from "react-icons/fi";

const StartupLaunchSolutions = () => {
  
  const helpItems = [
    {
      icon: <FiTarget size={18} className="text-blue-600" />,
      title: "Idea Validation & Planning",
      desc: "Transform rough concepts into structured business opportunities with precise enterprise validation models."
    },
    {
      icon: <FiShield size={18} className="text-blue-600" />,
      title: "Business Registration Support",
      desc: "Comprehensive guidance for private limited corporate formation, tax frameworks, and legal compliance workflows."
    },
    {
      icon: <FiLayers size={18} className="text-blue-600" />,
      title: "Branding & Identity DNA",
      desc: "Premium abstract logo architecture, unified color assets, strict style guides, and positioning guidelines."
    },
    {
      icon: <FiCpu size={18} className="text-blue-600" />,
      title: "MVP Development Engine",
      desc: "Build and deploy scalable version-01 core codes to launch metrics and validate traction pipelines quickly."
    },
    {
      icon: <FiGlobe size={18} className="text-blue-600" />,
      title: "Enterprise Web Systems",
      desc: "Create rock-solid front-end and back-end structural networks optimized for maximum transaction velocity."
    },
    {
      icon: <FiTrendingUp size={18} className="text-blue-600" />,
      title: "Growth & Lead Automation",
      desc: "Deploy systematic post-launch marketing strategy blocks to acquire active target users efficiently."
    }
  ];

  const processSteps = [
    { num: "01", label: "Idea", icon: "💡" },
    { num: "02", label: "Strategy", icon: "📋" },
    { num: "03", label: "Branding", icon: "🎨" },
    { num: "04", label: "Development", icon: "💻" },
    { num: "05", label: "Launch", icon: "🚀" },
    { num: "06", label: "Growth", icon: "📈" }
  ];

  const targetAudiences = [
    "Startup Founders", "Visionary Entrepreneurs", "First-Time Business Owners",
    "SaaS Creators", "Healthcare Technologists", "Local Brands Scaling Digital"
  ];

  return (
    // Balanced top section layout spacing (pt-8 md:pt-16) to pull everything downwards naturally
    <section className="relative bg-white text-slate-900 antialiased pt-8 sm:pt-12 md:pt-16 pb-12 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HERO HEADER ARCHITECTURE ================= */}
        <div className="border-b border-slate-100 pb-8 md:pb-12 mb-8 md:mb-14">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-start">
            
            {/* Left Side: Scaled down corporate font sizing block */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shrink-0"></span>
                <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded">
                  Corporate Incubator Framework // FY 2026
                </span>
              </div>
              
              {/* Reduced size framework tracking: 3xl to 6xl max to maintain clean typography standards */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 leading-[1.1]">
                Startup & Business<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  Launch Solutions.
                </span>
              </h1>
              
              <h4 className="text-slate-900 font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2 pt-0.5">
                <FiCornerDownRight className="text-blue-600 shrink-0" size={12} /> Turn Your Idea Into a Real Business
              </h4>
            </div>
            
            {/* Right Side: Descriptive Text Column */}
            <div className="lg:col-span-5 lg:pt-10">
              <div className="pl-0 lg:pl-6 border-l-0 lg:border-l-2 border-slate-200">
                <p className="text-slate-500 text-xs sm:text-sm md:text-base font-normal leading-relaxed text-justify md:text-left">
                  Many great ideas never become successful business frameworks because founders struggle with validation loops, strategic identity layout designs, testing architecture, and execution. At <strong className="text-slate-950 font-bold">FKODE</strong>, we bridge that execution deficit. We supply the comprehensive engineering, branding, and legal mechanics required to go from roadmap metrics directly into global markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= WHAT WE HELP WITH GRID ================= */}
        <div className="mb-12 md:mb-16">
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5">
            <div>
              <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">// Operational Segments</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-950 mt-0.5">
                What We Help With
              </h2>
            </div>
            <div className="w-12 h-[2px] bg-blue-600 sm:mb-1.5"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpItems.map((item, index) => (
              <div 
                key={index} 
                className="p-5 md:p-6 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/30 hover:border-blue-500/20 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 w-fit rounded-lg bg-white border border-slate-100 shadow-sm group-hover:bg-blue-50 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 mt-3 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify md:text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BUSINESS BUILDING PROCESS FLOW ================= */}
        <div className="mb-12 md:mb-16 bg-slate-950 text-white rounded-xl md:rounded-2xl p-5 sm:p-8 md:p-10 relative overflow-hidden shadow-md">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative mb-6 md:mb-8 text-center sm:text-left">
            <span className="font-mono text-[9px] uppercase tracking-widest text-blue-400 font-bold">// Tactical Timeline</span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight mt-0.5 text-white">Our Business Building Process</h2>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-lg p-3.5 flex flex-col items-center text-center relative group hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-200">
                <span className="absolute top-1.5 left-2.5 font-mono text-[9px] text-slate-500 font-bold">{step.num}</span>
                <div className="text-lg md:text-xl mb-1 mt-1.5 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <span className="font-mono uppercase tracking-[0.12em] text-[10px] font-black text-slate-300 group-hover:text-blue-400 transition-colors">{step.label}</span>
                
                {idx < 5 && (
                  <span className="hidden lg:block absolute top-1/2 right-[-8px] transform -translate-y-1/2 text-blue-500/30 text-[10px] select-none">▶</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= AUDIENCE & WHY US TARGET MATRIX ================= */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch mb-12 md:mb-16">
          
          {/* Left Frame: Target Audience Matrix */}
          <div className="lg:col-span-7 border border-slate-100 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 bg-slate-50/30 flex flex-col justify-center">
            <div className="mb-4">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">// Intended Demographics</span>
              <h3 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-slate-950">Who Is This For?</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {targetAudiences.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm transition-transform duration-200 hover:scale-[1.01]">
                  <FiCheckCircle className="text-blue-600 shrink-0" size={13} />
                  <span className="font-sans text-xs font-bold text-slate-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Frame: Core Architectural Advantage Pitch */}
          <div className="lg:col-span-5 p-5 sm:p-6 md:p-8 border border-slate-100 rounded-xl md:rounded-2xl flex flex-col justify-center space-y-3 bg-white shadow-sm">
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 font-bold">// Strategic Differentiation</span>
            <h3 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-slate-950">Why FKODE?</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify md:text-left">
              Most generic agencies only execute one fractional module of the puzzle — they write functional codes without asset-DNA positioning frameworks, or manage marketing assets on broken server architectures.
            </p>
            <p className="text-slate-900 font-semibold text-xs sm:text-sm leading-relaxed text-justify md:text-left">
              FKODE functions as your end-to-end continuous growth partner. We align initial legal engineering structures directly with software MVPs, automated marketing, and workflow scaling tools under a single corporate umbrella.
            </p>
          </div>
        </div>

        {/* ================= FINAL PREMIUM CALL-TO-ACTION ================= */}
        <div className="border-t border-slate-100 pt-8 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-950 leading-tight">
            Ready To Build Your Business?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-2">
            Let's convert your high-fidelity vision parameters into clean, industry-standard business asset layout. Secure your structural roadmap session today.
          </p>
          <div className="pt-1 flex justify-center w-full px-4 sm:px-0">
            <Link 
              to="/contact" 
              className="group flex items-center justify-between gap-5 w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white pl-5 pr-3.5 py-3 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="font-sans font-bold uppercase tracking-[0.15em] text-xs whitespace-nowrap">
                Book a Discovery Call
              </span>
              <div className="w-6 h-6 bg-white/10 group-hover:bg-white text-white group-hover:text-slate-950 rounded-md flex items-center justify-center transition-all duration-300 shrink-0">
                <FiArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartupLaunchSolutions;