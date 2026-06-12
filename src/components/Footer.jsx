export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918248798337", "_blank");
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold mb-4">
              <span className="text-orange-400">FK</span>ode Solution
            </div>
            <p className="text-gray-400 text-sm">
              Your Complete Business Solution Partner.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Branding • Registration • Software • Marketing • Corporate Gifting
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("what-we-offer")}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  What We Offer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-choose-fkode")}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Why Choose FKode
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Branding & Design</li>
              <li>Business Registration</li>
              <li>Digital Marketing</li>
              <li>Software Development</li>
              <li>Corporate Gifting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Chennai, India</li>
              <li>
                <a
                  href="https://wa.me/918248798337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  +91 82487 98337
                </a>
              </li>
              <li>
                <a
                  href="https://www.fkodesolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  www.fkodesolution.com
                </a>
              </li>
            </ul>
            <button
              onClick={openWhatsApp}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-all"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} FKode Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

