import { motion } from "motion/react";
import { ArrowRight, Box, Lock, Activity, Server, Database, Key } from "lucide-react";
import { Link } from "react-router-dom";

export function Platform() {
  return (
    <div className="w-full bg-synthrova-offwhite text-synthrova-black pt-20">
      {/* Header */}
      <section className="py-24 md:py-32 bg-synthrova-black text-synthrova-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-synthrova-cyan font-mono text-sm tracking-widest uppercase mb-6">Current Platform</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              E-Ledger
            </h1>
            <p className="text-xl text-synthrova-grey font-light leading-relaxed">
              Our flagship production platform. E-Ledger provides immutable, verifiable infrastructure for pharmaceutical supply chains and highly regulated commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="py-24 border-b border-synthrova-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-6">System Architecture</h2>
              <p className="text-synthrova-darkgrey/80 mb-8 font-light">
                Built for environments where data integrity is not just a requirement, but the foundation of the business model. E-Ledger utilizes distributed consensus mechanisms layered with traditional enterprise access controls.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Box, title: "Asset Tokenization", text: "Physical goods mapped to cryptographic identifiers." },
                  { icon: Lock, title: "Immutable State", text: "Write-once, append-only ledger mechanisms." },
                  { icon: Activity, title: "Consensus Layer", text: "Distributed validation across stakeholder nodes." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-10 h-10 border border-synthrova-black/20 flex items-center justify-center mr-4 shrink-0 bg-synthrova-white">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-synthrova-darkgrey/70">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract Diagram */}
            <div className="bg-synthrova-white border border-synthrova-black/10 p-8 min-h-[400px] relative flex items-center justify-center font-mono text-xs">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
              
              <div className="relative z-10 w-full max-w-sm">
                <div className="border border-synthrova-black p-4 bg-synthrova-black text-synthrova-white text-center mb-8 relative">
                  <Database className="w-5 h-5 mx-auto mb-2" />
                  E-LEDGER CORE
                  <div className="absolute top-full left-1/2 w-px h-8 bg-synthrova-black -translate-x-1/2"></div>
                </div>
                
                <div className="flex justify-between relative">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-synthrova-black/30 -z-10"></div>
                  
                  <div className="w-24 h-24 bg-synthrova-white border border-synthrova-black flex flex-col items-center justify-center p-2 text-center">
                    <Server className="w-4 h-4 mb-2 text-synthrova-cyan" />
                    <span className="text-[10px]">Manufacturer Node</span>
                  </div>
                  
                  <div className="w-24 h-24 bg-synthrova-white border border-synthrova-black flex flex-col items-center justify-center p-2 text-center">
                    <Server className="w-4 h-4 mb-2 text-synthrova-cyan" />
                    <span className="text-[10px]">Regulatory Node</span>
                  </div>
                  
                  <div className="w-24 h-24 bg-synthrova-white border border-synthrova-black flex flex-col items-center justify-center p-2 text-center">
                    <Server className="w-4 h-4 mb-2 text-synthrova-cyan" />
                    <span className="text-[10px]">Distributor Node</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight mb-16 text-center">Technical Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-synthrova-black/10 border border-synthrova-black/10">
            {[
              "High-Throughput Verification",
              "Zero-Knowledge Proofs",
              "Smart Contract Automation",
              "ERP System Integration",
              "IoT Sensor Telemetry",
              "Compliance Reporting",
              "Identity Management",
              "Anomaly Detection"
            ].map((cap, i) => (
              <div key={i} className="bg-synthrova-offwhite p-8 hover:bg-synthrova-white transition-colors">
                <Key className="w-5 h-5 mb-4 text-synthrova-darkgrey/40" />
                <h3 className="font-medium text-sm">{cap}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-synthrova-black text-synthrova-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-8">Deploy E-Ledger for your infrastructure.</h2>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-grey transition-colors">
            Request Technical Briefing
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
