const industries = [
  "Retail Shops & Small Businesses",
  "Restaurants & Cafes",
  "Startups & Entrepreneurs",
  "Healthcare & Clinics",
  "Logistics & Transport",
  "EdTech / Institutions",
  "Real Estate",
  "E-commerce",
  "NGOs & Welfare Organizations",
];

export default function Industries() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Industries We <span className="text-orange-400">Serve</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We work with businesses across diverse sectors, helping them grow and succeed
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-4"
            >
              <div className="text-orange-400 text-2xl">✓</div>
              <div className="text-gray-300 font-medium">{industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

