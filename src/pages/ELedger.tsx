import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, Database, Search, Shield, Share2, CheckCircle2, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SEO } from "../components/SEO";

export function ELedger() {
  
  return (
    <div className="w-full bg-synthrova-white selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="E-Ledger | Compliance Infrastructure for Regulated Supply Chains"
        description="E-Ledger is Synthrova Technologies' compliance infrastructure platform for regulated supply chains, enabling shared transaction records, reconciliation, traceability and audit readiness."
        canonical="/eledger"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "E-Ledger",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "provider": {
              "@type": "Organization",
              "name": "Synthrova Technologies Private Limited",
              "url": "https://synthrova.in/"
            },
            "description": "E-Ledger is Synthrova Technologies' compliance infrastructure platform for regulated supply chains, enabling shared transaction records, reconciliation, traceability and audit readiness."
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Synthrova Technologies Private Limited",
            "url": "https://synthrova.in/",
            "logo": "https://synthrova.in/logo.png"
          }
        ]}
      />

      <HeroSection />
      <ArchitectureSection />
      
      <StakeholdersSection />
      <WorkflowSection />
      <TraceabilitySection />
      <ReconciliationSection />
      <ArchitectureSection />
      <SecuritySection />
      <FutureSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-synthrova-white text-synthrova-black pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      <HeroNetworkVisual />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase">
            SYNTHROVA / E-LEDGER
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance">
            A trusted transaction layer for regulated commerce.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-black/70 max-w-2xl leading-relaxed mb-12 text-balance">
            It connects organizations, transactions and compliance workflows across existing systems to create a trusted shared layer for reconciliation, traceability and auditability.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-lightgrey transition-colors inline-flex items-center group">
            Request a Demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function HeroNetworkVisual() {
  return (
    <div className="absolute top-1/2 right-0 lg:right-10 w-[800px] h-[800px] -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
       <svg className="w-full h-full" viewBox="0 0 100 100">
         <line x1="20" y1="50" x2="50" y2="20" stroke="#00BCD4" strokeWidth="0.5" className="animate-pulse" />
         <line x1="50" y1="20" x2="80" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
         <line x1="80" y1="50" x2="50" y2="80" stroke="#00BCD4" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: "1s" }} />
         <line x1="50" y1="80" x2="20" y2="50" stroke="#00BCD4" strokeWidth="0.5" />
         <line x1="50" y1="50" x2="20" y2="50" stroke="#00BCD4" strokeWidth="0.2" />
         <line x1="50" y1="50" x2="80" y2="50" stroke="#00BCD4" strokeWidth="0.2" />
         <line x1="50" y1="50" x2="50" y2="20" stroke="#00BCD4" strokeWidth="0.2" />
         <line x1="50" y1="50" x2="50" y2="80" stroke="#00BCD4" strokeWidth="0.2" />
         
         <circle cx="20" cy="50" r="2" fill="#fff" />
         <circle cx="50" cy="20" r="2" fill="#fff" />
         <circle cx="80" cy="50" r="2" fill="#fff" />
         <circle cx="50" cy="80" r="2" fill="#fff" />
         <circle cx="50" cy="50" r="3" fill="#00BCD4" />
       </svg>
    </div>
  )
}

