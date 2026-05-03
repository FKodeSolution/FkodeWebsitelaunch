import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/* Images */
import retail from "../pictures/retail.jpg";
import hospital from "../pictures/image.png";
import startups from "../pictures/starup.png";
import clinic from "../pictures/clinic.jpg";
import education from "../pictures/Education.jpg";
import ecommerce from "../pictures/E-Commerce.avif";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { title: "Retail & Consumer Businesses", tag: "RETAIL", desc: "We help retail brands build strong identities, streamline operations, and drive consistent sales growth.", points: ["Brand identity", "POS & billing", "Digital marketing", "Promotional materials"], image: retail },
  { title: "Hospitality & Food Services", tag: "HOSPITALITY", desc: "From local cafés to restaurants, we deliver solutions that enhance customer experience and brand recall.", points: ["Menu design", "Ordering systems", "Social media", "Event gifting"], image: hospital },
  { title: "Startups & Entrepreneurs", tag: "VENTURES", desc: "We partner with founders from idea stage to scale, covering both business setup and technology.", points: ["Product design", "App development", "GST support", "Growth strategy"], image: startups },
  { title: "Healthcare & Clinics", tag: "HEALTHCARE", desc: "We support healthcare businesses with secure systems, professional branding, and patient experiences.", points: ["Clinic branding", "Appointment systems", "Online visibility", "Branded stationery"], image: clinic },
  { title: "Education & Institutions", tag: "EDUCATION", desc: "We help educational organizations modernize operations and strengthen trust with students and parents.", points: ["Institution branding", "Learning platforms", "Admissions campaigns", "Event kits"], image: education },
  { title: "E-Commerce & Online Brands", tag: "E-COMM", desc: "We empower online brands with end-to-end solutions that convert traffic into loyal customers.", points: ["UI/UX design", "Automation", "Performance marketing", "Custom Packaging"], image: ecommerce },
];

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Animations
      gsap.to(".bg-shape-float", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-20, 20)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Section Entrance
      industries.forEach((_, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.industry-row-${i}`,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(`.img-box-${i}`, { opacity: 0, scale: 0.9, x: i % 2 === 0 ? -50 : 50 }, { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" })
          .fromTo(`.content-box-${i}`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
          .fromTo(`.point-item-${i}`, { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 }, "-=0.4");
      });

      // Parallax Effect
      gsap.utils.toArray(".parallax-img").forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: img, scrub: 1 }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 bg-[#f8faff] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-shape-float absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="bg-shape-float absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(90deg, #2563eb 1px, transparent 1px), linear-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="relative min-h-[70vh] flex items-center mb-24">
          <div className="w-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[2px] w-24 bg-blue-600" />
              <p className="text-xs font-black uppercase tracking-[0.6em] text-blue-600">Global Tech Architect</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="flex-1 relative">
                <h1 className="text-slate-900 font-black uppercase tracking-[-0.05em] leading-[0.8]">
                  <span className="text-[12vw] lg:text-[8rem] block">Market</span>
                  <span className="text-[12vw] lg:text-[8rem] text-transparent" style={{ WebkitTextStroke: '2px #2563eb' }}>Definers.</span>
                </h1>
                <div className="mt-12 max-w-xl">
                  <p className="text-slate-500 text-xl lg:text-2xl font-medium border-l-4 border-blue-600 pl-8">
                    We don't just adapt to industries; we <span className="text-slate-900 font-bold">engineer the frameworks</span> that others follow.
                  </p>
                </div>
              </div>

              <div className="lg:w-[350px]">
                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-blue-50 relative">
                  <p className="text-slate-900 font-black text-xl mb-6">Ready to claim your digital territory?</p>
                  <Link to="/contact">
                    <button className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all">
                      Consultation →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Rows */}
        <div className="space-y-40">
          {industries.map((item, i) => (
            <div key={i} className={`industry-row-${i} grid lg:grid-cols-12 gap-16 items-center`}>
              
              <div className={`lg:col-span-6 relative ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`img-box-${i} relative group`}>
                  <div className="absolute -top-8 -right-8 w-40 h-40 border-t-[14px] border-r-[14px] border-blue-900/50 rounded-tr-[5rem] group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="relative overflow-hidden rounded-[3.5rem] shadow-3xl border-[10px] border-white h-[450px]">
                    <img src={item.image} alt={item.title} className="parallax-img w-full h-[120%] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute bottom-8 right-8 z-20 bg-slate-900 px-6 py-2.5 rounded-2xl">
                       <p className="text-[10px] font-black text-white uppercase tracking-widest">{item.tag}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`content-box-${i} lg:col-span-6`}>
                <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 uppercase italic leading-none">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xl mb-10 font-medium">{item.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {item.points.map((p, idx) => (
                    <div key={idx} className={`point-item-${i} flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl group hover:border-blue-500 transition-all`}>
                      <div className="w-1.5 h-6 bg-blue-100 group-hover:bg-blue-600 rounded-full" />
                      <span className="text-slate-700 font-bold text-xs uppercase tracking-tight">{p}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                   <button className="group relative px-12 py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden">
                      <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                        View Solution <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-40 p-12 md:p-24 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Custom Tech For <br /> Your Industry.
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-white hover:text-blue-600 transition-all uppercase tracking-widest text-xs">
              Consult Our Team <FaArrowRight />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}