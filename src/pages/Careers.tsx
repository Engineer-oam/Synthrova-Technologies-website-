import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      {/* Background network animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-px h-1/2 bg-synthrova-blue/50 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/2 w-1/2 h-px bg-synthrova-blue/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-px h-1/3 bg-synthrova-blue/50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            Careers at Synthrova
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Build the infrastructure behind what comes next.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-3xl leading-relaxed text-balance mb-12">
            As Synthrova Technologies moves from Proof of Concept toward design partnerships and MVP development, we're building the team that will help take E-Ledger from concept to production.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#roles" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group">
              View Open Roles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#culture" className="px-8 py-4 bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 flex items-center group">
              Life at Synthrova
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black relative overflow-hidden border-b border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-tight">
              We're building more than software.
            </h2>
            <p className="text-xl md:text-2xl font-light text-synthrova-black/70 leading-relaxed text-balance">
              E-Ledger is being designed as compliance infrastructure for regulated supply chains—connecting transactions, reconciliation and traceable evidence across complex enterprise ecosystems.
            </p>
          </motion.div>
          <div className="relative h-64 lg:h-96 w-full flex items-center justify-center">
            {/* Thin architectural line illustration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full max-w-md text-synthrova-lightgrey/50" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="1" />
                <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <rect x="180" y="180" width="40" height="40" fill="transparent" stroke="currentColor" strokeWidth="1" />
                <rect x="50" y="195" width="10" height="10" fill="currentColor" />
                <rect x="340" y="195" width="10" height="10" fill="currentColor" />
                <rect x="195" y="50" width="10" height="10" fill="currentColor" />
                <rect x="195" y="340" width="10" height="10" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenRolesSection() {
  const roles = [
    {
      title: "Pharmaceutical QA / GxP / Compliance",
      type: "Advisory / Consulting",
      experience: "8+ Years",
      location: "India / Hybrid",
      reqs: ["GMP", "GxP", "QA", "CSV", "CQV", "GAMP", "Regulatory Compliance"],
      desc: "Shape the core compliance frameworks of E-Ledger for Pharma Tech jobs.",
      highlight: false
    },
    {
      title: "Pharmaceutical Supply Chain & Procurement",
      type: "Advisory",
      experience: "8+ Years",
      location: "India",
      reqs: ["SCM", "Procurement", "Vendor Management", "Distribution", "Inventory Operations"],
      desc: "Guide the transaction and supply chain technology interoperability logic.",
      highlight: false
    },
    {
      title: "Audit, Risk & Compliance",
      type: "Design Partner / Advisory",
      experience: "8+ Years",
      location: "India",
      reqs: ["CA / CPA / ACCA / CIA", "Internal Controls", "Audit", "Risk", "Regulated Industries"],
      desc: "Design the auditability and compliance infrastructure evidence structuring layer.",
      highlight: false
    },
    {
      title: "Chief Technology Officer",
      type: "Founding Leadership",
      experience: "8+ Years",
      location: "Hybrid / Remote",
      reqs: ["Backend Architecture", "Distributed Systems", "Cloud Infrastructure", "APIs", "SAP / Oracle Integrations", "Enterprise Security"],
      desc: "Lead the technical vision for enterprise technology careers and engineering execution at Synthrova (CTO Jobs).",
      highlight: true
    },
    {
      title: "Founding Backend Engineer",
      type: "Founding Team",
      experience: "3–6 Years",
      location: "Remote / Hybrid",
      reqs: ["Go / Node", "PostgreSQL", "REST APIs", "Microservices", "Distributed Systems"],
      desc: "Architect scalable backend services and data synchronization for our core systems.",
      highlight: false
    },
    {
      title: "Full Stack Engineer",
      type: "Engineering",
      experience: "2–5 Years",
      location: "Remote / Hybrid",
      reqs: ["React", "Next.js", "TypeScript", "Backend APIs"],
      desc: "Build highly responsive and data-dense enterprise interfaces.",
      highlight: false
    },
    {
      title: "DevOps & Cloud Engineer",
      type: "Engineering",
      experience: "3–6 Years",
      location: "Remote",
      reqs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Observability"],
      desc: "Design zero-downtime, secure infrastructure deployments.",
      highlight: false
    },
    {
      title: "Cybersecurity Engineer",
      type: "Engineering",
      experience: "3–6 Years",
      location: "Remote",
      reqs: ["Identity", "Encryption", "Infrastructure Security", "Compliance"],
      desc: "Ensure bank-grade security and zero-trust architecture.",
      highlight: false
    },
    {
      title: "AI / ML Engineer",
      type: "Engineering",
      experience: "2–5 Years",
      location: "Remote",
      reqs: ["Enterprise AI", "Workflow Automation", "LLMs", "Document Intelligence"],
      desc: "Develop intelligent data extraction and reasoning layers.",
      highlight: false
    }
  ];

  return (
    <section id="roles" className="py-32 bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Open Roles</h2>
            <p className="text-xl font-light text-synthrova-black/60">Join our interdisciplinary engineering, research, and advisory teams.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              key={i} 
              className={`bg-synthrova-white p-8 lg:p-12 border ${role.highlight ? 'border-synthrova-blue shadow-[0_0_30px_rgba(0,188,212,0.1)] relative' : 'border-synthrova-lightgrey/20'} flex flex-col h-full`}
            >
              {role.highlight && (
                <div className="absolute top-0 right-0 bg-synthrova-blue text-synthrova-black text-[10px] font-mono tracking-widest uppercase px-3 py-1">Founding Leadership</div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-light mb-4 text-balance">{role.title}</h3>
                <div className="flex flex-wrap gap-4 font-mono text-xs tracking-widest uppercase text-synthrova-black/50">
                  <span>{role.type}</span>
                  <span className="text-synthrova-lightgrey/50">|</span>
                  <span>{role.location}</span>
                  <span className="text-synthrova-lightgrey/50">|</span>
                  <span>{role.experience}</span>
                </div>
              </div>
              
              <p className="text-synthrova-black/70 font-light leading-relaxed mb-8">{role.desc}</p>
              
              <div className="mb-10 flex-grow">
                <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/40 mb-3">Focus / Requirements</div>
                <div className="flex flex-wrap gap-2">
                  {role.reqs.map((req, j) => (
                    <span key={j} className="px-3 py-1 bg-synthrova-offwhite border border-synthrova-lightgrey/30 text-xs font-mono text-synthrova-black/70">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-sm font-medium uppercase tracking-widest hover:text-synthrova-blue transition-colors group mt-auto">
                Apply <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipsSection() {
  const internships = [
    {
      title: "Software Engineering Intern",
      duration: "3–6 Months",
      location: "Remote",
      skills: ["JavaScript", "TypeScript", "APIs", "Git"]
    },
    {
      title: "AI Engineering Intern",
      duration: "3–6 Months",
      location: "Remote",
      skills: ["LLMs", "Prompt Engineering", "Enterprise Automation", "Python"]
    },
    {
      title: "Product & Research Intern",
      duration: "3–6 Months",
      location: "Remote",
      skills: ["Supply Chain", "Pharmaceutical Research", "Market Research", "Compliance Analysis"]
    },
    {
      title: "UI/UX Design Intern",
      duration: "3–6 Months",
      location: "Remote",
      skills: ["Design Systems", "Figma", "Interaction Design", "Enterprise Interfaces"]
    }
  ];

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white border-t border-synthrova-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Remote Internship Program</h2>
          <p className="text-xl font-light text-synthrova-white/60">Learn by building real infrastructure. Remote engineering internships available.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {internships.map((intern, i) => (
            <div key={i} className="border border-synthrova-white/10 p-8 hover:border-synthrova-white/30 transition-colors bg-synthrova-white/5 flex flex-col">
              <h3 className="text-xl font-light mb-4">{intern.title}</h3>
              <div className="font-mono text-xs tracking-widest uppercase text-synthrova-white/40 mb-6 flex flex-col gap-2">
                <span>{intern.location}</span>
                <span>{intern.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {intern.skills.map((skill, j) => (
                  <span key={j} className="text-xs text-synthrova-white/60 border border-synthrova-white/10 px-2 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-mono text-xs md:text-sm tracking-widest uppercase text-synthrova-white/70 text-center">
          <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-3"></span> Remote-first</div>
          <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-3"></span> Mentorship</div>
          <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-3"></span> Real product experience</div>
          <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-3"></span> Flexible working hours</div>
        </div>
      </div>
    </section>
  );
}

function WhoThrivesSection() {
  const principles = [
    "Challenge assumptions.",
    "Build systems, not features.",
    "Think in infrastructure.",
    "Design for regulated environments.",
    "Ship with precision."
  ];

  return (
    <section id="culture" className="py-40 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="font-mono text-xs tracking-widest text-synthrova-black/40 uppercase mb-24 md:mb-32">Who Thrives Here</div>
        <div className="space-y-16 md:space-y-24 max-w-5xl">
          {principles.map((principle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col md:flex-row md:items-baseline"
            >
              <span className="text-synthrova-blue font-mono text-xl md:text-2xl mb-4 md:mb-0 md:mr-12 md:w-16">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-synthrova-black/40 group-hover:text-synthrova-black transition-colors duration-500">
                {principle}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeHireSection() {
  const steps = [
    "Application",
    "Initial Conversation",
    "Technical / Domain Discussion",
    "Collaboration Assessment",
    "Offer"
  ];
  
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-t border-synthrova-lightgrey/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-20 text-center">How We Hire</h2>
        
        <div className="relative">
          {/* Mobile view (vertical) */}
          <div className="md:hidden space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-synthrova-white border border-synthrova-lightgrey/30 rounded-full flex items-center justify-center font-mono text-sm text-synthrova-blue mb-4 relative z-10">
                  {i + 1}
                </div>
                <div className="text-lg font-light">{step}</div>
                {i < steps.length - 1 && (
                  <div className="h-12 w-px bg-synthrova-lightgrey/50 mt-4"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop view (horizontal) */}
          <div className="hidden md:flex justify-between items-center relative">
            {/* Background line */}
            <div className="absolute top-6 left-12 right-12 h-px bg-synthrova-lightgrey/30">
              <motion.div 
                className="h-full bg-synthrova-blue/50"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
            
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center w-40 relative z-10"
              >
                <div className="w-12 h-12 bg-synthrova-offwhite border border-synthrova-blue/30 rounded-full flex items-center justify-center font-mono text-sm text-synthrova-blue mb-6">
                  {i + 1}
                </div>
                <div className="text-base font-light text-balance">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplyCTASection() {
  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">Think you can contribute?</h2>
        <p className="text-xl md:text-2xl font-light text-synthrova-white/70 max-w-3xl leading-relaxed mb-12 text-balance">
          We're looking for people who bring deep expertise—not impressive titles. Whether you're an experienced industry professional or an ambitious engineer, we'd love to hear from you.
        </p>
        <Link to="/contact" className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group">
          Apply Now
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

export function Careers() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers | Synthrova Technologies",
    "description": "Explore careers, founding engineering roles, advisory opportunities and remote internships at Synthrova Technologies as we build E-Ledger for regulated supply chains.",
    "url": "https://synthrova.in/careers"
  };

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-white min-h-screen">
      <SEO 
        title="Careers | Synthrova Technologies"
        description="Explore careers, founding engineering roles, advisory opportunities and remote internships at Synthrova Technologies as we build E-Ledger for regulated supply chains."
        canonical="/careers"
        schema={seoSchema}
      />
      
      <HeroSection />
      <MissionSection />
      <OpenRolesSection />
      <InternshipsSection />
      <WhoThrivesSection />
      <HowWeHireSection />
      <ApplyCTASection />
    </div>
  );
}
