import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, Shield, ShieldCheck, Database, Server, Network, Activity, Lock, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const ARCH_LAYERS = [
  { id: "identity", label: "IDENTITY", description: "Cryptographic authentication and strict least-privilege access control across the network perimeter.", icon: <Lock className="w-5 h-5" /> },
  { id: "data", label: "DATA", description: "Protection and controlled handling of information throughout its lifecycle, including at-rest and in-transit encryption.", icon: <Database className="w-5 h-5" /> },
  { id: "application", label: "APPLICATION", description: "Secure coding practices, input sanitization, and continuous vulnerability scanning of deployed logic.", icon: <Cpu className="w-5 h-5" /> },
  { id: "infrastructure", label: "INFRASTRUCTURE", description: "Immutable deployments, hardened container environments, and automated patch management.", icon: <Server className="w-5 h-5" /> },
  { id: "network", label: "NETWORK", description: "Segmented VPCs, strict firewall rules, DDoS mitigation, and edge-level traffic inspection.", icon: <Network className="w-5 h-5" /> },
  { id: "monitoring", label: "MONITORING", description: "Real-time anomaly detection, centralized structured logging, and automated threat response.", icon: <Activity className="w-5 h-5" /> }
];

const LIFECYCLE = [
  { step: "DESIGN", title: "Threat Modeling", desc: "Security begins at the architecture phase before code is written." },
  { step: "BUILD", title: "Secure Coding", desc: "Static analysis and dependency scanning during development." },
  { step: "TEST", title: "Validation", desc: "Automated penetration testing and vulnerability assessments." },
  { step: "DEPLOY", title: "Immutability", desc: "Automated, zero-trust deployments to hardened environments." },
  { step: "MONITOR", title: "Observability", desc: "Continuous runtime anomaly detection and log aggregation." },
  { step: "IMPROVE", title: "Iteration", desc: "Post-incident analysis and continuous security lifecycle enhancement." }
];

