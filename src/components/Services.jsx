const services = [
  {
    title: "Branding & Creative Design",
    description: "Give your business a powerful visual identity.",
    icon: "⭐",
    items: [
      "Logo Design",
      "Business Cards",
      "Menu Cards & Brochures",
      "Packaging Design",
      "Brand Kit (fonts, colors, styles)",
      "Social Media Templates",
    ],
  },
  {
    title: "Business Registration & Setup",
    description: "Launch your business legally & professionally.",
    icon: "⭐",
    items: [
      "GST Registration",
      "MSME / Udyam Registration",
      "FSSAI License",
      "Trademark Filing",
      "Private Limited / LLP Registration",
      "Legal Document Support",
      "Business Bank Account Assistance",
    ],
  },
  {
    title: "Digital Marketing & Advertising",
    description: "Grow your business with modern marketing tools.",
    icon: "⭐",
    items: [
      "Social Media Management",
      "Facebook & Instagram Ads",
      "Google Search & YouTube Ads",
      "Content Creation & Reels",
      "SEO Optimization",
      "Influencer Marketing",
      "Complete Marketing Strategy",
    ],
  },
  {
    title: "Software Development & Digital Solutions",
    description: "Build powerful digital products to run your business.",
    icon: "⭐",
    items: [
      "Mobile Apps (Android & iOS)",
      "Web Apps & Portals",
      "Billing / POS Systems",
      "Inventory Solutions",
      "CRM / ERP",
      "Chatbot & AI Automation",
      "Custom System Software",
    ],
  },
  {
    title: "Corporate Gifting & Merchandise",
    description: "Create memorable brand impressions.",
    icon: "⭐",
    items: [
      "Custom T-shirts",
      "Mugs",
      "ID Cards",
      "Notebooks",
      "Employee Welcome Kits",
      "Festival & Event Gift Boxes",
      "Bulk Corporate Orders",
    ],
  },
  {
    title: "Startup Launch Packages",
    description: "Start Your Business in 7 Days → Perfect for new entrepreneurs & small businesses.",
    icon: "⭐",
    special: true,
    items: [
      "Logo",
      "Website",
      "GST",
      "Social Media Setup",
      "Business Email",
      "Billing / POS Software",
      "Marketing Starter Kit",
      "Corporate Materials",
    ],
  },
];

export default function Services() {
  return (
    <section id="what-we-offer" className="py-20 bg-black text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What We <span className="text-orange-400">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to transform your business idea into a successful venture
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 border ${
                service.special
                  ? "border-orange-500/50 hover:border-orange-500"
                  : "border-gray-800 hover:border-orange-500/50"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
