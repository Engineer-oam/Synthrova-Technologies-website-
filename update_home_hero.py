import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# I will replace the Hero section.
# It starts with: {/* SECTION 1: HERO */}
# and ends right before: {/* SECTION 2: THE TECHNOLOGY PROBLEM */}

pattern = re.compile(r'\{\/\* SECTION 1: HERO \*\/\}.*?\{\/\* SECTION 2: THE TECHNOLOGY PROBLEM \*\/\}', re.DOTALL)

new_hero = """{/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-synthrova-black text-synthrova-white flex flex-col justify-center overflow-hidden">
        
        {/* Subtle Architectural Grid & Signals */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#E7E7E4" strokeWidth="0.5" strokeOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated Blue Signal Lines */}
            <g stroke="#168FEA" strokeWidth="1" opacity="0.6">
              <line x1="0" y1="200" x2="100%" y2="200" strokeDasharray="100 1000" strokeDashoffset="0">
                <animate attributeName="stroke-dashoffset" values="1000; -100" dur="15s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="0" x2="300" y2="100%" strokeDasharray="150 1200" strokeDashoffset="0">
                <animate attributeName="stroke-dashoffset" values="-200; 1200" dur="20s" repeatCount="indefinite" />
              </line>
              <line x1="0" y1="600" x2="100%" y2="600" strokeDasharray="200 1500" strokeDashoffset="0">
                <animate attributeName="stroke-dashoffset" values="1500; -200" dur="25s" repeatCount="indefinite" />
              </line>
            </g>

            {/* Glowing Nodes */}
            <circle cx="300" cy="200" r="3" fill="#168FEA" opacity="0.8">
              <animate attributeName="opacity" values="0.2; 0.8; 0.2" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="600" r="2" fill="#168FEA" opacity="0.5">
              <animate attributeName="opacity" values="0.1; 0.6; 0.1" dur="12s" repeatCount="indefinite" />
            </circle>
          </svg>
          {/* Subtle Ambient Light */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,143,234,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(22,143,234,0.03)_0%,transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tight mb-8 leading-[1.1] text-balance">
              Technology for the systems that matter.
            </h1>
            <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed mb-12">
              We are an engineering and technology company building trusted infrastructure for regulated industries and emerging strategic domains.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/company" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group">
                Explore Synthrova
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/eledger" className="px-8 py-4 bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 flex items-center group">
                Explore E-Ledger
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE TECHNOLOGY PROBLEM */}"""

content = pattern.sub(new_hero, content)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

