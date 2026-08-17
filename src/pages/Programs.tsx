import { motion } from "motion/react";
import { ArrowRight, Cpu, Zap, Shield, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export function Programs() {
  const programs = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: Cpu,
      status: "Active Development",
      desc: "Developing specialized, highly constrained machine learning models for anomaly detection in physical supply chains and predictive maintenance in industrial environments. Our AI systems are designed for high-stakes environments where black-box models are unacceptable.",
      details: ["Deterministic execution", "Explainable parameters", "Edge-deployed models"]
    },
    {
      id: "energy",
      title: "Energy Technology",
      icon: Zap,
      status: "Research Phase",
      desc: "Investigating distributed ledger applications for peer-to-peer energy trading and provenance tracking for green energy certificates. Building the data infrastructure required for decentralized microgrids.",
      details: ["Grid telemetry", "Verifiable generation", "Market settlement"]
    },
    {
      id: "defence",
      title: "Defence & Security",
      icon: Shield,
      status: "Strategic Review",
      desc: "Adapting E-Ledger's immutable provenance capabilities for defence logistics, ensuring component authenticity and secure supply chain visibility for critical national infrastructure.",
      details: ["Component verification", "Secure logistics", "Tamper-evident routing"]
    },
    {
      id: "future",
      title: "Future Systems",
      icon: Rocket,
      status: "Incubation",
      desc: "Long-term research into quantum-resistant cryptography for distributed ledgers and next-generation consensus algorithms for massive-scale IoT deployments.",
      details: ["Post-quantum security", "Hyper-scale consensus", "Autonomous networks"]
    }
  ];

  return (
    <div className="w-full bg-synthrova-offwhite text-synthrova-black pt-20">
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-synthrova-black/50 font-mono text-sm tracking-widest uppercase mb-6">Research & Development</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Emerging Programs
            </h1>
            <p className="text-xl text-synthrova-darkgrey font-light leading-relaxed">
              While E-Ledger operates in production today, Synthrova's engineering teams are actively developing the infrastructure for tomorrow's strategic domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                key={program.id} 
                className="bg-synthrova-white border border-synthrova-black/10 p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 border border-synthrova-black/10 flex items-center justify-center mr-6 shrink-0 bg-synthrova-offwhite">
                      <program.icon className="w-6 h-6 text-synthrova-black" />
                    </div>
                    <div>
                      <div className="flex items-center flex-wrap gap-4 mb-2">
                        <h2 className="text-2xl font-light">{program.title}</h2>
                        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 border border-synthrova-black/20 text-synthrova-black/60">
                          {program.status}
                        </span>
                      </div>
                      <p className="text-synthrova-darkgrey/80 font-light leading-relaxed max-w-2xl mt-4">
                        {program.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                        {program.details.map((detail, j) => (
                          <div key={j} className="flex items-center text-sm font-medium text-synthrova-black/70">
                            <div className="w-1 h-1 bg-synthrova-black/40 mr-2 rounded-full"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/contact" className="shrink-0 inline-flex items-center text-sm font-medium hover:text-synthrova-cyan transition-colors mt-4 md:mt-0">
                    Inquire about research
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
