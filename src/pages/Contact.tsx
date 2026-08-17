import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full bg-synthrova-offwhite text-synthrova-black pt-20 min-h-screen">
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
                Initiate Dialogue
              </h1>
              <p className="text-xl text-synthrova-darkgrey font-light leading-relaxed mb-12">
                Engage with our engineering and deployment teams to discuss architectural requirements for your infrastructure.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-synthrova-darkgrey/60 mb-2">Platform Inquiries</h3>
                  <p className="font-medium text-lg">platform@synthrova.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-synthrova-darkgrey/60 mb-2">Research & Emerging Programs</h3>
                  <p className="font-medium text-lg">research@synthrova.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-synthrova-darkgrey/60 mb-2">General / Corporate</h3>
                  <p className="font-medium text-lg">contact@synthrova.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-synthrova-white border border-synthrova-black/10 p-8 md:p-12"
            >
              <h2 className="text-2xl font-light mb-8">Secure Communication</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60">Name</label>
                    <input type="text" className="w-full border-b border-synthrova-black/20 bg-transparent py-2 focus:outline-none focus:border-synthrova-cyan transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60">Organization</label>
                    <input type="text" className="w-full border-b border-synthrova-black/20 bg-transparent py-2 focus:outline-none focus:border-synthrova-cyan transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60">Email Address</label>
                  <input type="email" className="w-full border-b border-synthrova-black/20 bg-transparent py-2 focus:outline-none focus:border-synthrova-cyan transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60">Subject Area</label>
                  <select className="w-full border-b border-synthrova-black/20 bg-transparent py-2 focus:outline-none focus:border-synthrova-cyan transition-colors appearance-none">
                    <option>E-Ledger Deployment</option>
                    <option>Artificial Intelligence</option>
                    <option>Energy Technology</option>
                    <option>Defence & Security</option>
                    <option>Other / General</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-synthrova-darkgrey/60">Message</label>
                  <textarea rows={4} className="w-full border-b border-synthrova-black/20 bg-transparent py-2 focus:outline-none focus:border-synthrova-cyan transition-colors resize-none"></textarea>
                </div>
                
                <button className="w-full flex items-center justify-center py-4 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-cyan transition-colors mt-8 group">
                  Transmit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
