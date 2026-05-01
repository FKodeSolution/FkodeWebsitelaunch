import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Zap, Users, Rocket, 
  Sparkles, Target, GraduationCap, ChevronRight,
  Briefcase, Mail
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const CareersPage = () => {
  const navigate = useNavigate(); // Hook-ai inga call pannaum

  const fullTimeRoles = [
    "Web Developers (Frontend / Backend)",
    "Mobile App Developers",
    "UI/UX Designers",
    "Digital Marketing Executives",
    "Sales & Business Development"
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans antialiased">
      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="relative max-w-6xl mx-auto px-5 md:px-10">
        
        {/* HERO SECTION */}
        <header className="relative pt-20 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.15em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Build Your Career With FKode
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900 mb-8">
              Join a team that builds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic">real businesses, systems, and impact.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 font-medium">Internship or full-time — your journey starts here.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/contact')} // Contact page-ku pogum
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition uppercase tracking-wider text-sm shadow-lg shadow-blue-200"
              >
                Apply Now
              </button>

              <button 
                onClick={() => {
                  const section = document.getElementById('open-roles');
                  section?.scrollIntoView({ behavior: 'smooth' }); // Inthae page-la irukura roles-ku scroll aagum
                }}
                className="border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition uppercase tracking-wider text-sm text-slate-900"
              >
                View Open Roles
              </button>
            </div>
          </motion.div>
        </header>

        {/* WHY JOIN FKODE - Unchanged content */}
        <section className="py-20 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-10"><Sparkles className="text-blue-600" size={20} /><h2 className="text-lg font-bold uppercase tracking-widest">Why Join FKode</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
              <h3 className="text-2xl font-bold mb-4">At FKode, you don’t just work — you build.</h3>
              <p className="text-blue-900/70 leading-relaxed">We work with startups and businesses across industries, creating real-world systems and solutions. Whether you're a fresher, intern, or experienced professional, you’ll work on meaningful projects.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Real client exposure", "Fast learning", "Skill-based growth", "Mentorship"].map((item) => (
                <div key={item} className="p-4 border border-gray-100 rounded-2xl flex items-center gap-3 font-semibold text-sm bg-white shadow-sm">
                  <CheckCircle2 className="text-blue-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPPORTUNITIES (Added ID for smooth scroll) */}
        <section id="open-roles" className="py-20">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-3"><Rocket className="text-blue-600"/> Opportunities at FKode</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-900 text-white rounded-3xl group hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Briefcase /> Full-Time Roles</h3>
              <ul className="space-y-4 mb-8">
                {fullTimeRoles.map(role => <li key={role} className="text-gray-300 font-medium border-b border-gray-800 pb-2">{role}</li>)}
              </ul>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-colors"
              >
                Apply for Full-Time
              </button>
            </div>
            <div className="p-8 bg-blue-600 text-white rounded-3xl group hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><GraduationCap /> Internship Program</h3>
              <p className="mb-6 font-medium">Start your journey with hands-on experience. Perfect for Students, Freshers, and Career switchers.</p>
              <ul className="space-y-2 text-blue-100 text-sm mb-8">
                <li>✓ Work on live projects</li>
                <li>✓ Practical skill development</li>
                <li>✓ Certificate of completion</li>
                <li>✓ Performance-based full-time opportunity</li>
              </ul>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full py-4 bg-gray-950 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-gray-950 transition-colors"
              >
                Apply for Internship
              </button>
            </div>
          </div>
        </section>

        {/* HIRING PROCESS - Unchanged content */}
        <section className="py-20 grid md:grid-cols-2 gap-12 border-t border-gray-100">
          <div>
            <h3 className="text-2xl font-bold mb-6 italic underline decoration-blue-500 decoration-4">⚙️ Hiring Process</h3>
            <ol className="space-y-4 font-medium text-gray-600">
              {["Apply through the form", "Profile review", "Task / assignment", "Interview / discussion", "Selection & onboarding"].map((step, i) => (
                <li key={i} className="flex items-center gap-4"><span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">{i+1}</span> {step}</li>
              ))}
            </ol>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner">
            <h3 className="text-2xl font-bold mb-6">🧠 What We Look For</h3>
            <ul className="space-y-3 mb-6 font-medium text-gray-600">
              <li>• Willingness to learn (Growth Mindset)</li>
              <li>• Consistency & discipline</li>
              <li>• Problem-solving mindset</li>
              <li>• Basic knowledge in your domain</li>
            </ul>
            <div className="bg-blue-600 p-5 rounded-xl text-white font-bold text-sm">
              Note: Degree is not mandatory — Skills + Attitude matter more at FKode.
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 text-center">
          <div className="inline-block p-10 md:p-20 rounded-[3rem] bg-gray-950 text-white w-full shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Ready to <span className="text-blue-500">start?</span></h2>
            <p className="text-gray-400 mb-10 text-lg">Choose your path and build the future with us.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => navigate('/contact')} className="bg-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all active:scale-95">Apply for Full-Time</button>
              <button onClick={() => navigate('/contact')} className="border border-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95">Apply for Internship</button>
            </div>
            <div className="mt-12 flex flex-col items-center gap-2">
               <a href="mailto:careers@fkodesolution.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} className="text-blue-500"/> careers@fkodesolution.com
               </a>
               <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 mt-4 font-bold">Arumbakkam, Chennai</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;