import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLayers, FiCheckCircle, FiCpu, FiExternalLink } from "react-icons/fi";

/* Images - Ensure these paths match your folder structure */
import softwareImg from "../pictures/software.jpg";
import digitalImg from "../pictures/digital.jpg";
import registrationImg from "../pictures/registration.jpg";
import brandingImg from "../pictures/branding.jpg";
import giftImg from "../pictures/gift.jpg";

/* ================= 1. CORE DIGITAL SOLUTIONS ================= */
const coreServices = [
  {
    id: "business-systems",
    title: "Business Websites & Enterprise Applications",
    tag: "Systems Engineering",
    desc: "We architect high-performance digital infrastructure designed for scale. Our solutions bridge the gap between complex business logic and intuitive user experiences.",
    image: softwareImg,
    items: ["Progressive Web Apps (PWA)", "Custom CRM & ERP Dashboards", "Cross-Platform Mobile Solutions", "Enterprise System Software", "Legacy System Modernization"]
  },
  {
    id: "growth-systems",
    title: "Performance Lead Generation Systems",
    tag: "Growth Logic",
    desc: "Transforming traffic into measurable revenue. We engineer data-driven sales funnels and automated communication loops that ensure no lead is left behind.",
    image: digitalImg,
    items: ["High-Conversion UI/UX Design", "Automated Sales Funnel Architecture", "WhatsApp Business API Integration", "Deep CRM Synchronization", "Multi-Channel Conversion Tracking"]
  },
  {
    id: "automation-ai",
    title: "Intelligent Marketing Automation",
    tag: "Neural Scale",
    desc: "Harness the power of AI to automate business expansion. We deploy sophisticated algorithms and automated workflows that optimize your reach 24/7.",
    image: brandingImg,
    items: ["AI-Powered Conversational Chatbots", "Automated Campaign Orchestration", "Predictive Performance Analytics", "Dynamic Remarketing Systems", "Algorithm-Based Ad Optimization"]
  }
];

/* ================= 2. EXTENDED BUSINESS ECOSYSTEM ================= */
const extendedServices = [
  { 
    category: "Corporate Compliance", 
    image: registrationImg,
    desc: "Navigating the legal landscape to ensure your business foundation is secure and compliant.",
    items: ["Private Ltd & LLP Incorporation", "GST & MSME Regulatory Filing", "FSSAI & Statutory Licensing"] 
  },
  { 
    category: "Creative Branding", 
    image: brandingImg,
    desc: "Defining your brand's visual DNA. We engineer cohesive identities that command attention.",
    items: ["Custom Logo & Visual Systems", "Brand Positioning & Strategy", "High-Impact Graphic Design"] 
  },
  { 
    category: "Corporate Assets", 
    image: giftImg,
    desc: "Extending your professional reach through premium physical touchpoints and curated brand assets.",
    items: ["Luxury Corporate Gifting", "Custom Branded Merchandise", "Premium Executive Hampers"] 
  }
];

