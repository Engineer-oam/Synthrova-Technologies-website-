import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, ChevronDown, Cpu, Network, Database, Shield, Fingerprint, Activity, Layers, Workflow, Bot, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1a1a_0%,transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            <Cpu className="w-4 h-4 mr-3" />
            Core Technology
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Built from first principles.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed text-balance">
            Synthrova combines interoperability, distributed infrastructure, identity, security, data and intelligence into systems designed for complex environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { id: "DATA", desc: "Raw ingestion from enterprise systems, WMS, APIs." },
    { id: "SYSTEMS", desc: "Cryptographic verification and ledger anchoring." },
    { id: "INTELLIGENCE", desc: "Pattern recognition and predictive modeling." },
    { id: "DECISION", desc: "Automated logic and smart contracts." },
    { id: "ACTION", desc: "Actuation, alerts, and downstream integration." }
  ];

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white border-b border-synthrova-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Systems Architecture</h2>
          <p className="text-lg text-synthrova-white/60 font-light max-w-2xl mx-auto text-balance">
            A continuous stack transforming fragmented organizational data into intelligent, verified action.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative flex flex-col items-center space-y-12">
          {nodes.map((node, i) => (
            <div key={node.id} className="w-full flex flex-col items-center relative z-10 group">
              <button 
                onClick={() => setActiveNode(i)}
                className={`w-full max-w-md p-6 border text-center transition-all duration-500 relative overflow-hidden ${activeNode === i ? 'border-synthrova-blue bg-synthrova-blue/5' : 'border-synthrova-white/20 hover:border-synthrova-white/40 bg-synthrova-black'}`}
              >
                {/* Active Indicator Glow */}
                <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-500 ${activeNode === i ? 'bg-synthrova-blue' : 'bg-transparent'}`} />
                
                <h3 className={`font-mono tracking-widest text-lg uppercase transition-colors duration-500 ${activeNode === i ? 'text-synthrova-white' : 'text-synthrova-white/60 group-hover:text-synthrova-white'}`}>
                  {node.id}
                </h3>
                <p className={`mt-4 text-sm font-light transition-colors duration-500 ${activeNode === i ? 'text-synthrova-blue' : 'text-synthrova-white/40'}`}>
                  {node.desc}
                </p>
              </button>
              
              {/* Connector */}
              {i < nodes.length - 1 && (
                <div className="h-12 w-px bg-synthrova-white/10 my-4 relative">
                  {/* Signal traveling down */}
                  {activeNode === i && (
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-synthrova-blue -translate-x-1/2 animate-[verticalFlow_4s_linear_infinite]" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function EmergingTechSection() {
  const domains = [
    { title: "AI", desc: "Developing intelligent systems to analyze verified, tamper-proof datasets for anomalies, forecasting, and optimization in regulated environments." },
    { title: "Energy", desc: "Exploring decentralized energy grid management, trading verification, and infrastructure for transition technologies." },
    { title: "Defence", desc: "Researching secure, partitioned communication and logistics networks that require absolute operational integrity and supply chain provenance." },
    { title: "Advanced Digital Infrastructure", desc: "Next-generation data routing, processing, and storage paradigms designed for absolute sovereignty and high availability." }
  ];

  return (
    <section className="py-24 bg-synthrova-black text-synthrova-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">What Comes Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {domains.map((domain) => (
            <div key={domain.title} className="p-8 border border-synthrova-white/20">
              <h3 className="text-2xl font-light mb-4">{domain.title}</h3>
              <p className="text-synthrova-white/70 leading-relaxed font-light">{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainsSection() {
  const [active, setActive] = useState(0);
  
  const domains = [
    { name: "Interoperability", desc: "Connect systems without forcing complete replacement. Our architecture embraces heterogeneous enterprise environments, bridging legacy systems with modern verifiable networks.", icon: Network },
    { name: "Distributed Infrastructure", desc: "Build trusted systems for multi-party environments. We engineer ledger structures that guarantee state consensus across untrusted organizational boundaries.", icon: Layers },
    { name: "Identity", desc: "Control organizations, users and permissions. Cryptographic identity models ensure that every transaction is strictly tied to an authenticated actor with verifiable authority.", icon: Fingerprint },
    { name: "Data", desc: "Create structured, reliable data foundations. Off-chain and on-chain storage paradigms are optimized to handle massive operational payloads alongside lightweight cryptographic proofs.", icon: Database },
    { name: "Intelligence", desc: "Apply analytics and AI where trusted context exists. Machine learning models operating on cryptographically verified datasets eliminate the 'garbage in' problem.", icon: Activity },
    { name: "Automation", desc: "Connect intelligence to workflows and action. Smart contract logic and event-driven architectures execute business rules autonomously based on verified state changes.", icon: Workflow },
    { name: "Security", desc: "Design security into the architecture. Zero-trust principles, granular role-based access control, and advanced cryptographic protocols safeguard data at rest and in transit.", icon: Shield },
    { name: "Autonomous Systems", desc: "Explore future technologies where software interacts with physical systems. Connecting IoT telemetry directly to immutable ledgers for unfalsifiable operational truth.", icon: Bot }
  ];

  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">Technology Domains</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="space-y-1">
              {domains.map((domain, i) => (
                <button
                  key={domain.name}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 transition-all border-l-2 flex items-center justify-between group ${active === i ? 'border-synthrova-blue bg-synthrova-white shadow-sm' : 'border-transparent hover:border-synthrova-lightgrey/20 hover:bg-synthrova-black/5'}`}
                >
                  <span className={`font-medium ${active === i ? 'text-synthrova-black' : 'text-synthrova-black/60'}`}>
                    {domain.name}
                  </span>
                  <domain.icon className={`w-4 h-4 ${active === i ? 'text-synthrova-blue' : 'text-synthrova-black/30 group-hover:text-synthrova-black/50'}`} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-synthrova-white border border-synthrova-lightgrey/10 p-12 lg:p-16 min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-synthrova-blue/10 border border-synthrova-blue/30 flex items-center justify-center mb-8">
                    {(() => {
                      const Icon = domains[active].icon;
                      return <Icon className="w-8 h-8 text-synthrova-blue" />;
                    })()}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light mb-6 tracking-tight">{domains[active].name}</h3>
                  <p className="text-xl text-synthrova-black/70 font-light leading-relaxed text-balance">
                    {domains[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnicalDetailsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const details = [
    { name: "APIs", content: "Comprehensive REST and GraphQL endpoints facilitate seamless integration with existing enterprise systems, allowing bidirectional data flow without requiring architectural overhauls." },
    { name: "Event Architecture", content: "Built on high-throughput message brokers and sequential event logging to guarantee exactly-once delivery and strict chronological ordering of all system transactions." },
    { name: "Data Infrastructure", content: "A hybrid approach combining off-chain document and blob storage for massive payloads, anchored by cryptographic hashes stored immutably on-chain." },
    { name: "Identity", content: "Utilizes PKI-based cryptographic identity frameworks, leveraging X.509 certificates to cryptographically tie all actions to verified network participants." },
    { name: "Access Control", content: "Granular Role-Based Access Control (RBAC) and private data collections ensure that confidential pricing, volumes, and trade secrets remain visible only to authorized counterparties." },
    { name: "Ledger Infrastructure", content: "Hyperledger Fabric provides the foundation for our permissioned distributed ledger, running specialized smart contracts (chaincode) to enforce business logic and consensus without native cryptocurrency." },
    { name: "Analytics", content: "Real-time aggregation pipelines process verified state changes, delivering instant operational visibility and actionable metrics to organizational dashboards." },
    { name: "AI", content: "Pattern recognition and machine learning models analyze verified, tamper-proof datasets to identify supply chain anomalies, forecast delays, and optimize network flow." },
    { name: "Infrastructure", content: "Containerized microservices orchestrated via Kubernetes enable horizontal scaling, high availability, and multi-cloud or on-premise deployment capabilities." },
    { name: "Security", content: "Strict zero-trust architecture principles, mutual TLS authentication, and advanced encryption protocols protect data both in transit and at rest." }
  ];

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Technical Specifications</h2>
          <p className="text-lg text-synthrova-white/60 font-light">Deep-dive into the stack powering Synthrova infrastructure.</p>
        </div>

        <div className="border-t border-synthrova-white/20">
          {details.map((detail, i) => (
            <div key={detail.name} className="border-b border-synthrova-white/20">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-synthrova-blue transition-colors"
              >
                <span className="font-mono text-sm tracking-widest uppercase">{detail.name}</span>
                {openIdx === i ? <ChevronDown className="w-5 h-5 text-synthrova-blue" /> : <ArrowRight className="w-5 h-5 text-synthrova-white/40" />}
              </button>
              
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-synthrova-white/70 font-light leading-relaxed pr-12 text-lg text-balance">
                      {detail.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
          Ready to review the architecture?
        </h2>
        <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors duration-500 group">
          Talk to our technology team
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export function Technology() {
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Technology Infrastructure | Synthrova Technologies"
        description="Synthrova develops technology across data integration, interoperability, distributed systems, artificial intelligence, and automated analytics."
        canonical="/technology"
      />
      
      <HeroSection />
      <ArchitectureSection />
      <DomainsSection />
      <EmergingTechSection />
      <TechnicalDetailsSection />
      <FinalCTASection />
    </div>
  );
}
