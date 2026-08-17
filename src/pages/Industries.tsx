import { motion } from "motion/react";
import { ArrowRight, Beaker, Building2, Package, Wheat, Scale, Scan } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    icon: Beaker,
    desc: "End-to-end provenance for active pharmaceutical ingredients (API) and finished dosages. Combating counterfeits and ensuring cold-chain integrity through immutable tracking."
  },
  {
    id: "government",
    title: "Government & Regulation",
    icon: Building2,
    desc: "Infrastructure for regulatory bodies to audit, monitor, and enforce compliance across complex private-sector supply chains in real-time."
  },
  {
    id: "excise",
    title: "Excise & Controlled Goods",
    icon: Scale,
    desc: "Tax revenue protection and diversion prevention for highly taxed commodities, utilizing cryptographic stamping and serialized tracking."
  },
  {
    id: "fmcg",
    title: "FMCG",
    icon: Package,
    desc: "High-throughput traceability for fast-moving consumer goods, balancing volume demands with granular, item-level visibility."
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: Wheat,
    desc: "Farm-to-fork visibility ensuring food safety, organic certification provenance, and fair-trade verification."
  },
  {
    id: "other",
    title: "Other Regulated Industries",
    icon: Scan,
    desc: "Custom deployment of E-Ledger and emerging technologies for sectors requiring strict adherence to compliance frameworks."
  }
];

export function Industries() {
  return (
    <div className="w-full bg-synthrova-white text-synthrova-black pt-20">
      {/* Header */}
      <section className="py-24 md:py-32 bg-synthrova-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Regulated Industries
            </h1>
            <p className="text-xl text-synthrova-darkgrey font-light leading-relaxed">
              We engineer systems for domains where accountability is mandatory. Our infrastructure provides the foundation for trust in complex, multi-stakeholder environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-synthrova-black/10 border border-synthrova-black/10">
            {industries.map((industry, i) => (
              <div key={i} className="bg-synthrova-white p-12 lg:p-16 group hover:bg-synthrova-offwhite transition-colors flex flex-col h-full">
                <industry.icon className="w-8 h-8 text-synthrova-black mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-light mb-4">{industry.title}</h3>
                <p className="text-synthrova-darkgrey/70 font-light leading-relaxed flex-grow">
                  {industry.desc}
                </p>
                <div className="mt-8 pt-8 border-t border-synthrova-black/10">
                  <Link to={`/contact?industry=${industry.id}`} className="text-sm font-medium flex items-center hover:opacity-70 transition-opacity">
                    Discuss deployment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
