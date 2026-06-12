export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918248798337", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-black text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let's Build Your Business <span className="text-orange-400">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
            Get a free 30-minute Business Planning Call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <div className="text-orange-400 text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>⭐</span> Location
                </div>
                <p className="text-gray-300">
                  NO:14/31, Perumal Koil Street,<br />
                  Near Panchali Amman Temple,<br />
                  Arumbakkam, Chennai – 600106
                </p>
              </div>
              <div>
                <div className="text-orange-400 text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>⭐</span> WhatsApp
                </div>
                <a
                  href="https://wa.me/918248798337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  +91 82487 98337
                </a>
              </div>
              <div>
                <div className="text-orange-400 text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>⭐</span> Website
                </div>
                <a
                  href="https://www.fkodesolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  www.fkodesolution.com
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => {
                  const element = document.getElementById("contact-form");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                Get a Quote
              </button>
              <button
                onClick={openWhatsApp}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
              >
                <option value="">Select a service</option>
                <option value="registration">Business Registration</option>
                <option value="branding">Branding & Identity</option>
                <option value="software">Software Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="gifting">Corporate Gifting</option>
                <option value="scaling">Business Scaling</option>
                <option value="all">All Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                placeholder="Tell us about your business idea..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
            >
              Send Message
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}

