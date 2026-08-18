import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEO } from "../components/SEO";

function HeroVisualization() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const fragments = ["ERP", "WMS", "TMS", "Government systems", "Energy systems", "Industrial systems", "AI systems", "Defence systems"];
  const branches = ["E-Ledger", "AI", "Energy", "Defence", "Future Systems"];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden border border-synthrova-white/10 bg-synthrova-black mt-12">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" className="absolute inset-0 flex items-center justify-center p-8">
            <div className="flex flex-wrap gap-4 justify-center max-w-3xl">
              {fragments.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-6 py-3 border border-synthrova-white/10 text-synthrova-white/60 text-sm font-mono bg-synthrova-white/5 backdrop-blur-sm"
                >
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="step1" className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
               <motion.div className="absolute top-1/2 left-0 right-0 h-px bg-synthrova-blue/30" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
               <motion.div className="absolute left-1/2 top-0 bottom-0 w-px bg-synthrova-blue/30" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
               <motion.div className="absolute top-1/2 left-1/2 w-3 h-3 bg-synthrova-blue rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,188,212,0.5)]" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} />
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="step2" className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
             <div className="text-4xl md:text-6xl font-light tracking-[0.25em] text-synthrova-white relative">
                SYNTHROVA
                <motion.div className="absolute -inset-8 bg-synthrova-blue/10 filter blur-3xl rounded-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }} />
             </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="step3" className="absolute inset-0 flex flex-col items-center justify-center gap-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <div className="text-xl md:text-2xl font-light tracking-[0.2em] text-synthrova-white/40">
                SYNTHROVA
             </div>
             <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
                {branches.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-px h-12 bg-gradient-to-b from-synthrova-white/0 via-synthrova-blue/50 to-synthrova-blue" />
                    <span className="text-synthrova-white font-light tracking-wide text-sm md:text-base">{b}</span>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ModelAnimation() {
  const items = ["DATA", "INFRASTRUCTURE", "INTELLIGENCE", "AUTOMATION", "DECISION", "REAL-WORLD IMPACT"];
  return (
    <div className="flex flex-col items-center py-24">
      {items.map((item, i) => (
        <div key={item} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-5xl font-light tracking-[0.15em] text-synthrova-black"
          >
            {item}
          </motion.div>
          {i < items.length - 1 && (
            <motion.div 
              initial={{ height: 0 }} 
              whileInView={{ height: "60px" }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-px bg-synthrova-black/20 my-6" 
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <div className="w-full bg-synthrova-white selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Synthrova Technologies | Technology for Critical Systems"
        description="Synthrova builds intelligent infrastructure for critical systems and regulated industries."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": ["Organization", "WebSite"],
          "name": "Synthrova Technologies",
          "legalName": "Synthrova Technologies Private Limited",
          "url": "https://synthrova.com",
          "description": "Synthrova builds intelligent infrastructure for critical systems and regulated industries.",
          "sameAs": [
            "https://www.linkedin.com/company/synthrova/",
            "https://x.com/Synthrova",
            "https://www.instagram.com/synthrova?igsh=MTVheXA5NmRydWdjcw=="
          ]
        }}
      />
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 max-w-4xl text-balance"
          >
            Technology for the systems that matter.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-3xl leading-relaxed mb-12 text-balance"
          >
            Synthrova builds infrastructure, intelligence and mission-critical technology across regulated industries and emerging strategic domains.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <Link to="/company" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group">
              Explore Synthrova
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/eledger" className="px-8 py-4 bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 flex items-center group">
              Explore E-Ledger
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE THESIS */}
      <section className="py-32 bg-synthrova-white text-synthrova-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-balance">
              The systems that power the world are becoming more complex.
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-synthrova-blue mb-10">
              They need better infrastructure.
            </h3>
            <p className="text-xl md:text-2xl font-light text-synthrova-black/70 leading-relaxed text-balance">
              Modern organizations increasingly depend on interconnected data, software, physical infrastructure and decision systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT SYNTHROVA BUILDS */}
      <section className="py-24 bg-synthrova-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Infrastructure", desc: "Technology foundations for complex systems." },
              { title: "Interoperability", desc: "Connecting systems that were never designed to work together." },
              { title: "Intelligence", desc: "Turning complex data into actionable understanding." },
              { title: "Automation", desc: "Moving from information to execution." },
              { title: "Trust", desc: "Creating systems where provenance, security and accountability matter." }
            ].map((cap, i) => (
              <motion.div 
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-synthrova-white p-10 border border-synthrova-lightgrey/5 hover:border-synthrova-blue/30 transition-colors group h-full flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-2xl font-light mb-4">{cap.title}</h4>
                  <p className="text-synthrova-black/60 text-lg font-light leading-relaxed">{cap.desc}</p>
                </div>
                <div className="w-8 h-px bg-synthrova-black/20 mt-12 group-hover:w-full group-hover:bg-synthrova-blue transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CURRENT PLATFORM */}
      <section className="py-32 bg-synthrova-black text-synthrova-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-synthrova-blue/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 justify-between">
            <div className="max-w-2xl lg:w-1/2">
              <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase">Current Platform</div>
              <h2 className="text-5xl md:text-7xl font-light mb-6">E-Ledger</h2>
              <h3 className="text-2xl md:text-3xl font-light text-synthrova-white/80 mb-8">Trusted infrastructure for regulated commerce.</h3>
              <p className="text-lg font-light text-synthrova-white/60 leading-relaxed mb-12">
                E-Ledger is a B2B RegTech platform that creates a trusted transaction, compliance reconciliation, and interoperability layer for regulated supply chains.
              </p>
              
              <div className="mb-12">
                <div className="font-mono text-xs tracking-widest text-synthrova-white/40 mb-4 uppercase">Initial Focus</div>
                <div className="text-xl font-light">Pharmaceuticals</div>
              </div>

              <Link to="/eledger" className="inline-flex items-center text-lg text-synthrova-blue hover:text-synthrova-white transition-colors group">
                Explore E-Ledger
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md border border-synthrova-white/10 p-8 bg-synthrova-white/5 backdrop-blur-sm">
                <div className="text-center font-mono text-xs text-synthrova-white/50 mb-8 uppercase tracking-widest">E-Ledger Network</div>
                <div className="flex flex-col gap-3">
                  {["Manufacturer", "Distributor", "Warehouse", "Hospital", "Auditor", "Regulator"].map((entity, i) => (
                    <div key={entity} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-synthrova-blue"></div>
                      <div className="h-px flex-grow bg-synthrova-white/10 relative">
                        <div className="absolute inset-y-0 left-0 bg-synthrova-blue/50 w-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      </div>
                      <div className="text-sm font-light text-synthrova-white/80 w-32">{entity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EMERGING PROGRAMS */}
      <section className="py-32 bg-synthrova-white text-synthrova-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">Building what comes next.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Artificial Intelligence", desc: "Intelligence for complex systems.", status: "Emerging Program" },
              { title: "Energy", desc: "Technology for a more intelligent energy system.", status: "Research & Development" },
              { title: "Defence & Security", desc: "Technology for mission-critical environments.", status: "Emerging Program" },
              { title: "Future Systems", desc: "Exploring what comes next.", status: "Exploration" }
            ].map((prog, i) => (
              <motion.div 
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group border border-synthrova-lightgrey/10 p-10 hover:bg-synthrova-offwhite transition-colors"
              >
                <div className="font-mono text-xs tracking-widest text-synthrova-black/40 mb-8 uppercase">{prog.status}</div>
                <h3 className="text-3xl font-light mb-4 group-hover:text-synthrova-blue transition-colors">{prog.title}</h3>
                <p className="text-lg font-light text-synthrova-black/70">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES */}
      <section className="py-24 bg-synthrova-offwhite border-y border-synthrova-lightgrey/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light mb-16">Technology across critical systems.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              "Pharmaceuticals", "Government & Regulation", "Excise & Controlled Goods",
              "FMCG", "Agriculture", "Future regulated sectors"
            ].map((industry, i) => (
              <div key={industry} className="border-t border-synthrova-lightgrey/20 pt-6">
                <h3 className="text-xl font-light">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: THE SYNTHROVA MODEL */}
      <section className="py-32 bg-synthrova-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center font-mono text-sm tracking-widest text-synthrova-black/40 mb-12 uppercase">The Synthrova Model</div>
          <ModelAnimation />
        </div>
      </section>

      {/* SECTION 8: VISION */}
      <section className="py-40 bg-synthrova-black text-synthrova-white text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-balance">
            Different systems. Different missions. One ambition.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-synthrova-blue">
            Build technology that matters.
          </p>
        </div>
      </section>

      {/* SECTION 9: COMPANY */}
      <section className="py-32 bg-synthrova-white text-synthrova-black border-b border-synthrova-lightgrey/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-light mb-8">Synthrova Technologies</h2>
            <p className="text-xl font-light text-synthrova-black/70 leading-relaxed mb-12">
              We are building deep technology across regulated industries and emerging strategic domains. We deploy intelligent enterprise infrastructure where precision, security, and interoperability are non-negotiable.
            </p>
            <Link to="/company" className="inline-flex items-center text-lg font-medium hover:text-synthrova-blue transition-colors group">
              About Synthrova
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-32 bg-synthrova-black text-synthrova-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Build the next system with us.</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group">
              Work With Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/platform" className="px-8 py-4 bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 flex items-center group">
              Explore the Platform
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
