import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FKLogo from "./FKLogo";
import { 
  FiArrowRight, 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiExternalLink 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import serviceDetailsData from "../data/serviceDetailsData"; 
import { serviceDetails } from "./Services"; // Importing the data file for dynamic menu generation

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Path maarum pothu ella menu-vaiyum close seiya
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const goToService = (serviceId) => {
    navigate(`/services/${serviceId}`);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const serviceKeys = Object.keys(serviceDetailsData);

  // Link styles-kaaga common function
  const linkStyles = ({ isActive }) => `
    flex items-center gap-1 text-[11px] uppercase tracking-widest font-bold transition-all duration-300
    ${isActive ? "text-blue-600 font-black scale-110" : (isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white")}
  `;

  return (
    <nav
      onMouseLeave={() => setIsMegaMenuOpen(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMegaMenuOpen || isMobileMenuOpen ? "bg-white shadow-xl py-4" : "bg-black/40 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <FKLogo size={0.8} showText={false} />
          <div className="flex items-center font-automata uppercase tracking-wide text-sm sm:text-lg md:text-2xl">
            <span className="text-blue-600 font-bold">F</span>
            <span className="text-orange-500 font-bold">K</span>
            <span className={`font-medium transition-colors ${isScrolled || isMegaMenuOpen || isMobileMenuOpen ? "text-slate-700" : "text-white"}`}>
              ode Solution
            </span>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkStyles}>Home</NavLink>

          {/* SERVICES - MEGA MENU LOGIC */}
          <div className="relative group" onMouseEnter={() => setIsMegaMenuOpen(true)}>
            <div className="py-2 cursor-pointer">
              <NavLink to="/Services" className={linkStyles}>
                Services
                <FiChevronDown className={`text-[14px] transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
              </NavLink>
            </div>

            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="fixed top-[70px] left-0 w-full bg-white border-t border-slate-100 shadow-2xl z-[999] pointer-events-auto"
                >
                  <div className="absolute -top-[20px] left-0 w-full h-[20px] bg-transparent" />
                  
                  <div className="max-w-7xl mx-auto grid grid-cols-12 p-12 gap-0">
                    {/* CORE SERVICES */}
                    <div className="col-span-6 border-r border-slate-100 pr-12">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Core Services</h3>
                      </div>
                      <div className="space-y-2">
                        {["business-systems", "growth-systems", "automation-ai"].map((id) => (
                          <button
                            key={id}
                            onClick={() => goToService(id)}
                            className="group/item w-full flex items-center justify-between py-4 px-6 border border-transparent hover:border-blue-100 hover:bg-blue-50/40 transition-all text-left rounded-sm"
                          >
                            <div className="flex flex-col">
                              <span className="font-bold uppercase tracking-widest text-[12px] text-slate-800 group-hover/item:text-blue-600">
                                {id.replace(/-/g, ' ')}
                              </span>
                              <span className="text-[9px] text-blue-400 font-mono mt-1 opacity-0 group-hover/item:opacity-100">SERVICES_MAIN + DATA_SRC</span>
                            </div>
                            <FiArrowRight className="text-blue-600 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* EXTENDED SERVICES */}
                    <div className="col-span-6 pl-12">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Extended Services</h3>
                      </div>
                      <div className="space-y-2">
                        {[ "branding", "registration","gifting"].map((id) => (
                          <button
                            key={id}
                            onClick={() => goToService(id)}
                            className="group/item w-full flex items-center justify-between py-4 px-6 border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all text-left rounded-sm"
                          >
                            <div className="flex flex-col">
                              <span className="font-bold uppercase tracking-widest text-[12px] text-slate-800 group-hover/item:text-slate-950">
                                {id.replace(/-/g, ' ')}
                              </span>
                              <span className="text-[9px] text-slate-400 font-mono mt-1 opacity-0 group-hover/item:opacity-100">DATA_SRC_ONLY</span>
                            </div>
                            <FiExternalLink className="text-slate-300 group-hover/item:text-blue-600 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                    <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-slate-400">FKode Systems // Unified Business Infrastructure</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/why-fkode" className={linkStyles}>Why FKode</NavLink>
          <NavLink to="/industries" className={linkStyles}>Industries</NavLink>
          <NavLink to="/career" className={linkStyles}>Career</NavLink>
          <NavLink to="/contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-[11px] font-bold uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition">Contact</NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button className={`md:hidden text-2xl ${isScrolled || isMobileMenuOpen ? "text-slate-900" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
{/* MOBILE PANEL */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 top-[70px] bg-white z-[60] md:hidden overflow-y-auto px-8 py-12 flex flex-col"
    >
      <div className="flex flex-col space-y-8 pb-20">
        {/* HOME */}
        <button 
          onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} 
          className="text-left text-4xl font-black uppercase text-slate-900 tracking-tighter"
        >
          Home
        </button>
        
        {/* SERVICES ACCORDION */}
        <div className="border-b border-slate-100 pb-6">
          <div className="flex items-center justify-between w-full">
            <button 
              onClick={() => { navigate("/services"); setIsMobileMenuOpen(false); }} 
              className="text-4xl font-black uppercase text-slate-900 tracking-tighter"
            >
              Services
            </button>
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full"
            >
              <FiChevronDown className={`text-2xl transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
            </button>
          </div>

          <AnimatePresence>
            {isMobileServicesOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-6 flex flex-col space-y-8 overflow-hidden"
              >
                {/* CORE SERVICES GROUP */}
                <div className="pl-4 border-l-2 border-blue-600">
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Core Technologies</p>
                  <div className="flex flex-col space-y-4">
                    {["business-systems", "automation-ai", "software"].map((key) => (
                      <button 
                        key={key} 
                        onClick={() => { goToService(key); setIsMobileMenuOpen(false); }} 
                        className="text-left text-lg font-black text-slate-900 uppercase tracking-widest"
                      >
                        {key.replace(/-/g, " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* EXTENDED SERVICES GROUP */}
                <div className="pl-4 border-l-2 border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Extended Solutions</p>
                  <div className="flex flex-col space-y-4">
                    {["branding", "registration", "marketing", "gifting"].map((key) => (
                      <button 
                        key={key} 
                        onClick={() => { goToService(key); setIsMobileMenuOpen(false); }} 
                        className="text-left text-md font-bold text-slate-500 uppercase tracking-widest"
                      >
                        {key.replace(/-/g, " ")}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WHY FKODE */}
        <button 
          onClick={() => { navigate("/why-fkode"); setIsMobileMenuOpen(false); }} 
          className="text-left text-4xl font-black uppercase text-slate-900 tracking-tighter"
        >
          Why FKode
        </button>
         <button 
          onClick={() => { navigate("/industries"); setIsMobileMenuOpen(false); }} 
          className="text-left text-4xl font-black uppercase text-slate-900 tracking-tighter"
        >
        industries
        </button>


        {/* CAREERS SECTION (NEW) */}
        <button 
          onClick={() => { navigate("/career"); setIsMobileMenuOpen(false); }} 
          className="group flex flex-col items-start p-6 bg-blue-50 border border-blue-100 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
             <button 
          onClick={() => { navigate("/contact"); setIsMobileMenuOpen(false); }} 
         className="text-[10px] font-black text-blue-600 uppercase tracking-widest"
        >
       career
        </button>
          </div>
          <span className="text-2xl font-black text-slate-900 uppercase italic">Join the Squad</span>
          <p className="text-xs text-slate-500 mt-2">Grow with the next-gen tech team in Chennai.</p>
        </button>

        {/* CONTACT BUTTON */}
        <button 
          onClick={() => { navigate("/contact"); setIsMobileMenuOpen(false); }} 
          className="mt-4 py-6 w-full bg-slate-950 text-white text-center text-xl font-black rounded-sm shadow-xl uppercase tracking-[0.2em]"
        >
          Get In Touch
        </button>

        {/* FOOTER */}
        <div className="pt-8">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 leading-relaxed">
            © 2026 FKode Solution <br/>
            Arumbakkam, Chennai.
          </p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}