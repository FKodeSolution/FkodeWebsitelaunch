const features = [
  {
    title: "Everything in One Place",
    description: "Branding, tech, marketing, registration, gifting — all under one roof.",
    icon: "🏢",
  },
  {
    title: "Fast & Professional Delivery",
    description: "Quick turnaround times without compromising on quality.",
    icon: "⚡",
  },
  {
    title: "Affordable Packages",
    description: "Budget-friendly solutions for small businesses & startups.",
    icon: "💰",
  },
  {
    title: "Advanced AI-Powered Solutions",
    description: "Cutting-edge technology to automate and optimize your business.",
    icon: "🤖",
  },
  {
    title: "Transparent Pricing & Support",
    description: "Clear pricing with dedicated support throughout your journey.",
    icon: "💬",
  },
  {
    title: "On-Time Delivery",
    description: "Every time. We respect deadlines and deliver as promised.",
    icon: "✅",
  },
  {
    title: "Clean Design & Modern Tech",
    description: "Beautiful designs and latest technology for real results.",
    icon: "🎨",
  },
];

export default function WhyChooseFKode() {
  return (
    <section
      id="why-choose-fkode"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why Choose <span className="text-orange-400">FKode</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just a service provider. We're your business partner in success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 border border-gray-800 hover:border-orange-500/50"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
