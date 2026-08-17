import { motion } from "motion/react";
import { ArrowRight, Compass, ShieldCheck, BrainCircuit, Clock, Network, Building2, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "../components/SEO";

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-synthrova-white text-synthrova-black pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1a1a1a_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            Company
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance leading-tight">
            We build technology for problems too important to ignore.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-black/70 max-w-2xl leading-relaxed text-balance">
            Synthrova Technologies develops infrastructure, intelligence and mission-critical technology across regulated industries and emerging strategic domains.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-40 bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-10 text-balance leading-tight">
          Build technology<br/>that matters.
        </h2>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-balance">
          Technology should solve real system-level problems rather than simply create another layer of software.
        </p>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="font-mono text-sm tracking-widest text-synthrova-black/40 uppercase mb-8">The Company</div>
        
        <div className="space-y-8 text-xl md:text-2xl font-light text-synthrova-black/80 leading-relaxed">
          <p>
            Synthrova Technologies Private Limited is a deep tech engineering company based in India. We build enterprise technology infrastructure for critical systems. We are organized around the conviction that critical physical infrastructure and regulated ecosystems require fundamentally more resilient, verifiable, and intelligent software foundations.
          </p>
          <p>
            We do not build incremental SaaS applications. We engineer mission-critical B2B, B2G, and B2G2B (government-to-business) digital infrastructure capable of operating under strict constraints and proving compliance mathematically.
          </p>
          <p>
            Currently, our engineering efforts are anchored by <strong>E-Ledger</strong>, our first major platform deployed for regulated commerce and supply chain traceability. Concurrently, our teams are exploring the application of these foundational principles across additional technology programs, including Artificial Intelligence, Energy, and Defence systems.
          </p>
        </div>
      </div>
    </section>
  )
}


function WhatIsSection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">What is Synthrova?</h2>
        <div className="space-y-8 text-xl font-light text-synthrova-black/80 leading-relaxed">
          <p>
            Synthrova Technologies is a technology company developing intelligent infrastructure, enterprise software and emerging technology systems for critical industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 border border-synthrova-lightgrey bg-synthrova-offwhite">
              <h3 className="font-mono text-sm tracking-widest text-synthrova-black/50 uppercase mb-4">Current Platform</h3>
              <p className="font-medium text-lg mb-2">E-Ledger</p>
              <p className="text-base text-synthrova-black/70">Trusted transaction and compliance infrastructure for regulated supply chains.</p>
            </div>
            <div className="p-8 border border-synthrova-lightgrey bg-synthrova-offwhite">
              <h3 className="font-mono text-sm tracking-widest text-synthrova-black/50 uppercase mb-4">Emerging Programs</h3>
              <ul className="space-y-3 text-base text-synthrova-black/70">
                <li><strong className="text-synthrova-black font-medium">Artificial Intelligence:</strong> Decision intelligence workflows</li>
                <li><strong className="text-synthrova-black font-medium">Energy:</strong> Industrial system monitoring</li>
                <li><strong className="text-synthrova-black font-medium">Defence & Security:</strong> Mission-critical environments</li>
                <li><strong className="text-synthrova-black font-medium">Other:</strong> Advanced technology initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      q: "What is B2G2B technology?",
      a: "B2G2B (Business-to-Government-to-Business) technology refers to digital infrastructure that enables trusted data interoperability between regulatory agencies and private enterprises, streamlining compliance and reporting without compromising proprietary data."
    },
    {
      q: "What is Synthrova Technologies?",
      a: "Synthrova Technologies is a technology company building intelligent infrastructure and software for critical systems."
    },
    {
      q: "What does Synthrova Technologies build?",
      a: "Synthrova builds platforms that connect data, organizations, and machines to improve compliance, security, and interoperability."
    },
    {
      q: "What is E-Ledger?",
      a: "E-Ledger is a compliance and supply chain infrastructure platform developed by Synthrova to create cryptographically verified records across organizations."
    },
    {
      q: "Which industries does Synthrova serve?",
      a: "Synthrova currently focuses on regulated supply chains such as pharmaceuticals, and is exploring applications in energy, defence, and industrial manufacturing."
    },
    {
      q: "Is Synthrova an Indian technology company?",
      a: "Yes, Synthrova Technologies Private Limited is a registered Indian technology company recognized by DPIIT."
    },
    {
      q: "How can an enterprise work with Synthrova?",
      a: "Organizations can collaborate with Synthrova for technology partnerships, research, pilot programs, or enterprise infrastructure deployment."
    }
  ];

  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-synthrova-lightgrey pb-8">
              <h3 className="text-xl font-medium mb-4">{faq.q}</h3>
              <p className="text-lg font-light text-synthrova-black/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const beliefs = [
  {
    title: "THINK IN SYSTEMS",
    desc: "Understand the environment before building the solution.",
    icon: Network
  },
  {
    title: "BUILD FOR REALITY",
    desc: "Technology must work in real operational environments.",
    icon: Compass
  },
  {
    title: "TRUST IS ARCHITECTURE",
    desc: "Security, provenance and accountability should be designed into systems.",
    icon: ShieldCheck
  },
  {
    title: "INTELLIGENCE NEEDS CONTEXT",
    desc: "AI becomes more useful when it operates on trusted, contextual information.",
    icon: BrainCircuit
  },
  {
    title: "LONG-TERM THINKING",
    desc: "Build foundations that can support the next generation of technology.",
    icon: Clock
  }
];