function ArchitectureViz() {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-20 hidden md:block">
      <div className="relative aspect-square max-h-[600px] mx-auto flex items-center justify-center">
        
        {/* Abstract Background Signals */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full animate-[spin_120s_linear_infinite]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" className="text-synthrova-lightgrey/10" strokeWidth="0.2" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" className="text-synthrova-lightgrey/10" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" className="text-synthrova-lightgrey/10" strokeWidth="0.2" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Center Node */}
        <div className="relative z-20 w-32 h-32 rounded-full bg-synthrova-black border border-synthrova-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <span className="font-mono text-xs tracking-widest text-synthrova-white">SYNTHROVA</span>
        </div>

        {/* Orbiting Layers */}
        {ARCH_LAYERS.map((layer, idx) => {
          const angle = (idx * (360 / ARCH_LAYERS.length)) * (Math.PI / 180);
          const radius = 220; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isHovered = hoveredLayer === layer.id;

          return (
            <div 
              key={layer.id}
              className="absolute z-30"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onMouseEnter={() => setHoveredLayer(layer.id)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              {/* Connecting Line */}
              <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: radius * 2, height: radius * 2, transform: 'translate(-50%, -50%)', zIndex: -1 }}>
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2={50 - (Math.cos(angle) * 50) + "%"} 
                  y2={50 - (Math.sin(angle) * 50) + "%"} 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  className={isHovered ? "text-synthrova-blue" : "text-synthrova-white/10"} 
                />
                {isHovered && (
                  <motion.circle 
                    cx="50%" cy="50%" r="2" fill="currentColor" className="text-synthrova-blue"
                    animate={{ cx: [ "50%", 50 - (Math.cos(angle) * 50) + "%" ], cy: [ "50%", 50 - (Math.sin(angle) * 50) + "%" ] }}
                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                  />
                )}
              </svg>

              <div className={`relative flex flex-col items-center justify-center cursor-crosshair transition-all duration-300 ${isHovered ? 'scale-110 z-40' : 'scale-100'}`}>
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-2 transition-colors duration-300 ${isHovered ? 'bg-synthrova-blue text-synthrova-black border-synthrova-blue' : 'bg-synthrova-black text-synthrova-white/50 border-synthrova-white/20'}`}>
                  {layer.icon}
                </div>
                <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${isHovered ? 'text-synthrova-blue' : 'text-synthrova-white/50'}`}>
                  {layer.label}
                </span>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full mt-4 w-64 bg-synthrova-black border border-synthrova-blue/30 p-4 text-center z-50 pointer-events-none shadow-2xl"
                    >
                      <p className="text-sm font-light text-synthrova-white/80 leading-relaxed">{layer.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileArchitectureViz() {
  return (
    <div className="md:hidden space-y-6 py-12">
      <div className="w-full text-center mb-8 border-b border-synthrova-white/10 pb-4">
        <span className="font-mono text-sm tracking-widest text-synthrova-white">SYNTHROVA INFRASTRUCTURE</span>
      </div>
      {ARCH_LAYERS.map((layer) => (
        <div key={layer.id} className="border border-synthrova-white/10 p-6 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full border border-synthrova-blue/30 text-synthrova-blue flex items-center justify-center mb-4">
            {layer.icon}
          </div>
          <h3 className="font-mono text-xs tracking-widest text-synthrova-white mb-2">{layer.label}</h3>
          <p className="text-sm font-light text-synthrova-white/60">{layer.description}</p>
        </div>
      ))}
    </div>
  );
}

export function Security() {
  const [activeLifecycle, setActiveLifecycle] = useState(0);

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-white">
      <SEO 
        title="Security | Synthrova Technologies"
        description="Synthrova builds security into the architecture, infrastructure, and operational practices behind its technology."
        canonical="/security"
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-synthrova-black text-synthrova-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1a1a1a_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="font-mono text-[10px] tracking-widest text-synthrova-blue mb-8 uppercase">SECURITY / TRUST</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Security by Design
          </h1>
          <p className="text-xl text-synthrova-white/70 font-light max-w-2xl leading-relaxed mb-12 text-balance">
            Synthrova builds security into the architecture, infrastructure, and operational practices behind its technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-synthrova-blue text-synthrova-black font-medium hover:bg-white transition-colors group text-sm tracking-wide">
              Contact Security <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#overview" className="inline-flex items-center justify-center px-8 py-4 border border-synthrova-white/20 text-synthrova-white hover:bg-synthrova-white/5 transition-colors text-sm tracking-wide">
              Security Overview
            </a>
          </div>
        </div>

        {/* Architecture Visualizations */}
        <div className="mt-20 border-t border-synthrova-white/10 bg-synthrova-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ArchitectureViz />
            <MobileArchitectureViz />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="overview" className="py-32 bg-synthrova-offwhite text-synthrova-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-20 text-balance max-w-4xl leading-tight">
            "Security is not a feature added at the end of a system. It is part of how the system is designed."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-8 lg:gap-16">
            
            <div className="md:col-span-6 lg:col-span-5 md:mt-24">
              <div className="border-t border-synthrova-black/10 pt-6">
                <div className="font-mono text-xs tracking-widest text-synthrova-blue mb-4">01</div>
                <h3 className="text-2xl font-light mb-4">Secure Development</h3>
                <p className="text-synthrova-black/70 font-light leading-relaxed">
                  Our engineering lifecycle embeds static code analysis, dependency vulnerability scanning, and peer architectural reviews to minimize software defects before they reach production.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
              <div className="border-t border-synthrova-black/10 pt-6">
                <div className="font-mono text-xs tracking-widest text-synthrova-blue mb-4">02</div>
                <h3 className="text-2xl font-light mb-4">Identity & Access</h3>
                <p className="text-synthrova-black/70 font-light leading-relaxed">
                  Authentication relies on cryptographically secure protocols, enforcing the principle of least privilege. Internal infrastructure access requires multi-factor authentication and is restricted via strict network perimeter controls.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-5">
              <div className="border-t border-synthrova-black/10 pt-6">
                <div className="font-mono text-xs tracking-widest text-synthrova-blue mb-4">03</div>
                <h3 className="text-2xl font-light mb-4">Data Protection</h3>
                <p className="text-synthrova-black/70 font-light leading-relaxed">
                  Sensitive data transmitted across our networks is encrypted via TLS. Persistent storage leverages AES-256 encryption at rest, ensuring that data architectures remain mathematically secure against unauthorized extraction.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 md:mt-24">
              <div className="border-t border-synthrova-black/10 pt-6">
                <div className="font-mono text-xs tracking-widest text-synthrova-blue mb-4">04</div>
                <h3 className="text-2xl font-light mb-4">Infrastructure Security</h3>
                <p className="text-synthrova-black/70 font-light leading-relaxed">
                  Production environments are built using immutable infrastructure patterns. Containers are hardened, and orchestration layers are strictly segmented via isolated Virtual Private Clouds (VPCs).
                </p>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-5 md:-mt-12">
              <div className="border-t border-synthrova-black/10 pt-6">
                <div className="font-mono text-xs tracking-widest text-synthrova-blue mb-4">05</div>
                <h3 className="text-2xl font-light mb-4">Monitoring & Response</h3>
                <p className="text-synthrova-black/70 font-light leading-relaxed">
                  Continuous observability pipelines aggregate structured logs from application, network, and infrastructure layers to rapidly detect and isolate anomalies or security deviations in real-time.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
              <div className="border-t border-synthrova-black/10 pt-6">
                <div className="font-mono text-xs tracking-widest text-synthrova-blue mb-4">06</div>
                <h3 className="text-2xl font-light mb-4">Operational Security</h3>
                <p className="text-synthrova-black/70 font-light leading-relaxed">
                  Strict operational protocols dictate credential rotation, incident response runbooks, and disaster recovery procedures, ensuring business continuity during adverse events.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-32 bg-synthrova-black text-synthrova-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-20 text-center">Security Across the Lifecycle</h2>
          
          <div className="relative">
            {/* Horizontal Line Background */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-synthrova-white/10 -translate-y-1/2 z-0"></div>
            
            {/* Animated Blue Flow Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 z-0 overflow-hidden">
              <motion.div 
                className="h-full w-1/4 bg-synthrova-blue"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
              {LIFECYCLE.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center text-center group cursor-pointer"
                  onMouseEnter={() => setActiveLifecycle(idx)}
                >
                  <div className={`w-4 h-4 rounded-full mb-6 transition-colors duration-300 border-2 ${activeLifecycle === idx ? 'bg-synthrova-blue border-synthrova-blue' : 'bg-synthrova-black border-synthrova-white/30'}`}></div>
                  <div className="font-mono text-[10px] tracking-widest text-synthrova-white/50 mb-4">{item.step}</div>
                  
                  <div className={`transition-all duration-300 ${activeLifecycle === idx ? 'opacity-100 translate-y-0' : 'opacity-40 md:opacity-0 md:translate-y-4'}`}>
                    <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                    <p className="text-xs font-light text-synthrova-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-32 bg-synthrova-white text-synthrova-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto text-synthrova-black mb-8" strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">Found a Security Issue?</h2>
          <p className="text-lg text-synthrova-black/70 font-light mb-12">
            Security researchers and users can report potential vulnerabilities through our responsible disclosure process.
          </p>
          <a 
            href={`mailto:security-reports@synthrova.com`} 
            className="inline-flex items-center px-8 py-4 border border-synthrova-black text-synthrova-black hover:bg-synthrova-black hover:text-synthrova-white transition-colors group text-sm"
          >
            Report a Vulnerability <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-8 text-xs font-mono text-synthrova-black/40">
            {`Direct contact: security-reports@synthrova.com`}
          </p>
        </div>
      </section>

      {/* Trust & Legal */}
      <section className="py-32 bg-synthrova-black text-synthrova-white relative overflow-hidden">
        
        {/* Subtle Background Net */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen">
           <svg width="100%" height="100%">
             <pattern id="trustGrid" width="60" height="60" patternUnits="userSpaceOnUse">
               <rect width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
             </pattern>
             <rect width="100%" height="100%" fill="url(#trustGrid)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-balance">
              Built for Systems Where Trust Matters.
            </h2>
            <p className="text-lg text-synthrova-white/70 font-light mb-12 leading-relaxed">
              Synthrova develops technology for enterprises, regulated industries, and other environments where data integrity, controlled access, resilience, and accountability matter.
            </p>

            <div className="p-6 border border-synthrova-white/10 bg-synthrova-white/5">
               <p className="text-xs text-synthrova-white/40 leading-relaxed uppercase tracking-widest font-mono">
                 Legal Disclaimer: Security practices and controls may vary by product, service, deployment environment, and customer agreement. General representations on this page do not constitute binding warranties unless explicitly incorporated into a signed commercial Master Services Agreement.
               </p>
            </div>
          </div>

          <div className="md:w-1/2 lg:pl-16">
            <div className="font-mono text-[10px] tracking-widest text-synthrova-white/40 uppercase mb-8 pb-4 border-b border-synthrova-white/10">
              Security Resources
            </div>
            <nav className="space-y-4">
              <a href="#overview" className="block text-synthrova-white hover:text-synthrova-blue transition-colors">Security Overview</a>
              <Link to="/contact" className="block text-synthrova-white hover:text-synthrova-blue transition-colors">Responsible Disclosure</Link>
              <Link to="/privacy" className="block text-synthrova-white hover:text-synthrova-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-synthrova-white hover:text-synthrova-blue transition-colors">Terms of Service</Link>
            </nav>
          </div>

        </div>
      </section>

    </div>
  );
}
