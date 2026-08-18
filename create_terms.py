import os

content = """import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ChevronDown } from "lucide-react";

const SECTIONS = [
  { id: "acceptance", title: "01. Acceptance of Terms" },
  { id: "use-of-website", title: "02. Use of the Website" },
  { id: "accounts", title: "03. Accounts and Access" },
  { id: "intellectual-property", title: "04. Intellectual Property" },
  { id: "user-content", title: "05. User Content" },
  { id: "third-party", title: "06. Third-Party Services" },
  { id: "enterprise", title: "07. E-Ledger and Enterprise Services" },
  { id: "prohibited", title: "08. Prohibited Activities" },
  { id: "disclaimers", title: "09. Disclaimers" },
  { id: "limitation", title: "10. Limitation of Liability" },
  { id: "indemnification", title: "11. Indemnification" },
  { id: "changes", title: "12. Changes to the Terms" },
  { id: "governing-law", title: "13. Governing Law" },
  { id: "contact", title: "14. Contact" }
];

function DocumentViz() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#000" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <g mask="url(#fadeMask)">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.line 
              key={i}
              x1="0" 
              y1={i * 60} 
              x2="100%" 
              y2={i * 60} 
              stroke="currentColor" 
              strokeWidth="1" 
              className="text-synthrova-lightgrey/30"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 1 }}
            />
          ))}
          <motion.rect x="15%" y="240" width="4" height="4" className="fill-synthrova-blue" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.rect x="35%" y="480" width="4" height="4" className="fill-synthrova-blue" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
          <motion.rect x="65%" y="720" width="4" height="4" className="fill-synthrova-blue" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
        </g>
      </svg>
    </div>
  );
}

export function Terms() {
  const [activeSection, setActiveSection] = useState("acceptance");
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
        title="Terms of Service | Synthrova Technologies"
        description="The terms governing access to and use of Synthrova Technologies' public websites and information architectures."
        canonical="/terms"
      />
      
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-synthrova-black text-synthrova-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1a1a1a_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="font-mono text-[10px] tracking-widest text-synthrova-blue mb-8 uppercase">LEGAL / TERMS</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-synthrova-white/70 font-light max-w-2xl leading-relaxed mb-12">
            The terms governing access to and use of Synthrova Technologies' websites and services.
          </p>
          <div className="text-xs font-mono tracking-widest text-synthrova-white/40 uppercase">
            Last Updated: August 15, 2026
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative">
        <DocumentViz />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* TOC Mobile Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full flex items-center justify-between p-4 bg-synthrova-white border border-synthrova-lightgrey/20 text-sm font-mono tracking-widest uppercase"
              >
                <span>Table of Contents</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
              </button>
              {isTocOpen && (
                <div className="bg-synthrova-white border border-t-0 border-synthrova-lightgrey/20 p-4 space-y-2 shadow-sm">
                  {SECTIONS.map(section => (
                    <button 
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block w-full text-left text-sm py-2 text-synthrova-black/70 hover:text-synthrova-blue"
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
                  TABLE OF CONTENTS
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
                          layoutId="activeTermsIndicator"
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
                
                <div id="acceptance" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">01. Acceptance of Terms</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    By accessing or using the public websites, domains, and information portals operated by Synthrova Technologies Private Limited ("Synthrova"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must disconnect from our infrastructure immediately.
                  </p>
                </div>

                <div id="use-of-website" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">02. Use of the Website</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Synthrova grants you a limited, non-exclusive, non-transferable, and revocable license to access our public website for informational, non-commercial purposes. You agree not to disrupt the operation of our infrastructure, attempt unauthorized access, or burden our servers with automated scraping or denial-of-service vectors.
                  </p>
                </div>

                <div id="accounts" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">03. Accounts and Access</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Certain areas of our public infrastructure may require registration or authentication. You are responsible for maintaining the strict confidentiality of any credentials provided to you. Synthrova reserves the right to terminate access or suspend accounts at our sole discretion, without prior notice, if operational security dictates.
                  </p>
                </div>

                <div id="intellectual-property" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">04. Intellectual Property</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    All content, including architectural diagrams, source code excerpts, technical documentation, logos, and visual systems ("Synthrova Intellectual Property"), are the exclusive property of Synthrova Technologies Private Limited. No rights or licenses are granted to use Synthrova IP beyond the scope necessary to view the public website.
                  </p>
                </div>

                <div id="user-content" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">05. User Content</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Any unstructured feedback, questions, or comments transmitted to Synthrova via our public portals may be utilized by Synthrova to improve our systems without obligation, attribution, or compensation to you. Do not submit proprietary or classified information through public channels.
                  </p>
                </div>

                <div id="third-party" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">06. Third-Party Services</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Our infrastructure may reference or link to third-party ecosystems. Synthrova assumes no liability for the security, content, or availability of external systems not under our direct architectural control.
                  </p>
                </div>

                <div id="enterprise" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">07. E-Ledger and Enterprise Services</h2>
                  <div className="bg-synthrova-black/5 p-6 border-l-2 border-synthrova-blue mb-6">
                    <p className="text-sm font-medium text-synthrova-black mb-2 uppercase tracking-widest font-mono">B2B Jurisdictional Boundary</p>
                    <p className="text-sm text-synthrova-black/70 leading-relaxed">
                      These Terms of Service govern only the public-facing Synthrova website. Commercial deployment of the Synthrova E-Ledger, APIs, regulatory compliance infrastructure, enterprise pilot programs, and custom engineering services are governed exclusively by distinct, cryptographically signed Master Services Agreements (MSAs) and Enterprise Service Level Agreements (SLAs). In the event of a conflict between these Terms and an MSA, the MSA supersedes.
                    </p>
                  </div>
                </div>

                <div id="prohibited" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">08. Prohibited Activities</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-4">
                    Users of Synthrova public infrastructure are strictly prohibited from:
                  </p>
                  <ul className="list-disc pl-6 text-synthrova-black/70 font-light space-y-2">
                    <li>Executing penetration testing, vulnerability scanning, or security probing without explicit prior authorization via our Responsible Disclosure program.</li>
                    <li>Reverse-engineering network architectures, APIs, or compiled application logic.</li>
                    <li>Transmitting malicious payloads, executing SQL injections, or attempting cross-site scripting attacks against our servers.</li>
                    <li>Falsifying identity, claiming unauthorized affiliation with Synthrova, or conducting social engineering attacks.</li>
                  </ul>
                </div>

                <div id="disclaimers" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">09. Disclaimers</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6 uppercase text-sm tracking-wider">
                    The public website and its contents are provided on an "as-is" and "as-available" basis. Synthrova disclaims all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee continuous, uninterrupted, or error-free availability of the public website.
                  </p>
                </div>

                <div id="limitation" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">10. Limitation of Liability</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6 uppercase text-sm tracking-wider">
                    To the maximum extent permitted by applicable law, Synthrova Technologies Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to, or inability to access, the public website infrastructure.
                  </p>
                </div>

                <div id="indemnification" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">11. Indemnification</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    You agree to indemnify, defend, and hold harmless Synthrova, its engineers, directors, and affiliates from any claims, liabilities, damages, or expenses arising from your violation of these Terms or your misuse of the Synthrova infrastructure.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">12. Changes to the Terms</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    Synthrova reserves the right to modify these Terms at any time without prior individual notice. Modifications become effective immediately upon deployment to our infrastructure. Your continued use signifies acceptance of the amended Terms.
                  </p>
                </div>

                <div id="governing-law" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl font-light mb-6">13. Governing Law</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    These Terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with the public website shall be subject to the exclusive jurisdiction of the competent courts located within India.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-32">
                  <h2 className="text-3xl font-light mb-6">14. Contact</h2>
                  <p className="text-synthrova-black/70 font-light leading-relaxed mb-6">
                    For legal inquiries or notices regarding these Terms, please contact our counsel at:
                  </p>
                  <p className="font-mono text-sm text-synthrova-black bg-synthrova-black/5 p-4 inline-block">
                    legal@synthrova.com
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
"""

with open('src/pages/Terms.tsx', 'w') as f:
    f.write(content)
