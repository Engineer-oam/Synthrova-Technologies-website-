import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, Beaker, Network, Database, Shield, CheckCircle2, Search, FileText, AlertTriangle, Layers, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      {/* Cinematic Network Visual */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none flex items-center justify-center">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[0.5px] border-synthrova-blue rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-[0.5px] border-synthrova-blue/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[0.2px] border-synthrova-blue/30 rounded-full" />
          
          {/* Nodes */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <div 
              key={i} 
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-synthrova-blue rounded-full shadow-[0_0_15px_rgba(0,188,212,0.8)]"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-250px)`
              }}
            >
              <div className="w-full h-full animate-ping bg-synthrova-blue rounded-full opacity-50" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-synthrova-black/80 to-synthrova-black z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            <Beaker className="w-4 h-4 mr-3" />
            SYNTHROVA / PHARMACEUTICALS
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance">
            A trusted digital layer for pharmaceutical supply chains.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed mb-12 text-balance">
            Connect transactions, traceability, reconciliation and compliance across the pharmaceutical ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const participants = [
    { name: "Manufacturer", desc: "API and finished dosage production." },
    { name: "Distributor", desc: "Regional and national logistics." },
    { name: "CFA / Warehouse", desc: "Storage and cold-chain integrity." },
    { name: "Hospital", desc: "Point of care and dispensing." },
    { name: "Auditor", desc: "Quality and financial assurance." },
    { name: "Regulator", desc: "Oversight and compliance monitoring." }
  ];

  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-b border-synthrova-lightgrey/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">The Ecosystem</h2>
          <p className="text-lg text-synthrova-black/60 font-light max-w-2xl mx-auto">
            A highly fragmented network of interdependent organizations, each requiring verifiable trust.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {participants.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-synthrova-white p-6 md:p-8 border border-synthrova-lightgrey/10 hover:border-synthrova-blue/50 transition-colors group"
            >
              <Network className="w-6 h-6 text-synthrova-black/20 mb-6 group-hover:text-synthrova-blue transition-colors" />
              <h3 className="text-xl font-medium mb-2">{p.name}</h3>
              <p className="text-sm text-synthrova-black/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FrictionSection() {
  const frictions = [
    "Data fragmentation",
    "Manual reconciliation",
    "Disconnected records",
    "Audit preparation",
    "Delayed visibility",
    "Cross-organizational coordination"
  ];

  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Where friction happens.</h2>
            <p className="text-lg text-synthrova-black/70 font-light leading-relaxed">
              Without a shared transaction layer, pharmaceutical supply chains rely on isolated databases and manual reconciliation, leading to operational bottlenecks and compliance risks.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-synthrova-black/10 border border-synthrova-lightgrey/10">
            {frictions.map((f, i) => (
              <div key={i} className="bg-synthrova-offwhite p-8 flex items-start space-x-4">
                <AlertTriangle className="w-5 h-5 text-red-500/70 shrink-0 mt-1" />
                <span className="text-lg font-light">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ELedgerIntegrationSection() {
  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16 max-w-4xl mx-auto text-balance">
          E-Ledger acts as the universal connective tissue.
        </h2>
        
        <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
          {/* Ecosystem Nodes */}
          <div className="absolute top-0 left-1/4 w-32 p-3 bg-synthrova-white/5 border border-synthrova-white/20 text-xs font-mono text-center">MANUFACTURER</div>
          <div className="absolute top-0 right-1/4 w-32 p-3 bg-synthrova-white/5 border border-synthrova-white/20 text-xs font-mono text-center">DISTRIBUTOR</div>
          <div className="absolute bottom-0 left-1/4 w-32 p-3 bg-synthrova-white/5 border border-synthrova-white/20 text-xs font-mono text-center">HOSPITAL</div>
          <div className="absolute bottom-0 right-1/4 w-32 p-3 bg-synthrova-white/5 border border-synthrova-white/20 text-xs font-mono text-center">REGULATOR</div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 p-3 bg-synthrova-white/5 border border-synthrova-white/20 text-xs font-mono text-center">WAREHOUSE</div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 p-3 bg-synthrova-white/5 border border-synthrova-white/20 text-xs font-mono text-center">AUDITOR</div>

          {/* Lines connecting to center */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
             <line x1="25" y1="10" x2="50" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
             <line x1="75" y1="10" x2="50" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
             <line x1="25" y1="90" x2="50" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
             <line x1="75" y1="90" x2="50" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
             <line x1="10" y1="50" x2="50" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
             <line x1="90" y1="50" x2="50" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
          </svg>

          {/* Central E-Ledger plane */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[280px] h-[120px] bg-synthrova-blue/10 border border-synthrova-blue shadow-[0_0_50px_rgba(0,188,212,0.2)] flex flex-col items-center justify-center backdrop-blur-sm z-20"
          >
            <Layers className="w-8 h-8 text-synthrova-blue mb-2" />
            <div className="text-synthrova-white font-mono text-sm tracking-widest uppercase">E-Ledger Layer</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TraceabilityJourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const journey = [
    { id: "batch_created", label: "Batch Created", event: "MANUFACTURING_START", actor: "MFG-NODE-A" },
    { id: "quality", label: "Quality", event: "QC_TEST_PASSED", actor: "LAB-NODE-03" },
    { id: "released", label: "Released", event: "BATCH_RELEASED", actor: "QP-NODE-01" },
    { id: "dispatched", label: "Dispatched", event: "INVENTORY_DISPATCH", actor: "MFG-WH-NODE" },
    { id: "transported", label: "Transported", event: "IN_TRANSIT", actor: "LOGISTICS-NODE-B" },
    { id: "received", label: "Received", event: "INVENTORY_RECEIPT", actor: "DIST-NODE-A" },
    { id: "distributed", label: "Distributed", event: "HOSPITAL_DELIVERY", actor: "LOGISTICS-NODE-C" },
    { id: "audited", label: "Audited", event: "COMPLIANCE_VERIFIED", actor: "AUDIT-NODE-01" }
  ];

  const syntheticData = {
    "Batch ID": "BCH-2026-X99",
    "Product": "Synthracillin 500mg IV",
    "Manufacturer": "Synthrova Pharma Labs",
    "Quantity": "10,000 Vials",
    "Dispatch": "Facility A (Mumbai)",
    "Destination": "Distributor B (Delhi)",
    "Receipt": journey[activeStep].id === 'received' || activeStep > 5 ? "Verified" : "Pending",
    "Timestamp": new Date().toISOString(),
    "Compliance events": "0 Anomalies Detected"
  };

  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black border-y border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Interactive Traceability Journey</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline */}
          <div className="lg:w-1/3">
            <div className="font-mono text-xs tracking-widest text-synthrova-black/40 uppercase mb-8">Event Sequence</div>
            <div className="space-y-2">
              {journey.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-4 border transition-all flex items-center justify-between ${activeStep === i ? 'border-synthrova-blue bg-synthrova-blue/5' : 'border-synthrova-lightgrey/10 hover:border-synthrova-lightgrey/30'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-4 ${activeStep >= i ? 'bg-synthrova-blue' : 'bg-synthrova-black/20'}`}></div>
                    <span className={`font-medium ${activeStep === i ? 'text-synthrova-black' : 'text-synthrova-black/60'}`}>{step.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Record Display */}
          <div className="lg:w-2/3">
            <div className="bg-[#0a0a0a] text-synthrova-white p-8 md:p-12 min-h-full font-mono relative overflow-hidden shadow-2xl border border-synthrova-lightgrey">
              {/* Demo Data Banner */}
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold tracking-widest px-4 py-1 uppercase z-10">
                Demonstration Data
              </div>
              
              <div className="text-xs text-synthrova-white/40 tracking-widest uppercase mb-8 pb-4 border-b border-synthrova-white/10 flex justify-between">
                <span>E-Ledger Batch Record</span>
                <span className="text-synthrova-blue">Verified State</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                    {Object.entries(syntheticData).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-[10px] text-synthrova-white/40 uppercase mb-1">{key}</div>
                        <div className={`text-sm ${key === 'Batch ID' ? 'text-synthrova-blue text-lg' : ''}`}>{value as string}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-synthrova-white/5 border border-synthrova-white/10 p-4 mt-auto">
                    <div className="text-[10px] text-synthrova-white/40 uppercase mb-3">Latest Event Cryptographic Signature</div>
                    <div className="text-xs text-synthrova-blue/70 break-all leading-relaxed">
                      "event": "{journey[activeStep].event}",<br/>
                      "actor": "{journey[activeStep].actor}",<br/>
                      "hash": "0x{Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join('')}"
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AuditSection() {
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black text-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-20 text-balance">
          Continuous compliance, automated evidence.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 font-mono tracking-widest uppercase text-sm">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-synthrova-white border border-synthrova-lightgrey/10 flex items-center justify-center shadow-sm mb-4">
              <Database className="w-6 h-6 text-synthrova-black/60" />
            </div>
            <span>Transactions</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-synthrova-black/20 rotate-90 md:rotate-0" />
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-synthrova-white border border-synthrova-lightgrey/10 flex items-center justify-center shadow-sm mb-4">
              <FileText className="w-6 h-6 text-synthrova-black/60" />
            </div>
            <span>Evidence</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-synthrova-black/20 rotate-90 md:rotate-0" />
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-synthrova-white border border-synthrova-lightgrey/10 flex items-center justify-center shadow-sm mb-4">
              <Search className="w-6 h-6 text-synthrova-black/60" />
            </div>
            <span>Audit Trail</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-synthrova-black/20 rotate-90 md:rotate-0" />
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-synthrova-blue/10 border border-synthrova-blue flex items-center justify-center shadow-sm mb-4">
              <CheckCircle2 className="w-6 h-6 text-synthrova-blue" />
            </div>
            <span className="text-synthrova-blue font-medium">Compliance</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function RegulatorySection() {
  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white border-t border-synthrova-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Shield className="w-12 h-12 text-synthrova-blue mb-8" />
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
              Bridging the gap between enterprise and oversight.
            </h2>
            <p className="text-xl font-light text-synthrova-white/70 leading-relaxed text-balance">
              Synthrova envisions a regulatory ecosystem where compliance is a continuous mathematical state, not a retrospective manual exercise.
            </p>
            <div className="mt-8 p-6 border-l-2 border-synthrova-white/20 bg-synthrova-white/5">
              <p className="text-sm font-light text-synthrova-white/60">
                <strong className="text-synthrova-white">Note:</strong> E-Ledger provides the technical infrastructure capable of connecting regulated enterprises with oversight systems securely. Any specific integration with regulatory bodies (such as CDSCO or State FDAs) occurs strictly under the operational control and official confirmation of those respective authorities.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="border border-synthrova-white/10 p-8 md:p-12 bg-synthrova-white/5 backdrop-blur">
              <div className="font-mono text-xs tracking-widest text-synthrova-white/40 uppercase mb-8">Conceptual Architecture</div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-synthrova-white/10">
                  <span className="font-light">Enterprise Networks</span>
                  <Lock className="w-4 h-4 text-synthrova-white/40" />
                </div>
                <div className="flex justify-center text-synthrova-blue">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
                <div className="flex justify-between items-center p-4 bg-synthrova-blue/10 border border-synthrova-blue text-synthrova-blue font-medium shadow-[0_0_20px_rgba(0,188,212,0.1)]">
                  <span>E-Ledger Infrastructure</span>
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex justify-center text-synthrova-blue">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
                <div className="flex justify-between items-center p-4 border border-synthrova-white/10">
                  <span className="font-light">Oversight Systems</span>
                  <Lock className="w-4 h-4 text-synthrova-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
          Build a pharmaceutical pilot with Synthrova.
        </h2>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors duration-500 group">
          Contact our Engineering Team
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export function Pharmaceuticals() {
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Pharmaceutical Traceability & Compliance | Synthrova Technologies"
        description="Synthrova Technologies provides E-Ledger infrastructure for the pharmaceutical industry to ensure traceability, provenance, and regulatory compliance."
        canonical="/industries/pharmaceuticals"
      />
      
      <HeroSection />
      <EcosystemSection />
      <FrictionSection />
      <ELedgerIntegrationSection />
      <TraceabilityJourneySection />
      <AuditSection />
      <RegulatorySection />
      <FinalCTASection />
    </div>
  );
}
