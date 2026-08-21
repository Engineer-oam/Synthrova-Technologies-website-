import { Link, useLocation } from "react-router-dom";
import { SynthrovaLogo } from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Platform", path: "/platform" },
  { name: "E-Ledger", path: "/eledger" },
  { name: "Industries", path: "/industries" },
  { name: "Technology", path: "/technology" },
  { name: "Programs", path: "/programs" },
  { name: "Insights", path: "/insights" },
  { name: "Company", path: "/company" },
  { name: "Leadership", path: "/leadership" },
  { name: "Careers", path: "/careers" },
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  
  const darkHeroRoutes = [
    "/leadership",
    "/",
    "/technology",
    "/platform",
    "/ecosystem",
    "/programs",
    "/careers",
    "/contact",
    "/leadership",
    "/industries/pharmaceuticals"
  ];
  const isDarkBg = darkHeroRoutes.includes(location.pathname) && !scrolled;


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-synthrova-lightgrey/20 text-synthrova-black"
            : isDarkBg
            ? "bg-transparent text-synthrova-white"
            : "bg-transparent text-synthrova-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center group shrink-0" aria-label="Synthrova Technologies">
            <SynthrovaLogo className="transition-opacity duration-300 group-hover:opacity-70" isDarkTheme={!scrolled && isDarkBg} />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            aria-label="Open Menu"
          >
            <span className="hidden md:block font-mono text-sm tracking-widest uppercase">Menu</span>
            <Menu className="w-6 h-6 md:w-5 md:h-5" />
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-synthrova-black text-synthrova-white flex flex-col overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex-none px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between w-full max-w-7xl mx-auto">
              <Link to="/" className="flex items-center group shrink-0" aria-label="Synthrova Technologies">
                <SynthrovaLogo className="transition-opacity duration-300 group-hover:opacity-70" isDarkTheme={true} />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 hover:text-synthrova-blue transition-colors"
                aria-label="Close Menu"
              >
                <span className="hidden md:block font-mono text-sm tracking-widest uppercase">Close</span>
                <X className="w-8 h-8 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Overlay Content */}
            <div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row gap-20 lg:gap-32">
              
              {/* LEFT COLUMN: Large Editorial Typography Links */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      className="text-5xl md:text-7xl lg:text-[5.5rem] leading-none font-light tracking-tight hover:text-synthrova-blue lg:hover:translate-x-4 transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT COLUMN: Featured Blocks */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-16">
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="font-mono text-[10px] tracking-widest text-synthrova-lightgrey/60 uppercase mb-4">Featured Platform</div>
                  <h3 className="text-3xl lg:text-4xl font-light mb-3">E-Ledger</h3>
                  <p className="text-synthrova-white/60 font-light mb-6 text-lg">Trusted infrastructure for regulated commerce.</p>
                  <Link to="/eledger" className="inline-flex items-center font-medium text-synthrova-blue hover:text-synthrova-white transition-colors group">
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="font-mono text-[10px] tracking-widest text-synthrova-lightgrey/60 uppercase mb-4">Featured Program</div>
                  <h3 className="text-3xl lg:text-4xl font-light mb-3">Artificial Intelligence</h3>
                  <p className="text-synthrova-white/60 font-light mb-6 text-lg">Intelligence for complex systems.</p>
                  <Link to="/programs" className="inline-flex items-center font-medium text-synthrova-blue hover:text-synthrova-white transition-colors group">
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="font-mono text-[10px] tracking-widest text-synthrova-lightgrey/60 uppercase mb-4">Latest Insight</div>
                  <h3 className="text-3xl lg:text-4xl font-light mb-4 text-balance leading-tight">
                    <Link to="/insights" className="hover:text-synthrova-blue transition-colors">
                      The Convergence of Cryptography and Physical Supply Chains
                    </Link>
                  </h3>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="pt-12 border-t border-synthrova-white/10"
                >
                  <Link to="/careers" className="inline-flex items-center text-3xl font-light hover:text-synthrova-blue transition-colors group">
                    Work With Synthrova
                    <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
