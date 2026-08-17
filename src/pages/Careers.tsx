import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1a1a_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            Careers
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Build technology that matters.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed text-balance">
            Work on difficult problems across infrastructure, intelligence, regulated industries and emerging technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AreasSection() {
  const areas = [
    "Engineering",
    "AI & Data",
    "Product",
    "Enterprise Technology",
    "Supply Chain",
    "Regulatory Technology",
    "Energy Technology",
    "Defence Technology",
    "Design",
    "Business Development",
    "Research"
  ];

  return (
    <section className="py-24 bg-synthrova-white text-synthrova-black border-b border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="font-mono text-xs tracking-widest text-synthrova-black/40 uppercase mb-12">Disciplinary Areas</div>
        <div className="flex flex-wrap gap-4">
          {areas.map((area, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              key={area} 
              className="px-6 py-4 border border-synthrova-lightgrey/10 bg-synthrova-offwhite hover:border-synthrova-blue hover:bg-synthrova-blue/5 transition-colors cursor-default"
            >
              <span className="text-lg font-light">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CultureSection() {
  const statements = [
    "Think in systems.",
    "Build for reality.",
    "Earn trust through execution.",
    "Solve problems worth solving.",
    "Stay curious."
  ];

  return (
    <section className="py-40 bg-synthrova-offwhite text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="font-mono text-xs tracking-widest text-synthrova-black/40 uppercase mb-20 text-center">Our Culture</div>
        <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto text-center">
          {statements.map((statement, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-synthrova-black/40 hover:text-synthrova-blue transition-colors duration-500">
                {statement}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PositionsSection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black border-t border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Open Positions</h2>
            <p className="text-xl font-light text-synthrova-black/60">Join our interdisciplinary engineering teams.</p>
          </div>
        </div>

        <div className="bg-synthrova-offwhite border border-synthrova-lightgrey/10 p-16 md:p-24 text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-light mb-6">No current openings.</h3>
            <p className="text-synthrova-black/70 font-light leading-relaxed mb-10">
              We are not actively recruiting for specific roles at this moment. However, we are always open to connecting with exceptional talent whose expertise aligns with our mission.
            </p>
            <a href="mailto:careers@synthrova.com" className="inline-flex items-center px-8 py-4 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors duration-500 group">
              Send your profile
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-16 text-balance leading-tight">
          The difficult problems are usually the interesting ones.
        </h2>
        <a href="mailto:careers@synthrova.com" className="inline-flex items-center text-xl font-medium hover:opacity-70 transition-opacity group border-b-2 border-synthrova-lightgrey pb-1">
          Join Synthrova
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </section>
  )
}

export function Careers() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full selection:bg-synthrova-black selection:text-synthrova-blue bg-synthrova-white min-h-screen">
      <SEO 
        title="Careers | Synthrova Technologies"
        description="Work with Synthrova Technologies on difficult engineering problems across infrastructure, intelligence, regulated industries, and emerging technology."
        canonical="/careers"
      />
      
      <HeroSection />
      <AreasSection />
      <CultureSection />
      <PositionsSection />
      <FinalSection />
    </div>
  );
}
