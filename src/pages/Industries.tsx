import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, Zap, Shield, ChevronRight, Activity, Beaker, Building2, Scale, Package, Wheat, Search, Box, Network } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-synthrova-white text-synthrova-black pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a1a1a_0%,transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance leading-tight">
            Built for industries where every transaction carries consequences.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-black/70 max-w-2xl leading-relaxed text-balance">
            Synthrova builds infrastructure for complex, regulated and highly interconnected ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const industries = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals & Healthcare",
    desc: "Trusted transaction and compliance infrastructure for pharmaceutical supply chains, serialization, and regulatory reporting.",
    status: "Current",
    icon: Beaker,
    link: "/pharmaceuticals",
    cta: "Explore Pharmaceuticals"
  },
  {
    id: "energy",
    title: "Energy Technology",
    desc: "Decentralized energy grid management, trading verification, and infrastructure for transition technologies.",
    status: "Research / Exploration",
    icon: Zap
  },
  {
    id: "defence",
    title: "Defence Technology",
    desc: "Secure, partitioned communication and logistics networks that require absolute operational integrity.",
    status: "In Development",
    icon: Shield
  },
  {
    id: "government",
    title: "Government & Regulated Supply Chains",
    desc: "Technology connecting regulated entities, evidence and oversight for excise and controlled goods.",
    status: "Future",
    icon: Building2
  },
];

function GridSection() {
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-synthrova-black/10 border border-synthrova-lightgrey/10">
          {industries.map((ind, i) => (
            <div key={i} className={`bg-synthrova-white p-12 lg:p-16 group transition-colors flex flex-col h-full ${ind.id === 'pharmaceuticals' ? 'bg-synthrova-white shadow-[inset_0_0_0_2px_#000]' : 'hover:bg-synthrova-offwhite'}`}>
              <div className="flex justify-between items-start mb-12">
                <ind.icon className={`w-8 h-8 ${ind.id === 'pharmaceuticals' ? 'text-synthrova-black' : 'text-synthrova-black/40 group-hover:text-synthrova-black transition-colors'}`} />
                <div className={`text-[10px] uppercase tracking-widest font-mono px-3 py-1 ${ind.status === 'Current focus' ? 'bg-synthrova-white text-synthrova-black' : ind.status === 'Strategic domain' ? 'border border-synthrova-lightgrey text-synthrova-black' : 'text-synthrova-black/60 border border-synthrova-lightgrey/20'}`}>
                  {ind.status}
                </div>
              </div>
              <h3 className="text-3xl font-light mb-6 tracking-tight">{ind.title}</h3>
              <p className="text-lg text-synthrova-black/70 font-light leading-relaxed flex-grow">
                {ind.desc}
              </p>
              
              {ind.link && (
                <div className="mt-12 pt-8 border-t border-synthrova-lightgrey/10">
                  <Link to={ind.link} className="inline-flex items-center text-sm font-medium hover:text-synthrova-blue transition-colors group/link">
                    {ind.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PharmaSection() {
  return (
    <section className="py-32 bg-synthrova-white border-t border-synthrova-lightgrey/10 text-synthrova-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="lg:w-1/2">
            <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase">Featured Implementation</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Pharmaceuticals</h2>
            <p className="text-xl font-light text-synthrova-black/70 leading-relaxed text-balance mb-12">
              Our flagship application of E-Ledger creates a continuous, unbroken chain of custody for pharmaceutical products. Operating as a B2B RegTech platform, we connect disparate actors onto a single, trusted transaction layer for automated compliance reconciliation.
            </p>
            <Link to="/eledger" className="inline-flex items-center px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue transition-colors duration-500 group">
              Explore E-Ledger
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-full h-full max-w-md relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-synthrova-black flex flex-col items-center justify-center z-20 shadow-xl">
                     <Network className="w-8 h-8 text-synthrova-blue mb-3" />
                     <span className="text-synthrova-white font-mono text-xs uppercase tracking-widest text-center px-2">E-Ledger<br/>Network</span>
                  </div>
                  
                  {/* Nodes around center */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-32 bg-synthrova-white border border-synthrova-lightgrey/10 p-3 text-center text-xs font-medium z-10 shadow-sm">Manufacturer</div>
                  <div className="absolute top-1/4 right-0 translate-x-4 w-32 bg-synthrova-white border border-synthrova-lightgrey/10 p-3 text-center text-xs font-medium z-10 shadow-sm">Distributor</div>
                  <div className="absolute bottom-1/4 right-0 translate-x-4 w-32 bg-synthrova-white border border-synthrova-lightgrey/10 p-3 text-center text-xs font-medium z-10 shadow-sm">Warehouse</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-32 bg-synthrova-white border border-synthrova-lightgrey/10 p-3 text-center text-xs font-medium z-10 shadow-sm">Hospital</div>
                  <div className="absolute bottom-1/4 left-0 -translate-x-4 w-32 bg-synthrova-white border border-synthrova-lightgrey/10 p-3 text-center text-xs font-medium z-10 shadow-sm">Auditor</div>
                  <div className="absolute top-1/4 left-0 -translate-x-4 w-32 bg-synthrova-white border border-synthrova-lightgrey/10 p-3 text-center text-xs font-medium z-10 shadow-sm">Regulator</div>

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <line x1="50" y1="50" x2="50" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-black/20" />
                     <line x1="50" y1="50" x2="90" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-black/20" />
                     <line x1="50" y1="50" x2="90" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-black/20" />
                     <line x1="50" y1="50" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-black/20" />
                     <line x1="50" y1="50" x2="10" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-black/20" />
                     <line x1="50" y1="50" x2="10" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-black/20" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PrincipleSection() {
  return (
    <section className="py-40 bg-synthrova-white text-synthrova-black text-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-16 text-balance leading-tight">
          Start with one difficult industry. Build infrastructure that can scale across many.
        </h2>
        <Link to="/eledger" className="inline-flex items-center px-10 py-5 bg-synthrova-white text-synthrova-black font-medium text-lg hover:bg-synthrova-lightgrey transition-colors group">
          Explore E-Ledger
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export function Industries() {
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Industries | Synthrova Technologies"
        description="Synthrova Technologies serves critical industries including Pharmaceuticals, Energy, Defence & Security, and Government supply chains."
        canonical="/industries"
      />
      
      <HeroSection />
      <GridSection />
      <PharmaSection />
      <PrincipleSection />
    </div>
  );
}
