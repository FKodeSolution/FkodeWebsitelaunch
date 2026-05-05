import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../pictures/fkode.jpg";


export default function Footer() {
  const bubbleRefs = useRef([]);
  const logoRef = useRef(null);

  useEffect(() => {
    bubbleRefs.current.forEach((bubble, i) => {
      if (!bubble) return;
      gsap.to(bubble, {
        y: "+=30",
        x: "+=20",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6 + i * 2,
      });
    });

    const letters = logoRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.1,
        ease: "power4.out",
      }
    );
  }, []);

  const openWhatsApp = () =>
    window.open("https://wa.me/918248798337", "_blank");

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-20 pb-8">
      
      {/* Background bubbles */}
      <div
        ref={(el) => (bubbleRefs.current[0] = el)}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
      />
      <div
        ref={(el) => (bubbleRefs.current[1] = el)}
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-orange-500/20 rounded-full blur-[140px]"
      />

     <div className="relative max-w-7xl mx-auto px-6 md:px-10">
  {/* Main Grid Structure */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
    
    {/* 1. BRAND SECTION (Span 3) */}
    <div className="lg:col-span-3 flex flex-col space-y-4">
      
      <Link to="/" className="flex justify-center lg:justify-start">
  <img
    ref={logoRef}
    src={logo}
    alt="FKode Solution"
    className="w-40 h-auto object-contain"
  />
</Link>

     <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-left">
  Your Complete Business Solution Partner. Delivering branding, software engineering, and global scaling.
</p>

    </div>
 


          {/* 2. QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2 lg:pl-6">
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-white opacity-80 border-l-2 border-blue-600 pl-3">
              Company
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/why-fkode" className="hover:text-blue-500 transition-colors">Why FKode</Link></li>
                            <li><Link to="/industries" className="hover:text-blue-500 transition-colors"> industries</Link></li>
              <li><Link to="/package" className="hover:text-blue-500 transition-colors">Packages</Link></li>
              <li><Link to="/career" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* 3. SERVICES SECTION (Span 4 - Properly Pushed to Right) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-10">
            {/* Core Services */}
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-blue-500 opacity-80">
                Core Tech
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/services/business-systems" className="hover:text-white transition-all flex items-center gap-2 group"><span className="w-1 h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>Systems</Link></li>
                <li><Link to="/services/automation-ai" className="hover:text-white transition-all flex items-center gap-2 group"><span className="w-1 h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>AI & Automation</Link></li>
                <li><Link to="/services/software" className="hover:text-white transition-all flex items-center gap-2 group"><span className="w-1 h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>Software Dev</Link></li>
                <li><Link to="/services/growth-systems" className="hover:text-white transition-all flex items-center gap-2 group"><span className="w-1 h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>Growth</Link></li>
              </ul>
            </div>
            {/* Extended Solutions */}
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-slate-500 opacity-80">
                Extended
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/services/branding" className="hover:text-white transition-colors">Branding</Link></li>
                <li><Link to="/services/registration" className="hover:text-white transition-colors">Registration</Link></li>
                <li><Link to="/services/marketing" className="hover:text-white transition-colors">Marketing</Link></li>
                <li><Link to="/services/gifting" className="hover:text-white transition-colors">Gifting</Link></li>
              </ul>
            </div>
          </div>

          {/* 4. CONTACT SECTION (Span 3) */}
          <div className="lg:col-span-3 lg:pl-6">
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-orange-500 opacity-80 border-l-2 border-orange-500 pl-3">
              Connect
            </h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400 shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=No.82,+Mariyamman+Street,+North+Station+Road,+Annai+Nagar,+Korattur,+Chennai,+600076" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-500 transition leading-tight"
                >
                  No.82, Korattur,<br />
                  Chennai - 600076
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-green-400" />
                <a href="tel:+918248798337" className="hover:text-white transition-colors">+91 82487 98337</a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-blue-500" />
                <a href="https://www.fkodesolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">fkodesolution.com</a>
              </li>
            </ul>
            <button
              onClick={openWhatsApp}
              className="mt-8 w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-blue-600 transition-all group"
            >
              <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" /> WhatsApp Chat
            </button>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="mt-20 border-t border-white/5 pt-8 text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} FKode Solution. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest">
            <Link to="/TermsConditions" className="hover:text-orange-500 transition-colors">Terms</Link>
            <Link to="/PrivacyPolicy" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link to="/CookiePolicy" className="hover:text-orange-500 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}