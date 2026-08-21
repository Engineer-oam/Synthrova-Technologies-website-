import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Instagram } from "lucide-react";

export function Leadership() {
  const principles = [
    {
      num: "01",
      title: "Infrastructure first",
      desc: "Build foundations that can support systems, organizations and industries at scale."
    },
    {
      num: "02",
      title: "Designed for complexity",
      desc: "Technology should work within real-world regulatory, operational and institutional constraints."
    },
    {
      num: "03",
      title: "Interoperability over isolation",
      desc: "Systems should communicate rather than create another silo."
    },
    {
      num: "04",
      title: "Long-term thinking",
      desc: "Build for the systems that organizations will depend on years from now."
    },
    {
      num: "05",
      title: "Responsible technology",
      desc: "Technology serving critical environments must be designed with security, accountability and resilience in mind."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Leadership | Synthrova Technologies</title>
        <meta name="description" content="Meet the leadership behind Synthrova Technologies and the team building technology infrastructure for regulated industries and what comes next." />
      </Helmet>
      
      <main className="w-full bg-[#F3F3F1] selection:bg-synthrova-blue selection:text-synthrova-white min-h-screen">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90vh] bg-[#0A0A0A] text-[#FFFFFF] px-6 lg:px-8 flex flex-col justify-end pb-24 overflow-hidden pt-32">
          {/* Subtle Background Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
             <motion.div 
               animate={{ y: [0, -100] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-full h-[200%] border-l border-synthrova-blue/20 left-1/4"
             />
             <motion.div 
               animate={{ y: [0, 100] }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute w-full h-[200%] border-l border-synthrova-blue/20 left-2/4"
             />
             <motion.div 
               animate={{ y: [0, -100] }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute w-full h-[200%] border-l border-synthrova-blue/20 left-3/4"
             />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[10px] tracking-widest uppercase font-mono text-synthrova-lightgrey/60 mb-6"
              >
                Leadership / Synthrova Technologies
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.1] tracking-tight mb-8"
              >
                The people building what comes next.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl md:text-2xl text-synthrova-lightgrey font-light text-balance max-w-2xl"
              >
                Synthrova is being built by people focused on technology infrastructure for complex, regulated and mission-critical environments.
              </motion.p>
            </div>
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="absolute bottom-8 left-6 lg:left-8 text-[10px] tracking-widest uppercase font-mono text-synthrova-white/40"
          >
             Scroll to explore ↓
          </motion.div>
        </section>

        {/* INTRODUCTION SECTION */}
        <section className="w-full bg-[#F3F3F1] text-[#0A0A0A] py-32 px-6 lg:px-8 border-b border-[#0A0A0A]/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/4">
               <span className="text-[10px] tracking-widest uppercase font-mono text-[#0A0A0A]/60">
                 Leadership
               </span>
            </div>
            <div className="w-full md:w-3/4 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8 text-balance">
                Building technology requires more than technical ambition. It requires a clear understanding of the systems, institutions and industries that technology must ultimately serve.
              </h2>
              <p className="text-lg md:text-xl text-[#0A0A0A]/70 font-light leading-relaxed max-w-2xl text-balance">
                Synthrova develops technology infrastructure across regulated industries and is expanding into emerging technology domains. We believe that technology should integrate with the real world rather than ignoring its constraints.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDER / CEO SECTION */}
        <section className="w-full bg-[#F3F3F1] text-[#0A0A0A] py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <article className="flex flex-col lg:flex-row gap-16 lg:gap-32">
              {/* Left: Portrait */}
              <div className="w-full lg:w-5/12 shrink-0">
                <div className="aspect-[3/4] bg-[#E7E7E4] relative overflow-hidden group">
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    src="https://res.cloudinary.com/ocra7s5x/image/upload/v1787316113/file_00000000a188720ba3f1f12093b4c466.png"
                    alt="Om Pandey"
                    className="w-full h-full object-cover filter grayscale mix-blend-multiply"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[#0A0A0A]/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                </div>
              </div>

              {/* Right: Bio */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <div className="text-[10px] tracking-widest uppercase font-mono text-synthrova-blue mb-4">
                  Founder & Chief Executive Officer
                </div>
                <h3 className="text-5xl md:text-6xl font-light mb-8">
                  Om Pandey
                </h3>
                <p className="text-2xl md:text-3xl font-light text-[#0A0A0A]/80 leading-snug mb-10 text-balance">
                  Building Synthrova around technology infrastructure for regulated industries and the next generation of digital systems.
                </p>
                <div className="prose prose-lg text-[#0A0A0A]/70 font-light prose-p:leading-relaxed mb-12">
                  <p>
                    With a background in technology and a focus on enterprise infrastructure, Om Pandey founded Synthrova Technologies to address the growing complexity of systems in regulated environments. His entrepreneurial journey has been defined by a commitment to building tools that solve foundational institutional challenges rather than surface-level problems.
                  </p>
                  <p>
                    Om oversees Synthrova's strategic direction, focusing on the intersection of mission-critical environments and emerging digital systems. His long-term vision is to position Synthrova as a key technology partner for industries that require uncompromising security, resilience, and accountability.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="https://www.linkedin.com/in/ompandey0107" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-medium tracking-wide hover:text-synthrova-blue transition-colors group">
                    <Linkedin className="w-5 h-5" />
                    <span className="uppercase text-[10px] tracking-widest font-mono">LinkedIn Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://www.instagram.com/ompandey.er?igsi=c21tejE3Nzlubzlk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-medium tracking-wide hover:text-synthrova-blue transition-colors group">
                    <Instagram className="w-5 h-5" />
                    <span className="uppercase text-[10px] tracking-widest font-mono">Instagram Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FOUNDER'S VISION */}
        <section className="w-full bg-[#0A0A0A] text-[#FFFFFF] py-40 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             {/* Data flow visualisation */}
             <motion.div 
               animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="w-full h-full"
               style={{
                 backgroundImage: "radial-gradient(circle at center, #0142F4 1px, transparent 1px)",
                 backgroundSize: "40px 40px"
               }}
             />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-32">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-light leading-tight text-balance">
                Technology should become infrastructure — not another layer of complexity.
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              <p className="text-xl font-light text-[#E7E7E4]/90">
                Synthrova's philosophy is rooted in long-term institutional impact:
              </p>
              <ul className="space-y-4 text-[#E7E7E4]/70 font-light text-lg">
                <li className="flex gap-4"><span className="text-synthrova-blue font-mono">—</span> Build infrastructure rather than isolated features.</li>
                <li className="flex gap-4"><span className="text-synthrova-blue font-mono">—</span> Connect organizations, data and systems.</li>
                <li className="flex gap-4"><span className="text-synthrova-blue font-mono">—</span> Design for regulated and mission-critical environments.</li>
                <li className="flex gap-4"><span className="text-synthrova-blue font-mono">—</span> Build technology that can evolve across industries.</li>
                <li className="flex gap-4"><span className="text-synthrova-blue font-mono">—</span> Develop with long-term institutional impact in mind.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LEADERSHIP PRINCIPLES */}
        <section className="w-full bg-[#F3F3F1] text-[#0A0A0A] py-32 px-6 lg:px-8 border-b border-[#0A0A0A]/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
            <div className="w-full md:w-1/4">
               <h2 className="text-3xl font-light sticky top-32">How we build</h2>
            </div>
            <div className="w-full md:w-3/4 flex flex-col">
              {principles.map((principle, index) => (
                <motion.div 
                  key={principle.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group py-12 border-b border-[#0A0A0A]/10 last:border-0 flex flex-col md:flex-row gap-6 md:gap-16 items-start"
                >
                  <div className="text-[10px] tracking-widest font-mono text-synthrova-blue shrink-0 pt-2">
                    {principle.num}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-synthrova-blue transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-lg text-[#0A0A0A]/70 font-light text-balance">
                      {principle.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM & DIRECTORS */}
        <section className="w-full bg-[#E7E7E4] text-[#0A0A0A] py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-16">Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
               {/* Team members would be dynamically mapped here. Showing Founder as requested if only one is available. */}
               <div className="flex flex-col group cursor-pointer">
                  <div className="aspect-[3/4] bg-[#F3F3F1] relative overflow-hidden mb-6">
                    <motion.img 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      src="https://res.cloudinary.com/ocra7s5x/image/upload/v1787316113/file_00000000a188720ba3f1f12093b4c466.png"
                      alt="Om Pandey"
                      className="w-full h-full object-cover filter grayscale mix-blend-multiply"
                    />
                  </div>
                  <div className="text-[10px] tracking-widest uppercase font-mono text-synthrova-blue mb-2">
                    Founder & Chief Executive Officer
                  </div>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-synthrova-blue transition-colors">Om Pandey</h3>
               </div>
               
               {/* Placeholder for future entries */}
               {/* 
               <div className="flex flex-col group cursor-pointer">
                  <div className="aspect-[3/4] bg-[#0A0A0A]/5 relative overflow-hidden mb-6 flex items-center justify-center">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[#0A0A0A]/40">Position Configurable</span>
                  </div>
                  <div className="text-[10px] tracking-widest uppercase font-mono text-synthrova-blue mb-2">
                    Chief Technology Officer
                  </div>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-synthrova-blue transition-colors">TBD</h3>
               </div>
               */}
            </div>

            {/* DIRECTORS / ADVISORS (Optional / Hidden until populated) */}
            {/* 
            <div className="mt-32 border-t border-[#0A0A0A]/10 pt-16">
              <h2 className="text-3xl font-light mb-12">Directors & Advisors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                // Map future advisors here
              </div>
            </div>
            */}
          </div>
        </section>

        {/* COMPANY MISSION */}
        <section className="w-full bg-[#FFFFFF] text-[#0A0A0A] py-40 px-6 lg:px-8 border-t border-[#0A0A0A]/10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-[10px] tracking-widest uppercase font-mono text-synthrova-blue mb-8">
              Future Initiatives
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-12 text-balance">
              Building infrastructure for what comes next.
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/70 font-light leading-relaxed max-w-3xl text-balance mb-16">
              Our current work begins with compliance and technology infrastructure for regulated industries, while we actively explore future technology initiatives across AI, Energy, Defence, Digital Infrastructure, and other mission-critical technology domains.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#0A0A0A] text-[#FFFFFF] py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-light mb-6">Build what comes next with us.</h2>
              <p className="text-xl text-synthrova-lightgrey font-light text-balance">
                Whether you're building a regulated technology system, exploring an infrastructure challenge or looking for a technology partner, start a conversation with Synthrova.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFFFFF] text-[#0A0A0A] text-sm tracking-widest font-mono uppercase hover:bg-synthrova-lightgrey transition-colors group"
              >
                Talk to Synthrova
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#FFFFFF]/20 text-[#FFFFFF] text-sm tracking-widest font-mono uppercase hover:bg-[#FFFFFF]/5 transition-colors group"
              >
                Explore our technology
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
