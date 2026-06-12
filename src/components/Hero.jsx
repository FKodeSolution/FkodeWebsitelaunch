import React, { useState, useEffect } from "react";

export default function FKodeCountdown() {
  // STRICT TARGET: 13 June 2026 at 01:30 PM IST
  const targetDate = new Date("2026-06-13T13:30:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // கவுண்ட்டவுன் முடிவடைந்தால் டைமரை நிறுத்தவும்
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        // துல்லியமான கணக்கீடு (மில்லிசெகண்ட்ஸ் டூ டைம்)
        setTimeLeft({
          days: String(Math.floor(difference / 86400000)).padStart(2, "0"),
          hours: String(Math.floor((difference % 86400000) / 3600000)).padStart(2, "0"),
          minutes: String(Math.floor((difference % 3600000) / 60000)).padStart(2, "0"),
          seconds: String(Math.floor((difference % 60000) / 1000)).padStart(2, "0"),
        });
      }
    }, 1000);

    // Component அன்மவுண்ட் ஆகும்போது மெமரி லீக் ஆகாமல் தடுக்க கிளீன்-அப்
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-slate-950 text-white font-sans rounded-2xl p-8 shadow-2xl border border-white/5 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[80px] pointer-events-none" />

      {/* Header Tag */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Next Launch / June 13
        </span>
      </div>

      {/* Countdown Grid */}
      <div className="flex gap-4 md:gap-8 font-mono text-4xl md:text-6xl font-black text-white selection:bg-blue-600">
        
        {/* Days */}
        <div className="flex flex-col items-center">
          <span className="bg-white/[0.03] px-4 py-3 rounded-xl border border-white/5 shadow-inner min-w-[70px] md:min-w-[100px] text-center">
            {timeLeft.days}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Days</span>
        </div>

        <span className="text-blue-500 self-center mb-6 animate-pulse">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <span className="bg-white/[0.03] px-4 py-3 rounded-xl border border-white/5 shadow-inner min-w-[70px] md:min-w-[100px] text-center">
            {timeLeft.hours}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Hours</span>
        </div>

        <span className="text-blue-500 self-center mb-6 animate-pulse">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span className="bg-white/[0.03] px-4 py-3 rounded-xl border border-white/5 shadow-inner min-w-[70px] md:min-w-[100px] text-center">
            {timeLeft.minutes}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Mins</span>
        </div>

        <span className="text-blue-500 self-center mb-6 animate-pulse">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span className="bg-white/[0.03] px-4 py-3 rounded-xl border border-white/5 shadow-inner min-w-[70px] md:min-w-[100px] text-center text-blue-500">
            {timeLeft.seconds}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Secs</span>
        </div>

      </div>
    </div>
  );
}