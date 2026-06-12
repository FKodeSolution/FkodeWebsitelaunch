import React, { useState, useEffect } from "react";
import logo from "./logo.png";

const FKodeCountdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-06-13T13:30:00+05:30") - +new Date();
    let timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-screen bg-[#000000] text-white flex flex-col items-center justify-between p-6 overflow-hidden font-sans select-none">
      
      {/* PREMIUM MINIMAL BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-950 via-[#010101] to-[#000000] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-amber-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* TOP HEADER */}
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center z-10 border-b border-neutral-900 pb-4 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#f5d074]" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 font-bold uppercase">FKODE // HUB</span>
        </div>
      
      </div>

      {/* MAIN CONTENT BLOCK */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto z-10 gap-8 w-full py-4">
        
        {/* HERO LOGO FRAME */}
        <div className="flex flex-col items-center gap-3 shrink-0">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-4 transition-all duration-500 hover:border-amber-500/30">
            <img 
              src={logo} 
              alt="FKODE Logo" 
              className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden font-mono text-5xl font-black text-amber-500">F</span>
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold tracking-[0.6em] text-amber-400/90 pl-[0.6em]">
            FKODE
          </div>
        </div>

        {/* TYPOGRAPHY */}
        <div className="space-y-2 max-w-2xl shrink-0 text-center">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 leading-none">
            REIMAGINED
          </h1>
          <p className="text-[10px] sm:text-xs font-mono tracking-[0.4em] text-neutral-400 uppercase">
            Launching Soon
          </p>
        </div>

        {/* MINIMAL SEPARATOR */}
        <div className="w-16 h-[1px] bg-neutral-800 shrink-0" />

        {/* MINIMAL COUNTDOWN TILES */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl px-2">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINS", value: timeLeft.minutes },
            { label: "SECS", value: timeLeft.seconds }
          ].map((block) => (
            <div 
              key={block.label} 
              className="bg-neutral-950/60 border border-neutral-900 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center shadow-xl transition-colors hover:border-neutral-800"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                {block.value}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] font-bold tracking-widest text-neutral-500 mt-1 sm:mt-2">
                {block.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER LAYER */}
      <div className="w-full flex flex-col items-center relative shrink-0 pt-4 border-t border-neutral-950">
        <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-neutral-500 uppercase">
          <span className="text-amber-500 font-bold">13 JUNE 2026</span>
          <span>//</span>
          <span>JOIN THE EXPERIENCE</span>
        </div>
      </div>

    </section>
  );
};

export default FKodeCountdown;