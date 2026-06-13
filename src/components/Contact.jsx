import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../pictures/Background3.png"; 
import { motion, AnimatePresence } from "framer-motion";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [formMessage, setFormMessage] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 40 }, // மொபைல் அனிமேஷனுக்காக y-axis தூரம் 40 ஆகக் குறைக்கப்பட்டுள்ளது
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".floating-shape", {
        y: "random(-30, 30)",
        x: "random(-15, 15)",
        duration: "random(5, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5, from: "random" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contacts = [
    { 
      label: "Office Address", 
      value: "No.82, Mariyammal Street, North Station Road, Annai Nagar, Korattur, Chennai – 600076", 
      link: "https://maps.google.com", 
      icon: MapPinIcon 
    },
    { 
      label: "WhatsApp", 
      value: "+91 82487 98337 | +44 3171 2433", 
      link: "https://wa.me/918248798337", 
      icon: PhoneIcon 
    },
    { label: "Email", value: "info@fkodesolution@gmail.com", link: "mailto:info@fkodesolution@gmail.com", icon: EnvelopeIcon },
    { label: "Website", value: "www.fkodesolution.com", link: "https://www.fkodesolution.com", icon: GlobeAltIcon },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("Sending...");

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzBdDNNhzYoIikJceB4ICRf4LwuvsmF8n4JifAk8P4K45EmC3AhtFo8Z2c-l0anRiDK/exec"; 
    const formData = new FormData(formRef.current);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", 
      });
      
      setFormMessage("Success! Your message is saved in our sheet.");
      formRef.current.reset();
    } catch (error) {
      setFormMessage("Error! Please try again later.");
      console.error("Error!", error.message);
    }

    setTimeout(() => setFormMessage(""), 5000);
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="relative py-16 sm:py-24 lg:py-32 bg-[#fcfdff] text-slate-900 overflow-hidden w-full"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none w-full h-full">
        <div 
          className="absolute inset-0 opacity-[0.12] grayscale" 
          style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }} 
        />
        <div className="floating-shape absolute top-[-5%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="floating-shape absolute bottom-[5%] right-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-400/10 rounded-full blur-[70px] sm:blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10 w-full">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-12 sm:mb-20 reveal">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-blue-600"></span>
            <h4 className="text-blue-600 font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs">Reach Out</h4>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 leading-[1.05] sm:leading-[0.95] tracking-tighter uppercase">
            LET'S SCALE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 italic">
              YOUR VISION.
            </span>
          </h2>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full">
          
          {/* CONTACT INFO CARD */}
          <div className="lg:col-span-5 reveal w-full">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm">
              <h3 className="text-[9px] sm:text-[10px] font-black text-slate-400 mb-8 sm:mb-12 uppercase tracking-[0.3em]">
                Contact Details
              </h3>

              <div className="space-y-8 sm:space-y-10">
                {contacts.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 sm:gap-6 group w-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-950 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500 shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] sm:text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5 sm:mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors break-words sm:break-normal">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="lg:col-span-7 reveal w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] border border-slate-100 w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-10 sm:mb-12">
                {["Name", "Email"].map((field) => (
                  <div key={field} className="relative w-full">
                    <input
                      required
                      name={field}
                      type={field === "Email" ? "email" : "text"}
                      placeholder=" "
                      className="peer w-full border-b-2 border-slate-200 py-3 sm:py-4 bg-transparent outline-none text-base sm:text-lg font-bold focus:border-blue-600 transition-colors"
                    />
                    <label className="absolute left-0 top-3 sm:top-4 text-slate-400 text-xs font-bold uppercase tracking-widest pointer-events-none transition-all duration-300
                      peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[10px]
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                      {field}
                    </label>
                  </div>
                ))}
              </div>

              <div className="relative mb-12 sm:mb-16 w-full">
                <textarea
                  required
                  name="Message"
                  rows="3"
                  placeholder=" "
                  className="peer w-full border-b-2 border-slate-200 py-3 sm:py-4 bg-transparent outline-none text-base sm:text-lg font-bold focus:border-blue-600 resize-none transition-colors"
                />
                <label className="absolute left-0 top-3 sm:top-4 text-slate-400 text-xs font-bold uppercase tracking-widest pointer-events-none transition-all duration-300
                  peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[10px]
                  peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                  Project Brief
                </label>
              </div>

              <button
                type="submit"
                className="group relative w-full sm:w-auto overflow-hidden px-10 py-5 sm:px-12 sm:py-6 bg-slate-950 text-white rounded-xl sm:rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all hover:shadow-2xl hover:shadow-blue-100 active:scale-98"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <AnimatePresence>
                {formMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 sm:mt-8 text-blue-600 font-bold text-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    {formMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}