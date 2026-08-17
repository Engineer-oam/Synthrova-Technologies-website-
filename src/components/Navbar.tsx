import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Platform", path: "/platform" },
  { name: "Industries", path: "/industries" },
  { name: "Technology", path: "/technology" },
  { name: "Programs", path: "/programs" },
  { name: "Insights", path: "/insights" },
  { name: "Company", path: "/company" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isDarkBg = location.pathname === "/" && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-synthrova-white/90 backdrop-blur-md border-b border-synthrova-grey text-synthrova-black"
            : isDarkBg
            ? "bg-transparent text-synthrova-white"
            : "bg-transparent text-synthrova-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className={`transition-all duration-300 ${isDarkBg ? 'bg-white/90 p-1.5 rounded-sm' : ''}`}>
              <img src="https://drive.google.com/uc?export=view&id=1dJjbXPsCrYKbQIxkZUM3TsQqvdp_X27S" alt="Synthrova" className="h-6 md:h-8 object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/platform"
              className="text-sm font-medium hover:opacity-70 transition-opacity flex items-center group"
            >
              Explore E-Ledger
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/company#careers"
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                scrolled || !isDarkBg
                  ? "border-synthrova-black hover:bg-synthrova-black hover:text-synthrova-white"
                  : "border-synthrova-white hover:bg-synthrova-white hover:text-synthrova-black"
              }`}
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-synthrova-black text-synthrova-white flex flex-col"
          >
            <div className="flex-none px-6 h-20 flex items-center justify-between border-b border-synthrova-white/10">
              <Link to="/" className="flex items-center bg-white/90 p-1.5 rounded-sm w-fit">
                <img src="https://drive.google.com/uc?export=view&id=1dJjbXPsCrYKbQIxkZUM3TsQqvdp_X27S" alt="Synthrova" className="h-6 object-contain" />
              </Link>
              <button
                className="p-2 -mr-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-light tracking-tight hover:text-synthrova-cyan transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-12 mt-auto border-t border-synthrova-white/10 space-y-6 flex flex-col">
                <Link
                  to="/platform"
                  className="text-lg font-medium hover:text-synthrova-cyan transition-colors flex items-center"
                >
                  Explore E-Ledger
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/company#careers"
                  className="inline-block text-center text-lg font-medium px-6 py-3 rounded-full border border-synthrova-white hover:bg-synthrova-white hover:text-synthrova-black transition-colors"
                >
                  Work With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
