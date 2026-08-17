import { motion } from "motion/react";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Company() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="w-full bg-synthrova-white text-synthrova-black pt-20 min-h-screen">
      <section className="py-24 md:py-32 bg-synthrova-black text-synthrova-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Synthrova Technologies
            </h1>
            <p className="text-xl text-synthrova-grey font-light leading-relaxed">
              We are a deep-technology engineering firm headquartered in India, building mission-critical infrastructure for the systems that matter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-2xl font-light mb-6">Our Mandate</h2>
              <p className="text-synthrova-darkgrey/80 font-light leading-relaxed mb-6">
                Synthrova was founded on a singular premise: the software systems underlying critical physical infrastructure are fundamentally fragile. 
              </p>
              <p className="text-synthrova-darkgrey/80 font-light leading-relaxed mb-6">
                Rather than building marginal workflow improvements, we engineer foundational platforms capable of guaranteeing state, enforcing compliance mathematically, and operating continuously under duress.
              </p>
              <p className="text-synthrova-darkgrey/80 font-light leading-relaxed">
                We hire specialized talent across cryptography, distributed systems, machine learning, and systems engineering to solve asymmetric technical challenges.
              </p>
            </div>
            
            <div className="bg-synthrova-offwhite p-12 border border-synthrova-black/10">
              <h2 className="text-2xl font-light mb-8">Headquarters</h2>
              <div className="flex items-start mb-6">
                <MapPin className="w-5 h-5 mr-4 mt-1 text-synthrova-darkgrey/60 shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Synthrova Technologies Pvt. Ltd.</h3>
                  <p className="text-sm text-synthrova-darkgrey/70">India</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-4 mt-1 text-synthrova-darkgrey/60 shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Direct Inquiries</h3>
                  <a href="mailto:contact@synthrova.com" className="text-sm text-synthrova-darkgrey/70 hover:text-synthrova-cyan transition-colors">
                    contact@synthrova.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="py-24 bg-synthrova-offwhite border-t border-synthrova-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-light mb-6">Careers</h2>
            <p className="text-synthrova-darkgrey/80 font-light leading-relaxed">
              We are actively recruiting exceptional engineers, researchers, and systems architects. If you are interested in building infrastructure for regulated domains, review our open roles.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { role: "Distributed Systems Engineer", team: "E-Ledger Core", loc: "Remote / India" },
              { role: "Applied Cryptography Researcher", team: "Future Systems", loc: "Remote" },
              { role: "Machine Learning Engineer (Deterministic Systems)", team: "AI Programs", loc: "India" },
              { role: "Deployment Architect", team: "Customer Engineering", loc: "Remote" }
            ].map((job, i) => (
              <div key={i} className="bg-synthrova-white border border-synthrova-black/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between group hover:border-synthrova-cyan transition-colors cursor-pointer">
                <div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-synthrova-cyan transition-colors">{job.role}</h3>
                  <div className="flex items-center text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60">
                    <span>{job.team}</span>
                    <span className="mx-3">•</span>
                    <span>{job.loc}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-synthrova-black/30 group-hover:text-synthrova-cyan transition-colors mt-4 sm:mt-0" />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-synthrova-darkgrey/70 mb-4">Don't see a precise fit? We always make room for exceptional talent.</p>
            <a href="mailto:careers@synthrova.com" className="inline-flex items-center text-sm font-medium hover:text-synthrova-cyan transition-colors">
              careers@synthrova.com
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
