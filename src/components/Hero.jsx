import React, { useState, useEffect } from "react";

const FKodeCountdown = () => {
  // STRICT TARGET: 13 June 2026 at 01:30 PM IST
  const calculateTimeLeft = () => {
    // 24-hour வடிவில் மதியம் 1:30 என்பது 13:30:00 ஆகும். 
    // இந்திய நேரத்தைக் குறிக்க (+05:30) என்ற Time Zone Offset-ஐச் சேர்த்துள்ளேன்.
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
    <div className="flex gap-4 justify-center items-center font-mono text-xl md:text-3xl font-bold text-slate-950">
      <div>{timeLeft.days}d</div>
      <div>{timeLeft.hours}h</div>
      <div>{timeLeft.minutes}m</div>
      <div>{timeLeft.seconds}s</div>
    </div>
  );
};

export default FKodeCountdown;