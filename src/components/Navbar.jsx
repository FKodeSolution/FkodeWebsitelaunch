import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="text-2xl font-extrabold text-white cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-orange-400">FK</span>ode Solution
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("what-we-offer")}
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              What We Offer
            </button>
            <button
              onClick={() => scrollToSection("why-choose-fkode")}
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Why Choose FKode
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("what-we-offer")}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2"
            >
              What We Offer
            </button>
            <button
              onClick={() => scrollToSection("why-choose-fkode")}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2"
            >
              Why Choose FKode
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

