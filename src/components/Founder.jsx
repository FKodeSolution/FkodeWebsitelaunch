export default function Founder() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="text-orange-400">Founder</span> & Vision
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                At the heart of FKode Solution stands <span className="text-orange-400 font-semibold">Lokesh</span>,
                a visionary entrepreneur committed to reshaping how businesses begin and grow.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                His mission is simple:
              </p>
              <p className="text-xl md:text-2xl text-orange-300 font-semibold italic mb-8 text-center">
                To make business setup easy, affordable, and accessible for everyone — from small
                shops to global startups.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6">
                With an eye for design, a passion for technology, and a drive to innovate,
                he leads FKode with five core principles:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Build with purpose",
                  "Keep users first",
                  "Deliver real results",
                  "Work with integrity",
                  "Create future-ready solutions",
                ].map((principle, i) => (
                  <div
                    key={i}
                    className="bg-black/50 p-4 rounded-xl border border-orange-500/20 flex items-center gap-3"
                  >
                    <span className="text-orange-400 text-xl">→</span>
                    <span className="text-gray-300">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

