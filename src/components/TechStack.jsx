const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Three.js", category: "3D Graphics" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Firebase", category: "Backend" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            FKode <span className="text-orange-400">Digital Products</span> Division
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built with modern technologies for scalable, high-performance solutions
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-orange-900/20 to-black p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

