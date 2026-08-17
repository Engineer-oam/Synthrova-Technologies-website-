import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HeroVisualization() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const systems = ["ERP", "WMS", "TMS", "Gov", "Fin", "IoT"];

  return (
    <div className="relative w-full h-[400px] border border-synthrova-white/10 bg-synthrova-black mt-12 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" className="absolute inset-0 p-8 flex flex-wrap gap-8 items-center justify-center">
            {systems.map((sys, i) => (
              <motion.div
                key={sys}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-16 h-16 md:w-24 md:h-24 border border-synthrova-white/20 flex items-center justify-center text-synthrova-white/40 font-mono text-sm"
              >
                {sys}
              </motion.div>
            ))}
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="step1" className="absolute inset-0 p-8 flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-full">
              {systems.map((sys, i) => {
                const angle = (i * (360 / systems.length)) * (Math.PI / 180);
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={sys}
                    initial={{ opacity: 0, x: x * 1.5, y: y * 1.5 }}
                    animate={{ opacity: 1, x, y }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -mt-8 -ml-8 w-16 h-16 border border-synthrova-blue/30 flex items-center justify-center text-synthrova-blue text-xs font-mono bg-synthrova-blue/5 backdrop-blur-sm"
                  >
                    {sys}
                  </motion.div>
                );
              })}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full bg-synthrova-blue shadow-[0_0_30px_rgba(0,188,212,0.6)]"
              />
              {/* Lines connecting to center */}
              {systems.map((sys, i) => {
                const angle = (i * (360 / systems.length)) * (Math.PI / 180);
                return (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute top-1/2 left-1/2 h-px bg-synthrova-blue/20 origin-left"
                    style={{ rotate: `${i * (360 / systems.length)}deg` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 100 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  />
                )
              })}
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="step2" className="absolute inset-0 flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, width: "0%" }}
               animate={{ opacity: 1, width: "80%" }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1 }}
               className="h-16 md:h-24 border border-synthrova-blue/40 bg-synthrova-blue/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(0,188,212,0.15)]"
             >
                <div className="font-light tracking-[0.3em] text-synthrova-white md:text-xl">SYNTHROVA PLATFORM</div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InteractiveArchitecture() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: "01",
      title: "CONNECT",
      desc: "Ingestion and mapping of diverse operational data sources.",
      items: ["ERP", "WMS", "TMS", "Financial systems", "Quality systems", "Regulatory systems", "Industrial systems"]
    },
    {
      id: "02",
      title: "RECORD",
      desc: "Trusted transaction and event records.",
      items: ["Immutable state", "Event sequencing", "Cryptographic hashes", "Distributed ledger"]
    },
    {
      id: "03",
      title: "VERIFY",
      desc: "Validation of truth and authorized access.",
      items: ["Identity", "Permissions", "Provenance", "Auditability"]
    },
    {
      id: "04",
      title: "INTELLIGENCE",
      desc: "Synthesizing meaning from verified data.",
      items: ["Analytics", "AI", "Decision support", "Pattern recognition"]
    },
    {
      id: "05",
      title: "ACT",
      desc: "Translating intelligence into physical or software execution.",
      items: ["Automation", "Workflow", "Operational decisions"]
    }
  ];

  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
      {layers.map((layer, index) => (
        <div key={layer.id} className="flex flex-col items-center">
          <div 
            onClick={() => setActiveLayer(activeLayer === index ? null : index)}
            className={`w-full border p-6 md:p-8 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between group ${activeLayer === index ? "bg-synthrova-blue/5 border-synthrova-blue/40" : "bg-synthrova-white border-synthrova-lightgrey/10 hover:border-synthrova-lightgrey/30"}`}
          >
            <div className="flex items-center gap-6">
              <span className={`font-mono text-xl md:text-2xl transition-colors ${activeLayer === index ? "text-synthrova-blue" : "text-synthrova-black/40"}`}>{layer.id}</span>
              <h3 className={`text-2xl md:text-3xl font-light tracking-wide transition-colors ${activeLayer === index ? "text-synthrova-black" : "text-synthrova-black"}`}>{layer.title}</h3>
            </div>
            <div className={`mt-4 md:mt-0 md:ml-8 font-light text-synthrova-black/70 md:text-right max-w-sm transition-opacity ${activeLayer === index ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
              {layer.desc}
            </div>
          </div>
          
          <AnimatePresence>
            {activeLayer === index && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden w-full border-x border-b border-synthrova-blue/20 bg-synthrova-blue/5"
              >
                <div className="p-6 md:p-8 flex flex-wrap gap-4">
                  {layer.items.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-2 bg-synthrova-white border border-synthrova-blue/20 text-synthrova-black text-sm font-medium tracking-wide shadow-sm"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {index < layers.length - 1 && (
            <div className="h-10 md:h-16 w-px bg-synthrova-black/20 my-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Platform() {
  return (
    <div className="w-full bg-synthrova-white selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Synthrova Platform | Intelligent Technology Infrastructure"
        description="Explore Synthrova's technology platforms across data infrastructure, artificial intelligence, and automated decision-making for regulated industries."
        canonical="/platform"
      />
      
      {/* HERO */}
      <section className="relative pt-32 pb-24 bg-synthrova-black text-synthrova-white overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 max-w-4xl text-balance"
          >
            The infrastructure layer between systems, organizations and decisions.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-3xl leading-relaxed mb-12 text-balance"
          >
            Synthrova connects complex systems and creates the technological foundation for trusted intelligence and action.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </section>

      {/* PLATFORM ARCHITECTURE */}
      <section className="py-32 bg-synthrova-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Platform Architecture</h2>
          </div>
          <InteractiveArchitecture />
        </div>
      </section>

      {/* PLATFORM PRINCIPLES */}
      <section className="py-32 bg-synthrova-white border-y border-synthrova-lightgrey/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-12 md:gap-16 max-w-4xl">
            {[
              "Interoperable by design.",
              "Permissioned where trust matters.",
              "Auditable by architecture.",
              "Intelligent by context.",
              "Built for real-world systems."
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-12 h-px bg-synthrova-black/20 group-hover:bg-synthrova-blue group-hover:w-24 transition-all duration-500 hidden md:block"></div>
                <h3 className="text-3xl md:text-5xl font-light tracking-tight text-synthrova-black">{principle}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT PLATFORM & EMERGING PROGRAMS */}
      <section className="py-32 bg-synthrova-black text-synthrova-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Current Platform */}
            <div>
              <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase">Current Platform</div>
              <h2 className="text-5xl md:text-7xl font-light mb-8">E-Ledger</h2>
              <p className="text-xl font-light text-synthrova-white/70 leading-relaxed mb-12">
                E-Ledger is the first major implementation of the Synthrova platform, initially serving regulated pharmaceutical supply chains.
              </p>
              <Link to="/eledger" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-lightgrey transition-colors inline-flex items-center group">
                Explore E-Ledger
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Emerging Programs */}
            <div>
              <div className="font-mono text-sm tracking-widest text-synthrova-white/50 mb-8 uppercase">Emerging Programs</div>
              <p className="text-lg font-light text-synthrova-white/60 mb-12 border-l border-synthrova-white/20 pl-6">
                These represent the broader Synthrova technology roadmap, pushing the boundaries of what our core infrastructure can support.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { title: "Artificial Intelligence", status: "Emerging Program" },
                  { title: "Energy", status: "Research & Development" },
                  { title: "Defence & Security", status: "Emerging Program" },
                  { title: "Future Systems", status: "Exploration" }
                ].map((prog) => (
                  <div key={prog.title} className="border border-synthrova-white/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-synthrova-white/30 transition-colors bg-synthrova-white/5">
                    <h4 className="text-xl font-light">{prog.title}</h4>
                    <span className="font-mono text-xs tracking-widest text-synthrova-blue uppercase">{prog.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING SYSTEMS */}
      <section className="py-32 bg-synthrova-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-balance">
              Organizations should not have to start over.
            </h2>
            <p className="text-xl font-light text-synthrova-black/70 leading-relaxed text-balance">
              Synthrova is designed to connect and augment existing infrastructure rather than requiring wholesale replacement. We integrate with your reality.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
             <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
               {["Existing enterprise systems", "Existing databases", "Existing workflows", "Existing infrastructure"].map((sys, i) => (
                 <div key={i} className="px-6 py-4 bg-synthrova-white border border-synthrova-lightgrey/10 font-medium text-synthrova-black/60 shadow-sm">
                   {sys}
                 </div>
               ))}
             </div>
             
             <div className="h-24 w-px bg-synthrova-black/30 my-8 relative">
                <motion.div 
                  className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-synthrova-blue to-transparent"
                  animate={{ y: [0, 48, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
             </div>
             
             <div className="px-12 py-6 bg-synthrova-black text-synthrova-white text-2xl font-light tracking-[0.2em] shadow-xl">
                SYNTHROVA
             </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-40 bg-synthrova-black text-synthrova-white text-center border-t border-synthrova-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12 text-balance">
            Different technologies. One underlying philosophy.
          </h2>
          <Link to="/technology" className="px-8 py-4 bg-transparent border border-synthrova-white/20 text-synthrova-white font-medium hover:bg-synthrova-white/5 transition-colors inline-flex items-center group">
            Explore Technology
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
