import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  
  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-white">
      <SEO 
        title="Contact Synthrova Technologies"
        description="Contact Synthrova Technologies to discuss technology partnerships, infrastructure projects, research, and enterprise pilots."
        canonical="/contact"
      />
      
      {/* LEFT: Dark Background (Sticky on desktop) */}
      <div className="lg:w-1/2 bg-synthrova-white text-synthrova-black relative">
        <div className="lg:sticky lg:top-0 lg:h-screen p-10 md:p-16 lg:p-24 pt-32 lg:pt-40 flex flex-col overflow-hidden">
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 text-balance leading-tight">
              Let's build what comes next.
            </h1>
            <p className="text-xl md:text-2xl font-light text-synthrova-black/70 max-w-md leading-relaxed text-balance">
              Tell us about your organization, technology challenge, ecosystem or potential collaboration.
            </p>
          </div>

          {/* Subtle animated technical graphics */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-start lg:justify-center overflow-hidden">
            <div className="relative w-[800px] h-[800px] translate-y-32 lg:translate-y-0 lg:-translate-x-32">
              <div className="absolute inset-0 border-[0.5px] border-synthrova-blue/40 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 border-[0.5px] border-synthrova-blue/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-24 border-[0.5px] border-synthrova-blue/10 rounded-full animate-[spin_30s_linear_infinite]" />
              
              {/* Overlay gradient to fade out edges */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0a_70%)]" />
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                <line x1="50" y1="0" x2="50" y2="100" stroke="#00BCD4" strokeWidth="0.1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#00BCD4" strokeWidth="0.1" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>

      {/* RIGHT: Clean White Form */}
      <div className="lg:w-1/2 p-10 md:p-16 lg:p-24 pt-16 lg:pt-40 bg-synthrova-white">
        
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto lg:mx-0 w-full"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">Talk to Synthrova</h2>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First Name</label>
                    <input id="firstName" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>Last Name</label>
                    <input id="lastName" type="text" required className={inputClass} />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  <div>
                    <label htmlFor="email" className={labelClass}>Business Email</label>
                    <input id="email" type="email" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input id="phone" type="tel" className={inputClass} />
                  </div>
                </div>

                {/* Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  <div>
                    <label htmlFor="jobTitle" className={labelClass}>Job Title</label>
                    <input id="jobTitle" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company / Institution</label>
                    <input id="company" type="text" required className={inputClass} />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className={labelClass}>Country</label>
                  <input id="country" type="text" required className={inputClass} />
                </div>

                {/* Industry & Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  <div className="relative">
                    <label htmlFor="industry" className={labelClass}>Industry</label>
                    <select id="industry" required className={inputClass} defaultValue="">
                      <option value="" disabled>Select an industry</option>
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="government">Government</option>
                      <option value="energy">Energy</option>
                      <option value="defence">Defence</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="fmcg">FMCG</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-synthrova-black/40 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <label htmlFor="interest" className={labelClass}>Interest</label>
                    <select id="interest" required className={inputClass} defaultValue="">
                      <option value="" disabled>Select area of interest</option>
                      <option value="eledger">E-Ledger</option>
                      <option value="enterprise-infrastructure">Enterprise Infrastructure</option>
                      <option value="ai">AI</option>
                      <option value="energy">Energy</option>
                      <option value="defence">Defence & Security</option>
                      <option value="tech-partnership">Technology Partnership</option>
                      <option value="research">Research</option>
                      <option value="pilot">Pilot</option>
                      <option value="investment">Investment / Strategic Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-synthrova-black/40 pointer-events-none" />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className={labelClass}>Project description</label>
                  <textarea 
                    id="description" 
                    required 
                    rows={4}
                    placeholder="Tell us about your project or challenge."
                    className={`${inputClass} resize-none pt-4`}
                  ></textarea>
                </div>

                {/* Submit & Spam Protection */}
                <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-center text-[10px] font-mono tracking-widest uppercase text-synthrova-black/40">
                    <ShieldCheck className="w-4 h-4 mr-2 text-synthrova-black/30" />
                    Protected by enterprise reCAPTCHA
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed group w-full md:w-auto"
                  >
                    {isSubmitting ? "Processing..." : "Submit Inquiry"}
                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto lg:mx-0 w-full h-full flex flex-col justify-center min-h-[50vh]"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                Thank you.<br/>Your inquiry has been received.
              </h2>
              <p className="text-xl text-synthrova-black/70 font-light leading-relaxed mb-16 max-w-md text-balance">
                Our team will review the information and route your inquiry to the appropriate team.
              </p>
              
              <div>
                <Link to="/" className="inline-flex items-center px-8 py-4 border border-synthrova-lightgrey text-synthrova-black font-medium hover:bg-synthrova-black hover:text-synthrova-white transition-colors group">
                  Explore Synthrova
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}



function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) throw new Error('Submission failed');
      
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-12 p-12 bg-synthrova-blue/10 border border-synthrova-blue/20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-synthrova-blue flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-synthrova-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-light tracking-tight mb-4 text-synthrova-white">Message Received</h3>
        <p className="text-synthrova-white/70 font-light max-w-md mx-auto">
          Your inquiry has been successfully transmitted to our secure infrastructure. Our team will review the details and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-12 space-y-10" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-mono tracking-wide">
          ERROR: SECURE TRANSMISSION FAILED. PLEASE TRY AGAIN.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        <div className="relative">
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
          <input type="text" id="firstName" name="firstName" required className={inputClass} placeholder="Enter your first name" />
        </div>
        <div className="relative">
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input type="text" id="lastName" name="lastName" required className={inputClass} placeholder="Enter your last name" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        <div className="relative">
          <label htmlFor="email" className={labelClass}>Corporate Email *</label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="name@company.com" />
        </div>
        <div className="relative">
          <label htmlFor="company" className={labelClass}>Company / Organization *</label>
          <input type="text" id="company" name="company" required className={inputClass} placeholder="Organization name" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        <div className="relative">
          <label htmlFor="industry" className={labelClass}>Industry</label>
          <select id="industry" name="industry" required className={inputClass} defaultValue="">
            <option value="" disabled>Select an industry</option>
            <option value="pharmaceuticals">Pharmaceuticals</option>
            <option value="government">Government</option>
            <option value="energy">Energy</option>
            <option value="defence">Defence & Security</option>
            <option value="finance">Financial Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="relative">
          <label htmlFor="interest" className={labelClass}>Interest</label>
          <select id="interest" name="interest" required className={inputClass} defaultValue="">
            <option value="" disabled>Select area of interest</option>
            <option value="eledger">E-Ledger</option>
            <option value="enterprise-infrastructure">Enterprise Infrastructure</option>
            <option value="ai">AI</option>
            <option value="research">Research Partnerships</option>
            <option value="careers">Careers</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="relative">
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea id="message" name="message" required rows={4} className={inputClass} placeholder="How can we help you?"></textarea>
      </div>
      
      <button type="submit" disabled={status === "submitting"} className="inline-flex items-center px-10 py-5 bg-synthrova-blue text-synthrova-black font-medium hover:bg-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "submitting" ? "Transmitting..." : "Send Secure Message"}
      </button>
    </form>
  )
}