function BeliefsSection() {
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">Our Core Beliefs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-synthrova-black/10 border border-synthrova-lightgrey/10">
          {beliefs.map((belief, i) => (
            <div key={i} className="bg-synthrova-white p-10 lg:p-12 hover:bg-synthrova-blue/5 transition-colors group">
              <belief.icon className="w-8 h-8 text-synthrova-black/40 mb-8 group-hover:text-synthrova-blue transition-colors" />
              <h3 className="text-sm font-mono tracking-widest uppercase font-bold mb-4">{belief.title}</h3>
              <p className="text-lg text-synthrova-black/70 font-light leading-relaxed">
                {belief.desc}
              </p>
            </div>
          ))}
          {/* Empty cell for symmetry on lg screens */}
          <div className="bg-synthrova-offwhite p-10 hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}

function InformationSection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">Company Information</h2>
            
            <div className="border-t border-synthrova-lightgrey">
              <div className="py-6 border-b border-synthrova-lightgrey flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="font-mono text-sm tracking-widest text-synthrova-white/50 uppercase">Entity</span>
                <span className="text-lg font-light">Synthrova Technologies Pvt. Ltd.</span>
              </div>
              <div className="py-6 border-b border-synthrova-lightgrey flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="font-mono text-sm tracking-widest text-synthrova-white/50 uppercase">Jurisdiction</span>
                <span className="text-lg font-light">Registered in India</span>
              </div>
              <div className="py-6 border-b border-synthrova-lightgrey flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="font-mono text-sm tracking-widest text-synthrova-white/50 uppercase">Status</span>
                <span className="text-lg font-light flex items-center">
                  Recognized by DPIIT
                </span>
              </div>
              <div className="py-6 border-b border-synthrova-lightgrey flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="font-mono text-sm tracking-widest text-synthrova-white/50 uppercase">Incubation</span>
                <span className="text-lg font-light text-right text-balance max-w-sm">
                  Kasliwal Startup Incubation Foundation
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">Leadership</h2>
            <div className="bg-synthrova-white/5 border border-synthrova-lightgrey p-10 md:p-12 h-full flex flex-col justify-center">
              <Building2 className="w-10 h-10 text-synthrova-white/30 mb-8" />
              <p className="text-xl font-light text-synthrova-black/80 leading-relaxed text-balance">
                Synthrova is led by a multidisciplinary team of systems engineers, distributed architecture researchers, and industry practitioners dedicated to solving asymmetric technical challenges.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
          Build with Synthrova
        </h2>
        <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue transition-colors duration-500 group">
          Contact us today
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export function Company() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="About Synthrova Technologies"
        description="Synthrova Technologies is a technology company developing intelligent infrastructure, enterprise software and emerging technology systems for critical industries."
        canonical="/company"
      />

      <HeroSection />
      <MissionSection />
      <WhatIsSection />
      <StorySection />
      <BeliefsSection />
      <InformationSection />
      <FaqSection />
      <FinalCTASection />
    </div>
  );
}
