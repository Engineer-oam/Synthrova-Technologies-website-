import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ChevronDown, ArrowRight } from "lucide-react";

const SECTIONS = [
  { id: "overview", title: "01. Overview" },
  { id: "information-we-collect", title: "02. Information We Collect" },
  { id: "how-we-use-information", title: "03. How We Use Information" },
  { id: "cookies", title: "04. Cookies & Technologies" },
  { id: "data-sharing", title: "05. Data Sharing" },
  { id: "data-retention", title: "06. Data Retention" },
  { id: "security", title: "07. Security" },
  { id: "your-rights", title: "08. Your Rights" },
  { id: "international-transfers", title: "09. International Transfers" },
  { id: "childrens-privacy", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact" }
];

function DataViz() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-synthrova-lightgrey/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.circle cx="10%" cy="20%" r="2" className="fill-synthrova-blue" animate={{ y: [0, 100, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="80%" cy="60%" r="2" className="fill-synthrova-blue" animate={{ x: [0, -100, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="40%" cy="80%" r="2" className="fill-synthrova-blue" animate={{ y: [0, -150, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      </svg>
    </div>
  );
}

export function Privacy() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-offwhite">
      <SEO 
        title="Privacy Policy | Synthrova Technologies"
        description="How Synthrova Technologies collects, uses, protects, and manages information across its enterprise platforms and public infrastructure."
        canonical="/privacy"
      />
      
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-synthrova-black text-synthrova-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1a1a1a_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="font-mono text-[10px] tracking-widest text-synthrova-blue mb-8 uppercase">LEGAL / PRIVACY</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-synthrova-white/70 font-light max-w-2xl leading-relaxed mb-12">
            How Synthrova Technologies collects, uses, protects, and manages information.
          </p>
          <div className="text-xs font-mono tracking-widest text-synthrova-white/40 uppercase">
            Last Updated: August 15, 2026
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative">
        <DataViz />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* TOC Mobile Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full flex items-center justify-between p-4 bg-synthrova-white border border-synthrova-lightgrey/20 text-sm font-mono tracking-widest uppercase"
              >
                <span>Contents</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
              </button>
              {isTocOpen && (
                <div className="bg-synthrova-white border border-t-0 border-synthrova-lightgrey/20 p-4 space-y-2">
                  {SECTIONS.map(section => (
                    <button 
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block w-full text-left text-sm py-2 text-synthrova-black/70"
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* TOC Desktop Sticky */}
            <div className="hidden lg:block lg:w-1/4 shrink-0">
              <div className="sticky top-32">
                <div className="font-mono text-[10px] tracking-widest text-synthrova-black/40 uppercase mb-8 pb-4 border-b border-synthrova-lightgrey/20">
                  STAY INFORMED
                </div>
                <nav className="space-y-1 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-synthrova-lightgrey/20"></div>
                  {SECTIONS.map(section => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left py-3 pl-6 text-sm transition-all relative ${
                        activeSection === section.id 
                          ? 'text-synthrova-black font-medium' 
                          : 'text-synthrova-black/50 hover:text-synthrova-black'
                      }`}
                    >
                      {activeSection === section.id && (
                        <motion.div 
                          layoutId="activePrivacyIndicator"
                          className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-synthrova-blue"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:w-3/4 max-w-3xl pb-32">
              <div className="prose prose-lg prose-synthrova">
                <div id="overview" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">01. Overview</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    This Privacy Policy details how Synthrova Technologies Private Limited ("Synthrova", "we", "us", or "our") handles personal data when you visit our public website, interact with our communications, or utilize our general services. 
                  </p>
                  <div className="bg-synthrova-black/5 p-6 border-l-2 border-synthrova-blue mb-6">
                    <p className="text-sm font-medium text-synthrova-black mb-2 uppercase tracking-widest font-mono">Enterprise Service Distinction</p>
                    <p className="text-sm text-synthrova-black/70 leading-relaxed">
                      This policy governs the Synthrova public website. It does <strong>not</strong> apply to the data processing activities of Synthrova E-Ledger or our enterprise infrastructure deployments. Those services are governed by strict, specific commercial agreements (e.g., Data Processing Agreements, Master Services Agreements) negotiated directly with our enterprise and government clients.
                    </p>
                  </div>
                </div>

                <div id="information-we-collect" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">02. Information We Collect</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-4">
                    We collect limited personal information to provide our services and communicate effectively. This may include:
                  </p>
                  <ul className="list-none space-y-3 mb-6 pl-0">
                    <li className="flex items-start"><ArrowRight className="w-4 h-4 text-synthrova-blue mt-1 mr-3 shrink-0" /> <span className="text-synthrova-black/70"><strong>Directly Provided Data:</strong> Name, corporate email, company name, industry, and any messages provided via our secure contact forms or career application portals.</span></li>
                    <li className="flex items-start"><ArrowRight className="w-4 h-4 text-synthrova-blue mt-1 mr-3 shrink-0" /> <span className="text-synthrova-black/70"><strong>Automated Technical Data:</strong> IP addresses, browser type, operating system, and interaction metrics gathered during your visit to maintain security and monitor infrastructure performance.</span></li>
                  </ul>
                </div>

                <div id="how-we-use-information" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">03. How We Use Information</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-4">
                    Data collected via our public infrastructure is utilized strictly for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-synthrova-black/70 font-light space-y-2">
                    <li>Responding to enterprise inquiries, pilot requests, and technical support.</li>
                    <li>Monitoring infrastructure stability, diagnosing technical anomalies, and preventing security threats.</li>
                    <li>Processing career applications and recruitment procedures.</li>
                    <li>Distributing approved security advisories, technical research, or regulatory intelligence (only when explicitly requested).</li>
                  </ul>
                </div>

                <div id="cookies" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">04. Cookies & Technologies</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Synthrova employs necessary session tokens and minimal analytical cookies to ensure platform functionality and security. We prioritize performance and observability without deploying invasive tracking or cross-site advertising scripts. You may restrict non-essential cookies via your browser configurations without degrading core site access.
                  </p>
                </div>

                <div id="data-sharing" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">05. Data Sharing</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Synthrova operates as a high-security infrastructure provider. We do not sell, rent, or trade your personal data. We may share data only under these strictly controlled circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-synthrova-black/70 font-light space-y-2">
                    <li>With vetted service providers assisting in secure hosting and infrastructure delivery under strict confidentiality agreements.</li>
                    <li>To comply with valid, legally binding government or regulatory requests.</li>
                    <li>To protect the security, integrity, and operational safety of the Synthrova network.</li>
                  </ul>
                </div>

                <div id="data-retention" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">06. Data Retention</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Personal data is retained only for the duration necessary to fulfill the operational purposes outlined in this policy or as required to satisfy legal, accounting, and cryptographic audit requirements. Technical telemetry is routinely anonymized or purged according to internal lifecycle policies.
                  </p>
                </div>

                <div id="security" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">07. Security</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Security is central to our architectural principles. We deploy enterprise-grade encryption, secure network topologies, and access control frameworks to protect transmitted and stored data. However, no transmission over the public internet is mathematically guaranteed to be impenetrable. For details on our systematic approach to infrastructure protection, please consult our <a href="/security" className="text-synthrova-blue hover:underline">Security page</a>.
                  </p>
                </div>

                <div id="your-rights" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">08. Your Rights</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Depending on your jurisdiction, you possess specific rights regarding your personal data. This may include the right to access, correct, restrict, or request deletion of your information. To exercise these rights regarding data submitted via the public website, please contact our privacy compliance team.
                  </p>
                </div>

                <div id="international-transfers" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">09. International Transfers</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Synthrova Technologies Private Limited is incorporated in India, with infrastructure deployed globally. By accessing our public systems, you acknowledge that your data may be securely transferred to, processed, and stored in infrastructure located outside your country of residence, operating under corresponding data protection safeguards.
                  </p>
                </div>

                <div id="childrens-privacy" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">10. Children's Privacy</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Our infrastructure, including this website, is strictly engineered for B2B, B2G, and enterprise use. We do not knowingly solicit, collect, or process information from individuals under the age of 18.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">11. Changes to This Policy</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    We may update this Privacy Policy as our architecture evolves or regulatory environments shift. Substantial alterations will be reflected by the "Last Updated" timestamp. Continued engagement with our public properties constitutes acknowledgment of the revised policy.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-32">
                  <h2 className="text-3xl font-light mb-6">12. Contact</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    For inquiries concerning this Privacy Policy, data management practices, or compliance architecture, please reach out to our team at:
                  </p>
                  <p className="font-mono text-sm text-synthrova-black bg-synthrova-black/5 p-4 inline-block">
                    privacy@synthrova.in
                  </p>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
