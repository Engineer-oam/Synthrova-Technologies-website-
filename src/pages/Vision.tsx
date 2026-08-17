import { useEffect, useRef } from "react";
import { SEO } from "../components/SEO";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

export function Vision() {
  const { hash } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full bg-synthrova-black selection:bg-synthrova-blue/30 selection:text-synthrova-black min-h-screen flex flex-col justify-center items-center relative overflow-hidden" ref={containerRef}>
      <SEO 
        title="Vision | Synthrova Technologies"
        description="The boundaries between software, physical systems, data, and decision-making are disappearing. Read the Synthrova Technologies vision for the future."
        canonical="/vision"
      />
      
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[120%] h-px bg-synthrova-white/10 rotate-12 absolute" />
        <div className="w-[120%] h-px bg-synthrova-white/10 -rotate-12 absolute" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-synthrova-white/5 -translate-x-1/2" />
      </div>

      {/* Blue Signal Scroll Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0 opacity-40">
        <motion.div 
          className="h-full bg-synthrova-blue shadow-[0_0_15px_rgba(22,143,234,0.5)]" 
          style={{ width: lineWidth }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tight text-synthrova-white leading-[1.1] text-balance mx-auto">
            Building technology for the systems that matter.
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
