import { motion, useScroll, useTransform } from "motion/react";
import { Network, Database, ShieldAlert, Cpu } from "lucide-react";
import { useRef } from "react";

export function Technology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="w-full bg-synthrova-black text-synthrova-white pt-20 min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] border border-synthrova-white/5 rounded-full" />
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[800px] h-[800px] border border-synthrova-white/5 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-synthrova-cyan font-mono text-sm tracking-widest uppercase mb-6">Core Architecture</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Systems-Level Engineering
            </h1>
            <p className="text-xl text-synthrova-grey font-light leading-relaxed mb-12">
              Synthrova is not a SaaS company. We build foundational technology—the infrastructure that sits beneath critical operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-synthrova-white/10" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <motion.div 
                  style={{ rotate }}
                  className="absolute inset-0 border border-synthrova-white/20 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synthrova-cyan" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-synthrova-white" />
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synthrova-grey" />
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synthrova-grey" />
                </motion.div>
                <div className="absolute inset-8 border border-synthrova-white/10 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-synthrova-white/5 backdrop-blur-sm border border-synthrova-white/20 flex items-center justify-center font-mono text-xs text-center p-4">
                    SYNTHROVA<br/>KERNEL
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-16">
              {[
                { icon: Network, title: "Distributed Consensus", desc: "Our core ledger technology utilizes Byzantine Fault Tolerant consensus to maintain state across untrusted networks." },
                { icon: ShieldAlert, title: "Cryptographic Verification", desc: "Zero-knowledge protocols allow entities to prove compliance without revealing proprietary business data." },
                { icon: Cpu, title: "Edge Computing", desc: "Processing telemetry at the point of origin to ensure low latency and continuous operation even in disconnected states." },
                { icon: Database, title: "Immutable Storage", desc: "Append-only data structures mathematically guarantee the historical accuracy of all system events." }
              ].map((feature, i) => (
                <div key={i}>
                  <feature.icon className="w-6 h-6 text-synthrova-cyan mb-4" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-synthrova-grey/80 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