function ProblemSection() {
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-b border-synthrova-lightgrey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">Every organization has its own record.</h2>
          <p className="text-xl font-light text-synthrova-black/70 max-w-3xl mx-auto text-balance">
            When organizations maintain isolated records of shared events, reconciliation becomes a manual, error-prone process fraught with friction.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
           {["Manufacturer", "Distributor", "Warehouse", "Auditor", "Regulator"].map((entity, i) => (
             <div key={entity} className="w-full lg:w-48 p-6 bg-synthrova-white border border-synthrova-lightgrey/10 flex flex-col items-center relative group">
               <Database className="w-6 h-6 text-synthrova-black/40 mb-4" />
               <div className="text-sm font-medium mb-6 text-center">{entity}</div>
               
               <div className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 font-medium tracking-wide">
                  {i === 0 && "Quantity mismatch"}
                  {i === 1 && "Invoice error"}
                  {i === 2 && "Batch mismatch"}
                  {i === 3 && "Missing receipt"}
                  {i === 4 && "Timing discrepancy"}
               </div>
               
               <div className="w-full space-y-2 opacity-50">
                 <div className="h-1 w-full bg-synthrova-black/20"></div>
                 <div className="h-1 w-3/4 bg-synthrova-black/20"></div>
                 <div className="h-1 w-5/6 bg-synthrova-black/20"></div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-balance">E-Ledger creates a trusted shared transaction layer.</h2>
          <p className="text-xl font-light text-synthrova-white/70 text-balance leading-relaxed">
            Organizations retain control over their internal systems and permissions. E-Ledger simply provides the cryptographic assurance that shared data is identical, immutable, and verified across all authorized participants.
          </p>
        </div>
        
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="w-full p-6 border border-synthrova-white/20 text-center font-mono tracking-widest uppercase">
            Ententerprise systemsrise Systems
          </div>
          <div className="h-12 w-px bg-synthrova-blue/50 my-2"></div>
          <div className="w-full p-8 border border-synthrova-blue bg-synthrova-blue/5 text-center text-2xl font-light tracking-widest uppercase shadow-[0_0_40px_rgba(0,188,212,0.1)]">
            E-Ledger Layer
          </div>
          <div className="h-12 w-px bg-synthrova-blue/50 my-2"></div>
          <div className="w-full p-6 border border-synthrova-white/20 text-center font-mono tracking-widest uppercase">
            Shared Trusted Records
          </div>
          <div className="h-12 w-px bg-synthrova-white/20 my-2"></div>
          <div className="w-full p-6 border border-synthrova-white/10 text-center text-synthrova-white/60 text-sm tracking-widest uppercase bg-synthrova-white/5">
            Compliance / Audit / Intelligence
          </div>
        </div>
      </div>
    </section>
  )
}

function StakeholdersSection() {
  const [active, setActive] = useState(0);
  const stakeholders = [
    { name: "Ententerprise systemsrise", desc: "Reduce reconciliation and compliance friction.", icon: Layers },
    { name: "Auditor", desc: "Access structured, traceable evidence.", icon: Search },
    { name: "Regulator", desc: "Potentially gain better visibility into regulated activity.", icon: Shield },
    { name: "Supply Chain", desc: "Improve transaction integrity and traceability.", icon: Share2 }
  ];

  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight">Stakeholder Value</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex flex-col gap-2">
            {stakeholders.map((s, i) => (
              <button 
                key={s.name}
                onClick={() => setActive(i)}
                className={`text-left p-6 border transition-all duration-300 flex items-center justify-between ${active === i ? 'border-synthrova-blue bg-synthrova-blue/5 text-synthrova-black' : 'border-synthrova-lightgrey/10 hover:border-synthrova-lightgrey/30 text-synthrova-black/60'}`}
              >
                <span className="font-medium text-lg tracking-wide">{s.name}</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${active === i ? 'text-synthrova-blue translate-x-1' : 'opacity-0'}`} />
              </button>
            ))}
          </div>
          <div className="lg:w-2/3 bg-synthrova-offwhite border border-synthrova-lightgrey/5 p-12 flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-synthrova-blue mb-8">
                  {(() => {
                    const Icon = stakeholders[active].icon;
                    return <Icon className="w-12 h-12" />;
                  })()}
                </div>
                <h3 className="text-3xl md:text-5xl font-light tracking-tight text-balance leading-tight">
                  {stakeholders[active].desc}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    "Purchase Order", "Production", "Batch Creation", "Quality", 
    "Dispatch", "Transport", "Receipt", "Inventory", 
    "Invoice", "Reconciliation", "Audit", "Compliance"
  ];

  const getDemoData = (step: string) => {
    return {
      event_type: step.toUpperCase().replace(" ", "_"),
      timestamp: new Date().toISOString(),
      transaction_hash: "0x" + Math.random().toString(16).slice(2, 42).padStart(40, '0'),
      status: "VERIFIED_ON_LEDGER",
      actor: "DEMO_NODE_01",
      payload_integrity: "SHA-256 Validated",
      metadata: "Demonstration Data Only"
    };
  };

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white border-y border-synthrova-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight">Interactive Pharmaceutical Workflow</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {steps.map((step, i) => (
            <button
              key={step}
              onClick={() => setActiveStep(i)}
              className={`p-4 border text-sm font-medium transition-colors text-left ${activeStep === i ? 'bg-synthrova-blue text-synthrova-black border-synthrova-blue' : 'bg-transparent border-synthrova-white/20 hover:border-synthrova-blue/50 text-synthrova-white/70 hover:text-synthrova-white'}`}
            >
              <div className="text-[10px] tracking-widest opacity-50 mb-2 font-mono">0{i+1}</div>
              {step}
            </button>
          ))}
        </div>
        
        <div className="w-full bg-[#0a0a0a] border border-synthrova-white/10 p-6 md:p-10 font-mono text-sm min-h-[300px]">
          <div className="text-synthrova-white/30 text-xs mb-8 uppercase tracking-widest flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span>Synthetic Event Payload</span>
            <span className="text-synthrova-blue/70 bg-synthrova-blue/10 px-3 py-1 border border-synthrova-blue/20">DEMONSTRATION DATA ONLY</span>
          </div>
          <AnimatePresence mode="wait">
            {activeStep !== null ? (
              <motion.pre
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-synthrova-blue overflow-x-auto whitespace-pre-wrap break-words"
              >
                {JSON.stringify(getDemoData(steps[activeStep]), null, 2)}
              </motion.pre>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center justify-center text-synthrova-white/20 py-20">
                Select an event above to view its transaction payload.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function TraceabilitySection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Interactive Traceability</h2>
        <div className="bg-synthrova-offwhite border border-synthrova-lightgrey/10 p-8 lg:p-16 relative">
          <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] uppercase tracking-widest px-3 py-2 font-mono font-bold border-b border-l border-yellow-200">
            Demonstration Data Only
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 mt-4">
            <div className="lg:w-1/3">
              <h3 className="text-sm font-mono tracking-widest text-synthrova-black/40 uppercase mb-8">Batch Context</h3>
              <div className="space-y-6 font-mono text-sm bg-synthrova-white p-6 border border-synthrova-lightgrey/5 shadow-sm">
                <div><span className="text-synthrova-black/40 block text-[10px] uppercase mb-1">Batch ID</span><span className="font-medium text-base">BCH-2026-X99</span></div>
                <div className="h-px bg-synthrova-black/5"></div>
                <div><span className="text-synthrova-black/40 block text-[10px] uppercase mb-1">Product</span><span className="font-medium">Synthracillin 500mg</span></div>
                <div className="h-px bg-synthrova-black/5"></div>
                <div><span className="text-synthrova-black/40 block text-[10px] uppercase mb-1">Manufacturer</span><span className="font-medium">Synthrova Pharma Labs</span></div>
                <div className="h-px bg-synthrova-black/5"></div>
                <div><span className="text-synthrova-black/40 block text-[10px] uppercase mb-1">Quantity</span><span className="font-medium">10,000 Units</span></div>
              </div>
            </div>
            
            <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-synthrova-lightgrey/10 pt-12 lg:pt-0 lg:pl-16">
              <h3 className="text-sm font-mono tracking-widest text-synthrova-black/40 uppercase mb-8">Journey Map</h3>
              <div className="space-y-10 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-synthrova-blue/30">
                {[
                  { event: "Manufactured", loc: "Facility A", time: "2026-08-10 08:30Z", status: "Verified" },
                  { event: "Quality Control Passed", loc: "Lab 3", time: "2026-08-11 14:15Z", status: "Verified" },
                  { event: "Dispatched", loc: "Warehouse 1", time: "2026-08-12 09:00Z", status: "Verified" },
                  { event: "Received", loc: "Distributor Node B", time: "2026-08-14 11:20Z", status: "Verified" },
                  { event: "Compliance Event Logged", loc: "Regulator Node", time: "2026-08-14 11:21Z", status: "Verified" }
                ].map((log, i) => (
                  <div key={i} className="flex gap-6 items-start relative z-10">
                    <div className="w-6 h-6 rounded-full bg-synthrova-blue/10 border border-synthrova-blue flex items-center justify-center shrink-0 mt-1 bg-synthrova-white">
                      <div className="w-2 h-2 rounded-full bg-synthrova-blue"></div>
                    </div>
                    <div>
                      <div className="font-medium text-lg text-synthrova-black">{log.event}</div>
                      <div className="text-synthrova-black/60 text-sm my-1">{log.loc} &bull; {log.time}</div>
                      <div className="text-synthrova-blue text-xs font-mono mt-2 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> {log.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReconciliationSection() {
  return (
    <section className="py-32 bg-synthrova-offwhite border-t border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 max-w-4xl mx-auto text-balance">
          From fragmented matching to a continuous transaction history.
        </h2>
        <p className="text-xl text-synthrova-black/70 mb-20 max-w-3xl mx-auto font-light text-balance">
          As a comprehensive B2B compliance infrastructure and RegTech platform, E-Ledger eliminates the need to cross-reference disjointed database tables by enforcing a shared, cryptographically verified chain of events. It automates ententerprise systemsrise transaction reconciliation, replacing manual three-way and four-way matching with instant, mathematically proven consensus.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 max-w-md p-8 border border-synthrova-lightgrey/10 bg-synthrova-white opacity-60">
            <div className="text-sm font-mono tracking-widest text-synthrova-black/60 mb-8 uppercase">Traditional Matching</div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-red-400/20 flex justify-between"><div className="w-1/4 h-full bg-red-400"></div></div>
              <div className="h-2 w-full bg-synthrova-black/5 flex justify-end"><div className="w-1/3 h-full bg-synthrova-black/20"></div></div>
              <div className="h-2 w-full bg-red-400/20 flex justify-center"><div className="w-1/2 h-full bg-red-400"></div></div>
            </div>
            <div className="mt-8 text-xs font-mono text-red-500 font-medium">ERROR: 3-WAY MATCHING FAILED</div>
          </div>
          
          <ArrowRight className="w-8 h-8 text-synthrova-black/20 hidden md:block" />
          
          <div className="w-full md:w-1/2 max-w-md p-8 border border-synthrova-blue bg-synthrova-white shadow-[0_0_40px_rgba(0,188,212,0.15)] relative">
            <div className="absolute top-0 right-0 bg-synthrova-blue text-synthrova-black text-[10px] font-mono tracking-widest uppercase px-2 py-1">Optimized</div>
            <div className="text-sm font-mono tracking-widest text-synthrova-blue mb-8 uppercase text-left">E-Ledger State</div>
            <div className="flex items-center space-x-1">
              <div className="h-8 flex-1 bg-synthrova-blue border-r border-synthrova-white"></div>
              <div className="h-8 flex-1 bg-synthrova-blue border-r border-synthrova-white"></div>
              <div className="h-8 flex-1 bg-synthrova-blue border-r border-synthrova-white"></div>
              <div className="h-8 flex-1 bg-synthrova-blue border-r border-synthrova-white"></div>
              <div className="h-8 flex-1 bg-synthrova-blue"></div>
            </div>
            <div className="mt-8 text-xs font-mono text-synthrova-blue flex justify-center items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> VERIFIED CONSENSUS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchitectureSection() {
  const stack = [
    { title: "Existing Ententerprise systemsrise Systems", desc: "Your enterprise systems, Accounting, WMS, Procurement, Laboratory, and Manufacturing systems remain the operational source of truth inside your organization.", highlight: false },
    { title: "Integration Layer", desc: "Standardized REST/GraphQL APIs and secure gateways connect your internal systems to the external network.", highlight: false },
    { title: "E-Ledger", desc: "The shared compliance and transaction infrastructure.", highlight: true },
    { title: "Shared Compliance + Transaction Layer", desc: "An independent, cryptographically verified infrastructure layer that maintains a unified state of transactions across organizational boundaries.", highlight: false },
    { title: "Network Participants", desc: "Ententerprise systemsrises, Auditors, Regulators, and Supply Chain Partners interact with a synchronized, trusted record.", highlight: false }
  ];

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-center">Infrastructure Architecture</h2>
        <div className="max-w-4xl mx-auto relative">
          
          <div className="absolute left-6 md:left-[30%] top-12 bottom-12 w-[1px] bg-synthrova-white/10 hidden md:block">
            <div className="w-full h-1/4 bg-synthrova-blue/50 absolute top-[40%] animate-[pulse_4s_ease-in-out_infinite]"></div>
          </div>

          {stack.map((layer, i) => (
            <div key={i} className={`relative p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between border-b ${layer.highlight ? 'border-synthrova-blue bg-synthrova-blue/5' : 'border-synthrova-white/10'}`}>
              
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-synthrova-white/20 hidden md:block">
                {i < stack.length - 1 && <ArrowRight className="w-5 h-5 rotate-90" />}
              </div>

              <div className={`font-medium text-lg md:text-xl md:w-1/3 pr-8 ${layer.highlight ? 'text-synthrova-blue' : 'text-synthrova-white'}`}>
                {layer.title}
              </div>
              <div className="md:w-2/3 text-synthrova-white/70 font-light mt-4 md:mt-0 leading-relaxed text-lg">
                {layer.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight">Security & Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {[
            { title: "Permissioned Participation", desc: "Only authenticated, known organizations can join the network." },
            { title: "Role-Based Access", desc: "Granular control over who can write, endorse, or read transactions." },
            { title: "Controlled Visibility", desc: "Channels and private data collections ensure sensitive pricing or volumes remain confidential." },
            { title: "Transaction Provenance", desc: "Every state change is cryptographically signed by its originator." },
            { title: "Auditability", desc: "An immutable history of all events is permanently preserved." },
            { title: "Data Integrity", desc: "Consensus algorithms prevent unauthorized alteration of accepted blocks." },
          ].map((item, i) => (
            <div key={i} className="border-l border-synthrova-lightgrey/20 pl-6">
              <h3 className="text-2xl font-light mb-4">{item.title}</h3>
              <p className="text-synthrova-black/70 text-base leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FutureSection() {
  return (
    <section className="py-40 bg-synthrova-offwhite text-center border-t border-synthrova-lightgrey/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20 text-balance">
          Compliance records should become intelligence.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-mono tracking-widest uppercase text-xs md:text-sm">
          <span className="text-synthrova-black/50 px-2 py-1">Transaction</span>
          <ArrowRight className="w-4 h-4 text-synthrova-black/20" />
          <span className="text-synthrova-black/70 px-2 py-1">Evidence</span>
          <ArrowRight className="w-4 h-4 text-synthrova-black/20" />
          <span className="text-synthrova-black font-medium px-2 py-1">Pattern</span>
          <ArrowRight className="w-4 h-4 text-synthrova-blue" />
          <span className="text-synthrova-blue font-bold px-2 py-1">Risk</span>
          <ArrowRight className="w-4 h-4 text-synthrova-blue" />
          <span className="text-synthrova-blue font-bold bg-synthrova-blue/10 px-4 py-2 border border-synthrova-blue/30">Decision</span>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Start building trusted infrastructure.</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/contact" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group">
            Discuss a Pilot
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 flex items-center group">
            Request a Demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}


