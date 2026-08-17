import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight, Activity, Shield, Database, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen bg-synthrova-black text-synthrova-white overflow-hidden flex flex-col justify-center">
        {/* Abstract Data Visualization Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-synthrova-black" />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-synthrova-cyan font-mono text-sm tracking-widest uppercase mb-6 flex items-center">
              <span className="w-2 h-2 bg-synthrova-cyan rounded-full mr-3 animate-pulse"></span>
              Systems Intelligence
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-[1.1] mb-8">
              Technology for the systems that matter.
            </h1>
            <p className="text-lg md:text-xl text-synthrova-grey max-w-2xl font-light text-pretty mb-12 leading-relaxed">
              Synthrova builds infrastructure, intelligence and mission-critical technology across regulated industries and emerging strategic domains.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/platform"
                className="bg-synthrova-white text-synthrova-black px-8 py-4 rounded-full font-medium hover:bg-synthrova-grey transition-colors flex items-center group"
              >
                Explore E-Ledger
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/technology"
                className="text-synthrova-white px-8 py-4 rounded-full font-medium border border-synthrova-white/20 hover:bg-synthrova-white/10 transition-colors"
              >
                Our Architecture
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Architecture / Platform Hierarchy Section */}
      <section className="py-32 bg-synthrova-offwhite text-synthrova-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
                A Unified Foundation for Complex Domains
              </h2>
              <p className="text-lg text-synthrova-darkgrey/80 mb-8 font-light leading-relaxed">
                We operate as a deep-technology systems company. Our foundation enables us to deploy robust, secure, and intelligent platforms across disparate regulated environments.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Current Platform: E-Ledger", desc: "Production-grade infrastructure for pharmaceutical supply chains and regulated commerce." },
                  { title: "Emerging: Artificial Intelligence", desc: "Adaptive intelligence models for systemic optimization and anomaly detection." },
                  { title: "Emerging: Energy & Defence", desc: "Long-term R&D for mission-critical strategic sectors." }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    key={i} 
                    className="flex items-start border-l border-synthrova-black/20 pl-6 relative before:absolute before:left-[-1px] before:top-0 before:h-0 hover:before:h-full before:w-[2px] before:bg-synthrova-black before:transition-all before:duration-500"
                  >
                    <div>
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-synthrova-darkgrey/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract Architecture Diagram */}
              <div className="aspect-square bg-synthrova-white border border-synthrova-black/10 p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-synthrova-grey rounded-full mix-blend-multiply filter blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-synthrova-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                
                <div className="z-10">
                  <div className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/50 mb-2">Layer 03</div>
                  <div className="h-16 border border-synthrova-black/20 flex items-center justify-center font-medium bg-synthrova-offwhite/50 backdrop-blur">
                    Emerging Programs (AI, Energy)
                  </div>
                </div>
                
                <div className="z-10 flex flex-col items-center">
                  <div className="w-px h-8 bg-synthrova-black/20"></div>
                  <ChevronRight className="w-4 h-4 text-synthrova-black/40 rotate-90" />
                </div>
                
                <div className="z-10">
                  <div className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/50 mb-2">Layer 02</div>
                  <div className="h-20 border border-synthrova-black/40 flex items-center justify-center font-medium bg-synthrova-white shadow-sm">
                    Current Platform: E-Ledger
                  </div>
                </div>
                
                <div className="z-10 flex flex-col items-center">
                  <div className="w-px h-8 bg-synthrova-black/20"></div>
                  <ChevronRight className="w-4 h-4 text-synthrova-black/40 rotate-90" />
                </div>
                
                <div className="z-10">
                  <div className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/50 mb-2">Layer 01</div>
                  <div className="h-24 border border-synthrova-black flex items-center justify-center font-medium bg-synthrova-black text-synthrova-white shadow-xl">
                    Synthrova Core Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Platform Showcase (Dark) */}
      <section className="py-32 bg-synthrova-black text-synthrova-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                E-Ledger Platform
              </h2>
              <p className="text-synthrova-grey font-light text-lg">
                Our flagship production platform securing pharmaceutical supply chains and regulated commerce through verifiable, immutable infrastructure.
              </p>
            </div>
            <Link to="/platform" className="mt-8 md:mt-0 flex items-center text-synthrova-cyan hover:text-synthrova-white transition-colors">
              Read Technical Documentation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "Immutable Provenance", desc: "Cryptographically verified supply chain tracking from origin to destination." },
              { icon: Activity, title: "Real-time Telemetry", desc: "Continuous monitoring of regulated goods through complex global networks." },
              { icon: Shield, title: "Compliance Automation", desc: "Algorithmic adherence to international regulatory frameworks and auditing standards." }
            ].map((feature, i) => (
              <div key={i} className="border border-synthrova-white/10 p-8 hover:bg-synthrova-white/5 transition-colors group">
                <feature.icon className="w-8 h-8 text-synthrova-cyan mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-synthrova-grey/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-synthrova-white text-synthrova-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Regulated Industries
            </h2>
            <p className="text-synthrova-darkgrey/70 font-light text-lg">
              We deploy systems where the cost of failure is absolute. Our infrastructure supports domains requiring rigorous oversight, exact precision, and verifiable truth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              "Pharmaceuticals", "Government & Regulation", "Excise & Controlled Goods",
              "FMCG", "Agriculture", "Other Regulated Industries"
            ].map((industry, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-px w-full bg-synthrova-black/10 mb-6 group-hover:bg-synthrova-black transition-colors duration-500"></div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">{industry}</h3>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Programs CTA */}
      <section className="py-24 bg-synthrova-darkgrey text-synthrova-white border-y border-synthrova-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4 text-synthrova-cyan">
              <Cpu className="w-5 h-5" />
              <span className="font-mono text-sm tracking-widest uppercase">Research & Development</span>
            </div>
            <h2 className="text-3xl font-light mb-4">Beyond the current horizon.</h2>
            <p className="text-synthrova-grey/80 text-pretty font-light">
              While E-Ledger secures today's supply chains, our engineering teams are developing the next generation of AI, Energy, and Defence technologies.
            </p>
          </div>
          <Link to="/programs" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-grey transition-colors whitespace-nowrap flex-shrink-0">
            View Emerging Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
