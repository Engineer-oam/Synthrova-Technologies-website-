import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, Layers, BrainCircuit, Zap, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a1a1a_0%,transparent_50%)]"></div>
      
      {/* Cinematic elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-synthrova-blue/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            Technology Roadmap
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance leading-tight">
            Building what comes next.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed text-balance">
            Our technology roadmap extends beyond today's platforms into systems that can shape industry, infrastructure and strategic capability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const programs = [
  {
    id: "eledger",
    num: "01",
    title: "E-Ledger",
    status: "Current Platform",
    statusColor: "bg-synthrova-blue text-synthrova-black",
    headline: "Trusted infrastructure for regulated commerce.",
    desc: "E-Ledger creates a trusted transaction, compliance and interoperability layer for regulated supply chains, beginning with pharmaceuticals.",
    icon: Layers,
    link: "/eledger",
    cta: "Explore E-Ledger"
  },
  {
    id: "ai",
    num: "02",
    title: "Artificial Intelligence",
    status: "Emerging Program",
    statusColor: "border border-synthrova-lightgrey text-synthrova-black",
    headline: "Intelligence for complex systems.",
    areas: ["Enterprise AI", "Decision intelligence", "Autonomous workflows", "Domain-specific AI", "Industrial intelligence"],
    icon: BrainCircuit,
    link: "/contact",
    cta: "Explore AI",
    disclaimer: "Note: This represents strategic capability development. Synthrova does not claim commercial deployment of these AI modules at this time."
  },
  {
    id: "energy",
    num: "03",
    title: "Energy",
    status: "Research & Development",
    statusColor: "border border-synthrova-lightgrey/30 text-synthrova-black/60",
    headline: "Technology for a more intelligent energy system.",
    areas: ["Energy monitoring", "Optimization", "Industrial energy systems", "Distributed energy", "Grid intelligence"],
    icon: Zap,
    link: "/contact",
    cta: "Explore Energy",
    disclaimer: "Note: This is an R&D focus area. We do not claim deployed infrastructure in energy grids."
  },
  {
    id: "defence",
    num: "04",
    title: "Defence & Security",
    status: "Emerging Program",
    statusColor: "border border-synthrova-lightgrey text-synthrova-black",
    headline: "Technology for mission-critical environments.",
    areas: ["Autonomous systems", "Secure infrastructure", "Intelligence systems", "Situational awareness", "Mission systems"],
    icon: Shield,
    link: "/contact",
    cta: "Explore Defence",
    disclaimer: "Note: Exploring architectures for secure environments. We do not claim defence contracts, government adoption, or operational deployments."
  },
  {
    id: "future",
    num: "05",
    title: "Future Systems",
    status: "Exploration",
    statusColor: "bg-synthrova-black text-synthrova-white",
    headline: "The next system has not been named yet.",
    desc: "Synthrova continuously explores emerging technologies where computation, intelligence, physical infrastructure and real-world systems intersect.",
    icon: Sparkles,
    abstractVisual: true
  }
];

function RoadmapSection() {
  return (
    <div className="w-full">
      
      {programs.map((prog, i) => {
        const isDark = prog.id === 'ai' || prog.id === 'defence' || prog.id === 'future';
        return (
          <section key={prog.id} className={`py-32 ${isDark ? 'bg-synthrova-black text-synthrova-white' : 'bg-synthrova-offwhite text-synthrova-black'} border-b ${isDark ? 'border-synthrova-white/10' : 'border-synthrova-lightgrey/30'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="lg:w-1/3 flex flex-col items-start z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-16 h-16 border flex items-center justify-center shrink-0 ${isDark ? 'bg-synthrova-black border-synthrova-white/20' : 'bg-synthrova-white border-synthrova-lightgrey/30'}`}>
                      <span className={`font-mono text-xl ${isDark ? 'text-synthrova-white/40' : 'text-synthrova-black/40'}`}>{prog.num}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-light tracking-tight">{prog.title}</h2>
                    </div>
                  </div>
                  <div className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1 mb-6 border ${isDark ? 'border-synthrova-white/30 text-synthrova-white/70' : 'border-synthrova-lightgrey text-synthrova-black/70'}`}>
                    {prog.status}
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className={`p-10 lg:p-16 border ${isDark ? 'bg-synthrova-black border-synthrova-white/10' : 'bg-synthrova-white border-synthrova-lightgrey/30'} ${prog.abstractVisual || prog.id === 'ai' || prog.id === 'energy' ? 'relative overflow-hidden' : ''}`}>
                    
                    {/* Visualizations based on ID */}
                    {prog.id === 'ai' && (
                      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                         {/* AI signals */}
                         <div className="absolute top-1/4 left-0 right-0 h-px bg-synthrova-white/20">
                            <div className="w-16 h-full bg-synthrova-blue animate-[horizontalFlow_8s_linear_infinite]" />
                         </div>
                         <div className="absolute top-3/4 left-0 right-0 h-px bg-synthrova-white/20">
                            <div className="w-24 h-full bg-synthrova-blue animate-[horizontalFlow_12s_linear_infinite_reverse]" />
                         </div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-synthrova-blue/30 rounded-full animate-pulse" />
                      </div>
                    )}
                    
                    {prog.id === 'energy' && (
                      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                         {/* Energy grid */}
                         <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(10,10,10,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                         <div className="absolute top-0 bottom-0 left-1/3 w-px bg-synthrova-blue/50">
                            <div className="h-20 w-full bg-synthrova-blue animate-[verticalFlow_10s_linear_infinite]" />
                         </div>
                      </div>
                    )}

                    {prog.id === 'defence' && (
                       <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
                          <div className="w-[120%] h-[120%] border border-synthrova-white rounded-full" />
                          <div className="absolute w-[80%] h-[80%] border border-synthrova-white rounded-full" />
                          <div className="absolute w-full h-px bg-synthrova-white rotate-45" />
                          <div className="absolute w-full h-px bg-synthrova-white -rotate-45" />
                       </div>
                    )}

                    <div className="relative z-10">
                      <prog.icon className="w-8 h-8 text-synthrova-blue mb-8" />
                      <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
                        {prog.headline}
                      </h3>
                      
                      {prog.desc && (
                        <p className={`text-xl font-light leading-relaxed mb-8 ${isDark ? 'text-synthrova-white/70' : 'text-synthrova-black/70'}`}>
                          {prog.desc}
                        </p>
                      )}
                      
                      {prog.areas && (
                        <div className="mb-10">
                          <div className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-synthrova-white/50' : 'text-synthrova-black/60'}`}>Potential Areas</div>
                          <div className="flex flex-wrap gap-2">
                            {prog.areas.map(area => (
                              <span key={area} className={`px-3 py-1.5 border text-sm font-medium ${isDark ? 'border-synthrova-white/20 text-synthrova-white bg-synthrova-white/5' : 'border-synthrova-lightgrey/50 text-synthrova-black bg-synthrova-offwhite/50'}`}>
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {prog.disclaimer && (
                        <div className={`mb-10 p-4 border-l-2 text-sm ${isDark ? 'border-synthrova-white/20 bg-synthrova-white/5 text-synthrova-white/60' : 'border-synthrova-lightgrey/50 bg-synthrova-offwhite/50 text-synthrova-black/60'}`}>
                          {prog.disclaimer}
                        </div>
                      )}
                      
                      {prog.link && prog.cta && (
                        <Link to={prog.link} className={`inline-flex items-center text-sm font-medium hover:text-synthrova-blue transition-colors group ${isDark ? 'text-synthrova-white' : 'text-synthrova-black'}`}>
                          {prog.cta}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  )
}

function FinalSection() {
  return (
    <section className="py-40 bg-synthrova-black text-synthrova-white text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-balance">
          The roadmap is larger than any single product.
        </h2>
        <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-3xl mx-auto leading-relaxed text-balance mb-16">
          We start with real problems, build from first principles and expand where technology can create meaningful system-level impact.
        </p>
        <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-synthrova-white text-synthrova-black font-medium text-lg hover:bg-synthrova-lightgrey transition-colors group">
          Contact our team
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export function Programs() {
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Programs | Synthrova Technologies"
        description="Explore Synthrova Technologies' emerging programs in Artificial Intelligence, Energy systems, and Defence & Security infrastructure."
        canonical="/programs"
      />
      
      <HeroSection />
      <RoadmapSection />
      <FinalSection />
    </div>
  );
}
