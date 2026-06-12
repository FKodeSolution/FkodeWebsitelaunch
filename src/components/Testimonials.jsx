const testimonials = [
  {
    quote: "FKode helped us launch our entire business from branding to software.",
    author: "Startup Founder",
  },
  {
    quote: "Best team for fast marketing results.",
    author: "Small Business Owner",
  },
  {
    quote: "Our shop registration, website & marketing — everything was done smoothly.",
    author: "Retail Shop Owner",
  },
  {
    quote: "Their app & POS system made our store run better.",
    author: "Restaurant Owner",
  },
  {
    quote: "Excellent design, clean work, and fast communication.",
    author: "E-commerce Entrepreneur",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Client <span className="text-orange-400">Feedback</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are trusted by startups, small businesses, and corporates across India.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-orange-400 text-4xl mb-4">"</div>
              <p className="text-gray-300 text-lg mb-4 italic">
                {testimonial.quote}
              </p>
              <div className="text-orange-400 font-semibold">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

