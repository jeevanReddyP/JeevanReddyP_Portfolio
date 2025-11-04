import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Resume from "../assets/PDF/Jeevan_Reddy_Resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-900/80 via-purple-800/80 to-indigo-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 tracking-wide">
          Portfolio
        </h1>
        <div className="hidden sm:flex space-x-8 text-lg text-white font-medium">
          {["Home", "About", "Projects", "Tech Stack", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={handleLinkClick}
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
          <a
            href={Resume}
            download="Jeevan_Reddy_Resume"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
        <button
          className="block sm:hidden text-yellow-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-indigo-950/90 backdrop-blur-md text-center py-4 space-y-4">
          {["Home", "About", "Projects", "Tech Stack", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={handleLinkClick}
              className="block text-white hover:text-yellow-300 transition"
            >
              {item}
            </a>
          ))}
          <a
            href={Resume}
            download="Jeevan_Reddy_Resume"
            className="block text-white hover:text-yellow-300 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
