import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCpu, FiTarget, FiZap, FiRocket } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

/* Images */
import softwareImg from "../pictures/software.jpg";
import digitalImg from "../pictures/digital.jpg";
import registrationImg from "../pictures/registration.jpg";
import brandingImg from "../pictures/branding.jpg";
import giftImg from "../pictures/gift.jpg";
import automationImg from "../pictures/Ai.jpg";

const coreServices = [
  {
    id: "Digital Product Engineering",
    title: "Digital Product Engineering ",
        h4: "Build websites, apps, SaaS, software",

    tag: "Systems Engineering",
    desc: "We build powerful digital products tailored to your business needs. From websites and mobile apps to enterprise software and SaaS platforms, our solutions are designed to improve efficiency and long-term growth.",
    image: softwareImg,
    icon: <FiCpu />,
    items: ["Business Websites", "Mobile Applications", "Web Applications", "SaaS Platforms", "Custom Software", "CRM & ERP Systems"]
  },
  {
    id: "Growth & Customer Acquisition",
    title: "Growth & Customer Acquisition ",
            h4: "Marketing + Lead Generation",

    tag: "Growth Logic",
    desc: "Generate consistent leads and grow your customer base through data-driven marketing. We combine creativity and performance marketing to turn visitors into paying customers.",
    image: digitalImg,
    icon: <FiTarget />,
    items: ["SEO Services", "Social Media Marketing", "Performance Ads", "Lead Generation Funnels", "WhatsApp Marketing", "Marketing Automation"]
  },
  {
    id: "Intelligent Automation Systems",
    title: "Intelligent Automation Systems",
            h4: "AI + Automation",

    tag: "Neural Scale",
    desc: "Automate repetitive tasks and deliver better customer experiences using intelligent automation systems powered by modern AI technologies.",
    image: automationImg,
    icon: <FiZap />,
    items: ["AI Chatbots", "WhatsApp Automation", "Workflow Automation", "Customer Support Systems", "Lead Management", "BI Dashboards"]
  }
];

const launchSolutions = [
  {

    title: "Startup & Business Launch",
            h4: "Startup / Business Building",

    tag: "Idea To Business",
    image: registrationImg,
    desc: "Have a business or app idea but don't know where to start? We help entrepreneurs transform ideas into successful businesses.",
    items: ["Business Strategy & Planning", "Company Registration Support", "Brand Identity & Logo Design", "Product Roadmapping", "MVP Development", "SaaS Launch Support"]
  }
];
const extendedServices = [
  { 
    id: "registration",
    category: "Corporate Compliance", 
    tag: "Regulatory", 
    image: registrationImg,
    desc: "Navigating the legal landscape to ensure your business foundation is secure and compliant.",
    items: ["Private Ltd & LLP Incorporation", "GST & MSME Regulatory Filing", "FSSAI & Statutory Licensing"] 
  },
  { 
    id: "branding",
    category: "Creative Branding", 
    tag: "Identity", 
    image: brandingImg,
    desc: "Defining your brand's visual DNA. We engineer cohesive identities that command attention.",
    items: ["Custom Logo & Visual Systems", "Brand Positioning & Strategy", "High-Impact Graphic Design"] 
  },
  { 
    id: "gifting",
    category: "Corporate Assets", 
    tag: "Merchandise", 
    image: giftImg,
    desc: "Extending your professional reach through premium physical touchpoints and curated brand assets.",
    items: ["Luxury Corporate Gifting", "Custom Branded Merchandise", "Premium Executive Hampers"] 
  }
];

