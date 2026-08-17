import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Insights() {
  const articles = [
    {
      date: "Oct 24, 2026",
      category: "Architecture",
      title: "Consensus Mechanisms in High-Latency Supply Chains",
      excerpt: "Analyzing the performance of BFT protocols when node communication is throttled by extreme geographic distribution and intermittent connectivity."
    },
    {
      date: "Sep 12, 2026",
      category: "Regulation",
      title: "Cryptographic Provenance for the DSCSA",
      excerpt: "How cryptographic hashing at the item level provides mathematical guarantees for the Drug Supply Chain Security Act requirements."
    },
    {
      date: "Aug 05, 2026",
      category: "Emerging Tech",
      title: "Deterministic AI for Industrial Anomaly Detection",
      excerpt: "Why black-box machine learning models fail in regulated environments, and our approach to auditable, deterministic intelligence."
    }
  ];

  return (
    <div className="w-full bg-synthrova-white text-synthrova-black pt-20 min-h-screen">
      <section className="py-24 md:py-32 bg-synthrova-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Insights & Analysis
            </h1>
            <p className="text-xl text-synthrova-darkgrey font-light leading-relaxed">
              Technical papers, architectural decisions, and strategic analysis from the Synthrova engineering and research teams.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="aspect-[4/3] bg-synthrova-offwhite mb-6 relative overflow-hidden border border-synthrova-black/10">
                  <div className="absolute inset-0 bg-synthrova-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  {/* Placeholder for technical diagrams in articles */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-32 h-32 border border-synthrova-black/20 rounded-full"></div>
                    <div className="absolute w-24 h-24 border border-synthrova-black/20 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60 mb-4">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.category}</span>
                </div>
                
                <h3 className="text-xl font-medium mb-3 group-hover:text-synthrova-cyan transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-synthrova-darkgrey/80 font-light text-sm mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-medium">
                  Read Paper
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
