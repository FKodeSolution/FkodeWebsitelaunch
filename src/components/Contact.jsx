import { useEffect, useRef, useState } from "react";
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
  const formRef = useRef(null); // Form-ah refer panna

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".floating-shape", {
        y: "random(-40, 40)",
        x: "random(-20, 20)",
        duration: "random(4, 6)",
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
      link: "https://www.google.com/maps/search/?api=1&query=No.82,+Mariyamman+Street,+North+Station+Road,+Annai+Nagar,+Korattur,+Chennai,+600076", 
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

  // Google Sheet Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("Sending...");

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzauIg91h3BjsYrZfPHFqU2vwitrqUiO9WQ-TxTjKUS3woBmNna_mjL6t1ax91KhiWsQg/exec"; // Inga unga URL-ah paste pannunga
    const formData = new FormData(formRef.current);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Google Apps Script-ku ithu kattiyaayam
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
      className="relative py-24 lg:py-32 bg-[#fcfdff] text-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute inset-0 opacity-[0.15] grayscale" 
          style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }} 
        />
        <div className="floating-shape absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="floating-shape absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="max-w-4xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-blue-600"></span>
            <h4 className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs">Reach Out</h4>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter">
            LET'S SCALE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 italic">
              YOUR VISION.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[3rem] shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 mb-12 uppercase tracking-[0.3em]">
                Contact Details
              </h3>

              <div className="space-y-10">
                {contacts.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500 shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              <div className="grid md:grid-cols-2 gap-10 mb-12">
                {["Name", "Email"].map((field) => (
                  <div key={field} className="relative">
                    <input
                      required
                      name={field} // Mukkiyam: Sheet-ku ithu thaan header-ah pogum
                      type={field === "Email" ? "email" : "text"}
                      placeholder=" "
                      className="peer w-full border-b-2 border-slate-200 py-4 bg-transparent outline-none text-lg font-bold focus:border-blue-600 transition-colors"
                    />
                    <label className="absolute left-0 top-4 text-slate-400 text-xs font-bold uppercase tracking-widest pointer-events-none transition-all duration-300
                      peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[10px]
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                      {field}
                    </label>
                  </div>
                ))}
              </div>

              <div className="relative mb-16">
                <textarea
                  required
                  name="Message" // Mukkiyam: Sheet column header
                  rows="3"
                  placeholder=" "
                  className="peer w-full border-b-2 border-slate-200 py-4 bg-transparent outline-none text-lg font-bold focus:border-blue-600 resize-none transition-colors"
                />
                <label className="absolute left-0 top-4 text-slate-400 text-xs font-bold uppercase tracking-widest pointer-events-none transition-all duration-300
                  peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[10px]
                  peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                  Project Brief
                </label>
              </div>

              <button
                type="submit"
                className="group relative w-full md:w-auto overflow-hidden px-12 py-6 bg-slate-950 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all hover:shadow-2xl hover:shadow-blue-200"
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
                    className="mt-8 text-blue-600 font-bold text-sm flex items-center gap-2"
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