export default function Services() {
  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
   {/* --- HERO HEADER (PREMIUM STANDARD CORPORATE) --- */}
<header className="relative mb-6 md:mb-20 pt-3 md:pt-8 border-b border-slate-100 pb-6 md:pb-12 font-sans">
  <ScrollReveal variant="up">
    
    {/* Top Corporate Context Bar — High-Density Layout with Minimal Margin */}
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-3 mb-5 md:mb-10">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex gap-1 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
        </div>
        <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-white-900">
          FKode Solutions
        </span>
        <span className="text-slate-300 hidden sm:inline">|</span>
        <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider hidden sm:inline">
          Enterprise Infrastructure
        </span>
      </div>
      
      
    </div>

    {/* Main Corporate Typography Grid — Clean Flow & No Dead Spaces */}
    <div className="grid lg:grid-cols-12 gap-5 md:gap-10 items-start">
      
      {/* Left Side Group: Heading, Subheading AND the Action Button right beneath */}
      <div className="lg:col-span-7 space-y-4 md:space-y-6">
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-slate-950 leading-[1.1] md:leading-[1.05]">
            FKode Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Solutions.
            </span>
          </h2>
          <h4 className="text-blue-600 font-mono text-[11px] sm:text-sm md:text-base font-bold uppercase tracking-[0.12em] leading-snug">
            // Complete Business Growth Ecosystem Under One Roof
          </h4>
        </div>

        {/* Right Side Group: Compact Context (No margins or blank lines) */}
      <div className="lg:col-span-5 lg:pt-1">
        <div className="pl-0 lg:pl-5 border-l-0 lg:border-l-2 border-slate-200">
          <p className="text-slate-500 text-sm md:text-base lg:text-lg font-normal leading-relaxed text-justify">
            Complete business infrastructure engineered under a single tactical framework. We help enterprises{" "}
            <span className="text-slate-950 font-semibold underline decoration-blue-600 decoration-2 underline-offset-4">
              launch, grow, and automate
            </span>{" "}
            core workflows through technology-driven discipline.
          </p>
          
        </div>
      </div>

        {/* Refined Corporate Action Button — Perfectly aligned with zero vertical leak */}
        <div className="pt-1 flex w-full sm:w-auto">
          <Link 
            to="/contact" 
            className="group flex items-center justify-between gap-4 w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white pl-5 pr-4 py-3 md:py-3.5 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="font-sans font-bold uppercase tracking-[0.15em] text-xs whitespace-nowrap">
              Start Project
            </span>
            <div className="w-7 h-7 bg-white/10 group-hover:bg-white text-white group-hover:text-slate-950 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0">
              <FiArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>

      

    </div>

  </ScrollReveal>
</header>
        {/* SECTION A: CORE SERVICES */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-16">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Core Services</h3>
                <div className="h-[1px] flex-1 bg-slate-200"></div>
            </div>

            <div className="space-y-24 md:space-y-48">
            {coreServices.map((service, i) => (
                <div key={service.id} className="grid lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-7 ${i % 2 !== 0 ? "lg:order-last" : ""}`}>
                    <ScrollReveal variant="up">
                    <div className="relative group overflow-hidden rounded-3xl">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            src={service.image} 
                            className="w-full h-[400px] md:h-[550px] object-cover w-full h-auto object-contain md:object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8 md:p-12">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center text-white text-3xl">
                                    {service.icon}
                                </div>
                                <span className="text-white font-mono text-sm tracking-[0.3em] uppercase opacity-60 italic">{service.tag}</span>
                            </div>
                        </div>
                    </div>
                    </ScrollReveal>
                </div>

                <div className="lg:col-span-5">
                    <ScrollReveal variant="up">
                   
                    <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 text-slate-900 leading-tight">{service.title}</h3>
                                       <h4 className="text-blue-500 text-lg mb-8 leading-relaxed">{service.h4}</h4>

                    <p className="text-slate-500 text-lg mb-8 leading-relaxed">{service.desc}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">{item}</span>
                        </div>
                        ))}
                    </div>

                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-4 font-black uppercase tracking-[0.2em] text-sm group text-blue-600">
                        Explore More <FiArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </Link>
                    </ScrollReveal>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* SECTION B: STARTUP SOLUTIONS (The Unique Feature) */}
        <div className="py-24 bg-blue-50 rounded-[3rem] px-8 md:px-20 mb-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <FaRocket size={200} className="text-blue-800" />
             </div>
             
             {launchSolutions.map((sol, index) => (
                 <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="px-4 py-1 bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
                            {sol.tag}
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-slate-950">
                            Startup & Business <br/> <span className="text-blue-600">Launch Solutions</span>
                        </h3>
                        <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed italic">
                            {sol.desc}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-y-4">
                            {sol.items.map((li, j) => (
                                <div key={j} className="flex items-center gap-3">
                                    <div className="w-5 h-[1px] bg-blue-600"></div>
                                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">{li}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img src={sol.image} alt="Startup" className="rounded-2xl shadow-2xl  transition-all duration-700" />
                        <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl hidden md:block max-w-xs">
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Long-term Partner</p>
                            <p className="text-slate-500 text-sm italic">"We become your extended team for software and growth."</p>
                        </div>
                    </div>
                     <Link
  to="/servicesStartup"
  className="inline-flex items-center gap-4 font-black uppercase tracking-[0.2em] text-sm group text-blue-600"
>
  Explore More
  <FiArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
</Link>
                 </div>
                 
             ))}
        </div>


{/* SECTION B: EXTENDED BUSINESS ECOSYSTEM */}
<div className="mb-16 md:mb-32 pt-6">
  {/* Header Title Layer */}
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
    <div>
      <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
        Extended Services.
      </h3>
    </div>
    <div className="hidden md:block h-[1px] flex-1 bg-slate-200 mx-6 md:mx-10 mb-3"></div>
  </div>

  {/* Main High-Density Responsive Grid */}
  <div className="grid lg:grid-cols-3 gap-0 border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 rounded-xl overflow-hidden">
    {extendedServices.map((ext, i) => (
      <div 
        key={i} 
        className="group relative bg-white p-6 sm:p-8 md:p-12 xl:p-14 overflow-hidden transition-all duration-700 hover:bg-slate-950 flex flex-col justify-between min-h-[420px]"
      >
        {/* Top Absolute Context Metadata */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex flex-col items-center select-none">
          <span className="font-mono text-[9px] text-slate-300 group-hover:text-blue-500 transition-colors uppercase vertical-text tracking-widest hidden sm:block">
            Service Unit
          </span>
          <span className="text-2xl sm:text-4xl font-black text-slate-100 group-hover:text-white/10 transition-colors leading-none mt-1">
            0{i + 1}
          </span>
        </div>

        <div>
          {/* Tag Identifier Badge */}
          <span className="inline-block px-2.5 py-1 border border-blue-600 text-blue-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
            {ext.tag}
          </span>

          {/* Core Content Body Stack */}
          <div className="relative z-10 space-y-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight text-slate-900 group-hover:text-white transition-colors">
              {ext.category.split(' ')[0]} <br/> 
              <span className="text-blue-600">{ext.category.split(' ').slice(1).join(' ')}</span>
            </h4>
            
            <p className="text-slate-500 group-hover:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify max-w-sm transition-colors">
              {ext.desc}
            </p>
            
            {/* Structured Metric Row Items */}
            <ul className="space-y-3 pt-2">
              {ext.items.map((li, j) => (
                <li key={j} className="flex items-start gap-3 group/item">
                  <div className="w-1 h-1 bg-blue-600 group-hover/item:w-3 transition-all duration-300 mt-2 shrink-0"></div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 group-hover:text-slate-300 uppercase tracking-[0.15em] transition-colors leading-relaxed">
                    {li}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= INDIVIDUAL EXPLORE BUTTON LINK (PER CARD) ================= */}
        <div className="relative z-10 pt-8 sm:pt-10 mt-auto">
          {/* Note: ext.id is dynamic now, it routes exactly to that unique service page */}
          <Link 
            to={`/services/${ext.id}`} 
            className="inline-flex items-center gap-3 font-sans font-bold uppercase tracking-[0.2em] text-xs text-blue-600 group-hover:text-white transition-colors focus:outline-none"
          >
            <span>Explore More</span>
            <FiArrowUpRight className="transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" size={14} />
          </Link>
        </div>

        {/* Ambient Hover Graphic Vector Asset Layers */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-all duration-1000 scale-120 group-hover:scale-100 pointer-events-none">
          <img src={ext.image} className="w-full h-full object-cover grayscale" alt="Corporate Service Backdrop" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        {/* Structural Edge Border Feature */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-slate-100 group-hover:border-blue-600 transition-all duration-300"></div>
      </div>
    ))}
  </div>
</div>


        
        {/* --- FINAL CTA (PREMIUM SPLIT GRID SYSTEM) --- */}
        <div className="relative mt-20 md:mt-32 border-t border-slate-200 pt-16 pb-20 font-sans">
          
          {/* Subtle Accent Layer */}
          <div className="absolute top-0 left-0 w-24 h-[3px] bg-blue-600"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Editorial Styled Heading */}
            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-4">
                // NEXT LEVEL EXECUTION
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-950 leading-[1.05]">
                Ready to Scale <br />
                Your Entire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise?</span>
              </h3>
            </div>

            {/* Right Side: Clean Narrative & Interaction Area */}
            <div className="lg:col-span-5 lg:pt-8 flex flex-col justify-between h-full">
              <p className="text-slate-500 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-10 max-w-md">
                Integrate into the FKode infrastructure. We construct and manage the underlying technology systems, allowing your core leadership to focus entirely on the vision.
              </p>

              {/* Minimalist Yet High-Impact Kinetic Button */}
              <div className="border-t border-slate-100 pt-8">
                <Link 
                  to="/contact" 
                  className="group inline-flex items-center justify-between gap-8 bg-slate-950 hover:bg-blue-600 text-white pl-6 pr-4 py-4 rounded-2xl shadow-xl shadow-slate-950/10 transition-all duration-500 w-full sm:w-auto"
                >
                  <span className="font-sans font-black uppercase tracking-[0.2em] text-xs">
                    Initiate Consultation
                  </span>
                  <div className="w-8 h-8 bg-white/10 group-hover:bg-white text-white group-hover:text-slate-950 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-45 shrink-0">
                    <FiArrowUpRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* Elegant Kinetic Typography Footer Accent */}
          <div className="mt-16 pt-6 border-b border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            <span>[ FKODE ENTERPRISE ECOSYSTEM ]</span>
            <span className="hidden sm:inline">ALL SYSTEMS OPERATIONAL 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}