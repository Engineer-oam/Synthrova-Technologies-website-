import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, Building2, Truck, FileSearch, ShieldCheck, Cpu, Landmark, Factory, Network, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HeroNetworkSection() {
  const nodes = [
    { name: "Enterprise", icon: Building2, angle: 0 },
    { name: "Supplier", icon: Factory, angle: 45 },
    { name: "Distributor", icon: Truck, angle: 90 },
    { name: "Auditor", icon: FileSearch, angle: 135 },
    { name: "Regulator", icon: ShieldCheck, angle: 180 },
    { name: "Tech Provider", icon: Cpu, angle: 225 },
    { name: "Government", icon: Landmark, angle: 270 },
    { name: "Infrastructure", icon: Network, angle: 315 },
  ];

  return (
    <section className="relative min-h-[90vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-tight">
            Trust becomes more valuable when systems can share it.
          </h1>
        </motion.div>

        {/* Interactive Network Diagram */}
        <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center mt-12 mb-12">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-40 pointer-events-none" viewBox="0 0 100 100">
            {nodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const x2 = 50 + 40 * Math.cos(rad);
              const y2 = 50 + 40 * Math.sin(rad);
              return (
                <g key={`line-${i}`}>
                  <line x1="50" y1="50" x2={x2} y2={y2} stroke="#00BCD4" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[dash_10s_linear_infinite]" />
                  <circle cx={x2} cy={y2} r="1" fill="#00BCD4" className="animate-pulse" />
                </g>
              );
            })}
          </svg>
          
          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: -20;
              }
            }
          `}</style>

          {/* Orbiting rings */}
          <div className="absolute w-[80%] h-[80%] rounded-full border border-synthrova-blue/20 animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-[60%] h-[60%] rounded-full border border-synthrova-blue/10 animate-[spin_30s_linear_infinite_reverse]"></div>

          {/* Central Node */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-synthrova-blue/10 border-2 border-synthrova-blue flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(0,188,212,0.3)] z-20 relative"
          >
            <div className="absolute inset-0 rounded-full bg-synthrova-blue/20 animate-ping opacity-30"></div>
            <span className="font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold text-synthrova-white text-center">
              Synthrova
            </span>
          </motion.div>

          {/* Peripheral Nodes */}
          {nodes.map((node, i) => (
            <div
              key={node.name}
              className="absolute w-16 h-16 md:w-20 md:h-20 -ml-8 -mt-8 md:-ml-10 md:-mt-10 bg-synthrova-black border border-synthrova-white/20 rounded-full flex flex-col items-center justify-center text-synthrova-white/70 hover:text-synthrova-blue hover:border-synthrova-blue transition-colors z-10 cursor-pointer shadow-lg group"
              style={{
                top: `calc(50% + ${40 * Math.sin((node.angle * Math.PI) / 180)}%)`,
                left: `calc(50% + ${40 * Math.cos((node.angle * Math.PI) / 180)}%)`,
              }}
            >
              <node.icon className="w-5 h-5 md:w-6 md:h-6 mb-1" />
              <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-center px-1">
                {node.name}
              </span>
              
              {/* Data packet animation */}
              <div 
                className="absolute w-2 h-2 bg-synthrova-blue rounded-full hidden group-hover:block"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `flyToCenter 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`
                }}
              />
            </div>
          ))}
          
          <style>{`
            @keyframes flyToCenter {
              0% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { opacity: 0; transform: translate(calc(-50% - var(--x, 0px)), calc(-50% - var(--y, 0px))) scale(0.5); }
            }
          `}</style>
        </div>
        
        <div className="font-mono text-xs tracking-widest text-synthrova-blue/70 uppercase">
          Controlled Information Flows
        </div>
      </div>
    </section>
  );
}

const stakeholders = [
  {
    id: "enterprise",
    title: "Enterprise",
    problem: "Multiple systems and counterparties.",
    value: "Shared transaction visibility and reduced reconciliation friction.",
    icon: Building2
  },
  {
    id: "auditor",
    title: "Auditor",
    problem: "Fragmented evidence.",
    value: "Structured and traceable records.",
    icon: FileSearch
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    problem: "Disconnected transactions.",
    value: "Improved traceability and transaction integrity.",
    icon: Truck
  },
  {
    id: "regulator",
    title: "Regulator",
    problem: "Limited visibility across distributed activity.",
    value: "Potential access to trusted regulatory evidence and ecosystem-level intelligence.",
    icon: ShieldCheck,
    note: "Note: Synthrova provides technical capabilities for oversight; this does not imply existing government usage."
  }
];

function StakeholdersSection() {
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-synthrova-black/10 border border-synthrova-lightgrey/10">
          {stakeholders.map((stakeholder) => (
            <div key={stakeholder.id} className="bg-synthrova-white p-10 md:p-14 group">
              <stakeholder.icon className="w-8 h-8 text-synthrova-black/30 mb-10 group-hover:text-synthrova-blue transition-colors" />
              <h3 className="text-3xl font-light mb-8 tracking-tight">{stakeholder.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-synthrova-black/40 mb-2">The Problem</div>
                  <p className="text-lg font-light text-synthrova-black/70 border-l-2 border-red-500/30 pl-4">{stakeholder.problem}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-synthrova-black/40 mb-2">The Value</div>
                  <p className="text-lg font-light text-synthrova-black border-l-2 border-synthrova-blue pl-4">{stakeholder.value}</p>
                </div>
              </div>
              
              {stakeholder.note && (
                <div className="mt-8 p-4 bg-synthrova-offwhite text-xs text-synthrova-black/60 border border-synthrova-lightgrey/5">
                  {stakeholder.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologyPartnersSection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black border-t border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Cpu className="w-10 h-10 text-synthrova-blue mb-8" />
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              Technology Partners
            </h2>
            <p className="text-xl font-light text-synthrova-black/70 leading-relaxed mb-8 text-balance">
              Synthrova is designed for deep interoperability. We provide robust APIs, SDKs, and integration frameworks to connect existing enterprise architectures with verified ledgers.
            </p>
            <ul className="space-y-4 font-light text-lg">
              <li className="flex items-center"><Zap className="w-5 h-5 text-synthrova-blue mr-3" /> REST & GraphQL APIs</li>
              <li className="flex items-center"><Zap className="w-5 h-5 text-synthrova-blue mr-3" /> Event-driven webhook integration</li>
              <li className="flex items-center"><Zap className="w-5 h-5 text-synthrova-blue mr-3" /> ERP and WMS connectivity adapters</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-synthrova-black p-8 text-synthrova-white font-mono text-sm overflow-hidden shadow-2xl">
              <div className="text-synthrova-white/40 mb-4 border-b border-synthrova-white/20 pb-4">POST /api/v1/network/connect</div>
              <div className="text-synthrova-blue mb-2">{"{"}</div>
              <div className="pl-4 text-synthrova-white/70">
                <span className="text-pink-400">"partner_id"</span>: <span className="text-green-400">"org_7f8a9b"</span>,<br/>
                <span className="text-pink-400">"system_type"</span>: <span className="text-green-400">"erp_core"</span>,<br/>
                <span className="text-pink-400">"permissions"</span>: [ <span className="text-green-400">"write_ledger"</span>, <span className="text-green-400">"read_trace"</span> ],<br/>
                <span className="text-pink-400">"signature"</span>: <span className="text-green-400">"0x..."</span>
              </div>
              <div className="text-synthrova-blue mt-2">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalSection() {
  return (
    <section className="py-40 bg-synthrova-black text-synthrova-white text-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 text-balance leading-tight">
          Synthrova is not another isolated system inside the ecosystem.
        </h2>
        <p className="text-2xl md:text-3xl text-synthrova-blue font-light tracking-wide text-balance">
          It is designed to connect the ecosystem.
        </p>
      </div>
    </section>
  )
}

export function Ecosystem() {
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Ecosystem | Synthrova Technologies"
        description="Synthrova Technologies builds interoperable technology ecosystems that align incentives across complex, multi-stakeholder supply chains."
        canonical="/ecosystem"
      />
      
      <HeroNetworkSection />
      <StakeholdersSection />
      <TechnologyPartnersSection />
      <FinalSection />
    </div>
  );
}