export default function Services() {
  return (
<section className="relative py-16 md:py-32 bg-white overflow-hidden font-sans">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
       {/* SECTION HEADER */}
<header className="mb-12 sm:mb-16 md:mb-32 border-l-4 md:border-l-8 border-blue-600 pl-4 sm:pl-6 md:pl-10">

  <ScrollReveal variant="up">

    {/* Tagline */}
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
      <span className="w-6 sm:w-8 md:w-12 h-[2px] bg-blue-600 shrink-0"></span>

      <span className="font-mono text-[8px] sm:text-[10px] md:text-xs 
      font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.6em] 
      text-slate-400 whitespace-nowrap">
        Capabilities / 2026
      </span>
    </div>

    {/* Main Title */}
    <h2 className="
      text-[2rem] 
      sm:text-[2.5rem] 
      md:text-6xl 
      lg:text-8xl 
      font-black uppercase tracking-tight 
      leading-[1] sm:leading-[0.95] md:leading-[0.85] 
      text-slate-950">

      Enterprise Fkode <br />

      <span className="text-blue-600 block">
Solutions       </span>
    </h2>

    {/* Description */}
    <p className="
      mt-4 sm:mt-6 md:mt-10 
      text-slate-500 
      max-w-[260px] sm:max-w-md md:max-w-xl 
      text-xs sm:text-sm md:text-lg 
      font-medium leading-relaxed">

      A unified ecosystem combining cutting-edge software engineering, 
      performance marketing, and corporate compliance under one strategic roof.
    </p>

  </ScrollReveal>
</header>
          <div>
      <span className="text-blue-600 font-mono text-xs font-black tracking-[0.5em] block mb-4">// MODULE 01</span>
      <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">
        COre <span className="text-slate-300 italic">Services.</span>
      </h3>
    </div>

        {/* SECTION A: CORE SERVICES */}
        <div className="space-y-64 mb-64">
         
            {coreServices.map((service, i) => (
              
                <div key={service.id} className="grid lg:grid-cols-12 gap-20 items-center">
                    <div className={`lg:col-span-6 relative ${i % 2 !== 0 ? "lg:order-last" : ""}`}>
                        <ScrollReveal variant={i % 2 === 0 ? "left" : "right"}>
                            <div className="relative overflow-hidden shadow-2xl">
                                <motion.img 
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-[600px] object-cover  transition-all duration-700" 
                                />
                                <div className="absolute bottom-0 left-0 bg-blue-600 text-white p-8">
                                    <FiCpu className="text-4xl animate-pulse" />
                                </div>
                            </div>
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-slate-200" />
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-6">
                        <ScrollReveal variant="up">
                            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest mb-4 block italic">// {service.tag}</span>
                            <h3 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight text-slate-900">{service.title}</h3>
                            <p className="text-slate-500 text-lg mb-12 leading-relaxed italic">{service.desc}</p>
                            
                            <div className="grid md:grid-cols-1 gap-4 mb-12 border-t border-slate-100 pt-8">
                                {service.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 py-3 group hover:translate-x-2 transition-transform duration-300">
                                        <div className="w-1.5 h-1.5 bg-blue-600"></div>
                                        <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact" className="inline-flex items-center gap-6 group">
                                <span className="h-14 px-10 bg-slate-950 text-white flex items-center font-bold text-xs uppercase tracking-widest group-hover:bg-blue-600 transition-all">Request Technical Spec</span>
                                <div className="w-14 h-14 border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-all">
                                    <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
                                </div>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            ))}
        </div>

     {/* ONE-TEAM LOGIC & WORKFLOW */}
<div className="mb-32 md:mb-64 bg-slate-950 p-8 md:p-32 text-white relative overflow-hidden">
  <div className="relative z-10">
    
    {/* Part 1: The Problem & Solution */}
    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-24">
      <div>
        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          Stop Managing <br /> <span className="text-blue-500">Chaos.</span>
        </h3>
        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
          Why manage 5+ vendors for website, marketing, design, and legal? 
          Fragmented focus leads to delays. We eliminate that friction.
        </p>
        
        {/* Vendor vs FKode Highlight */}
        <div className="mt-10 flex flex-wrap gap-3">
          {['Web', 'Marketing', 'Design', 'Legal', 'Software'].map((item) => (
            <span key={item} className="px-3 py-1 border border-white/10 text-slate-500 text-[10px] uppercase font-bold line-through">
              {item} Vendor
            </span>
          ))}
          <span className="px-4 py-1 bg-blue-600 text-white text-[10px] uppercase font-black animate-pulse">
            FKode: One Team. One Strategy.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-8">
        {[
          { t: "Unified Strategy", d: "One cohesive roadmap for tech and growth." },
          { t: "Absolute Accountability", d: "A single point of contact for all operations." },
          { t: "System Integration", d: "Zero friction between business tools and legalities." }
        ].map((adv, i) => (
          <div key={i} className="flex gap-6 items-start border-l-2 border-blue-600 pl-8 group">
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">{adv.t}</h4>
              <p className="text-sm text-slate-500">{adv.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Part 2: 🚀 HOW WE WORK (Workflow) */}
    <div className="pt-20 border-t border-white/10">
      <div className="mb-16">
        <span className="text-blue-500 font-mono text-xs font-black tracking-[0.5em] block mb-4">// EXECUTION ENGINE</span>
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">How We <span className="italic text-slate-700">Work.</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Understand", desc: "Deep dive into your business DNA and market landscape." },
          { step: "02", title: "Architect", desc: "Building your custom digital systems and legal foundation." },
          { step: "03", title: "Launch", desc: "Deploying high-performance assets to the global market." },
          { step: "04", title: "Scale", desc: "Hyper-growth through AI-driven automation and systems." }
        ].map((item, idx) => (
          <div key={idx} className="relative p-8 border border-white/5 hover:border-blue-600/50 transition-all group bg-white/[0.02]">
            <span className="text-5xl font-black text-white/5 group-hover:text-blue-600/20 transition-colors absolute top-4 right-6">
              {item.step}
            </span>
            <div className="relative z-10">
              <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                {item.desc}
              </p>
            </div>
            {/* Connector line for Desktop */}
            {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-blue-600/30 z-0"></div>}
          </div>
        ))}
      </div>
    </div>

  </div>
  
  {/* Background Branding */}
  <div className="absolute -bottom-10 -right-10 text-[12rem] md:text-[20rem] font-black text-white/[0.02] pointer-events-none uppercase select-none">
    FKode
  </div>
</div>

       {/* SECTION B: EXTENDED BUSINESS ECOSYSTEM */}
<div className="mb-32">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
    <div>
      <span className="text-blue-600 font-mono text-xs font-black tracking-[0.5em] block mb-4">// MODULE 02</span>
      <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">
        Extended <span className="text-slate-300 italic">Services.</span>
      </h3>
    </div>
    <div className="hidden md:block h-[1px] flex-1 bg-slate-200 mx-10 mb-4"></div>
  </div>

  <div className="grid lg:grid-cols-3 gap-0 border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
    {extendedServices.map((ext, i) => (
      <div key={i} className="group relative bg-white p-10 md:p-16 overflow-hidden transition-all duration-700 hover:bg-slate-950">
        
        {/* Vertical Index Number */}
        <div className="absolute top-10 right-10 flex flex-col items-center">
            <span className="font-mono text-[10px] text-slate-300 group-hover:text-blue-500 transition-colors uppercase vertical-text tracking-widest">
                Service Unit
            </span>
            <span className="text-4xl font-black text-slate-100 group-hover:text-white/10 transition-colors">
                0{i + 1}
            </span>
        </div>

        {/* Category Tag */}
        <span className="inline-block px-3 py-1 border border-blue-600 text-blue-600 font-mono text-[10px] font-bold uppercase tracking-widest mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
          {ext.tag}
        </span>

        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-3xl font-black uppercase mb-6 leading-none tracking-tighter text-slate-900 group-hover:text-white transition-colors">
            {ext.category.split(' ')[0]} <br/> 
            <span className="text-blue-600">{ext.category.split(' ')[1]}</span>
          </h4>
          
          <p className="text-slate-500 group-hover:text-slate-400 mb-10 text-sm leading-relaxed font-medium transition-colors">
            {ext.desc}
          </p>

          <ul className="space-y-5 mb-10">
            {ext.items.map((li, j) => (
              <li key={j} className="flex items-center gap-4 group/item">
                <div className="w-1 h-1 bg-blue-600 group-hover:w-4 transition-all duration-500"></div>
                <span className="text-[10px] font-bold text-slate-700 group-hover:text-slate-300 uppercase tracking-[0.2em] transition-colors">
                  {li}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* The "Different Look" Element: Background Image Reveal */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 scale-150 group-hover:scale-100">
           <img 
              src={ext.image} 
              className="w-full h-full object-cover grayscale" 
              alt="Service Visual" 
            />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        {/* Animated Corner Bracket */}
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-slate-100 group-hover:border-blue-600 transition-all duration-500"></div>
      </div>
    ))}
  </div>
</div>
        {/* FOOTER */}
        <footer className="mt-64 border-t-2 border-slate-950 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.4em] text-slate-400">
                <span>Status: Operational</span>
                <span>Location: Chennai HQ</span>
                <span>&copy; 2026 FKode Solution</span>
            </div>
            <div className="flex gap-4">
                {['LinkedIn', 'Instagram', 'Dribbble'].map(link => (
                    <a key={link} href="#" className="w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <FiExternalLink />
                    </a>
                ))}
            </div>
        </footer>

      </div>
    </section>
  );
}