import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, ChevronDown, ChevronUp, Check, Mail, Compass, Layers, ShieldCheck, Cpu } from "lucide-react";
import { useLocation } from "react-router-dom";

interface SeniorRole {
  number: string;
  title: string;
  roleType: string;
  primaryObjective: string;
  minQualifications: string[];
  prefQualifications: string[];
  eligibility: string[];
  engagement: string;
  applyButtonText: string;
  emailSubject: string;
  isAdvisor?: boolean;
}

const SENIOR_ROLES: SeniorRole[] = [
  {
    number: "01",
    title: "CTO / Technical Co-Founder",
    roleType: "FOUNDING LEADERSHIP",
    primaryObjective: "Own the technical direction from PoC → MVP → production.",
    minQualifications: [
      "Bachelor's or Master's degree in Computer Science, Software Engineering, Information Technology, or a closely related technical field.",
      "8+ years of professional technology experience, with significant experience in architecture or technical leadership.",
      "Demonstrated experience designing and building enterprise-grade backend systems, APIs and distributed systems.",
      "Strong experience with PostgreSQL / relational databases, cloud infrastructure and API architecture.",
      "Experience with enterprise integrations, ERP systems, or complex B2B SaaS platforms.",
      "Ability to lead technical architecture from PoC through MVP and production.",
      "Strong understanding of cybersecurity, authentication, authorization and data protection."
    ],
    prefQualifications: [
      "Experience with SAP, Oracle, WMS, TMS or supply-chain systems.",
      "Experience with blockchain / DLT, permissioned networks or distributed ledgers.",
      "Experience building technology for regulated industries.",
      "Previous startup, founding-team or CTO experience.",
      "Experience hiring and leading engineering teams."
    ],
    eligibility: [
      "Must be willing to take substantial ownership of the technical roadmap.",
      "Must be comfortable working at an early-stage startup.",
      "India-based or willing to work with the founding team in India.",
      "Equity-based / founding-team structure to be discussed based on experience and commitment."
    ],
    engagement: "Founding leadership / full-time / founding-team structure, depending on mutual fit and commitment.",
    applyButtonText: "Apply for CTO / Technical Co-Founder →",
    emailSubject: "Application — CTO / Technical Co-Founder",
    isAdvisor: false
  },
  {
    number: "02",
    title: "Founding GTM & Enterprise Business Development Lead",
    roleType: "FOUNDING COMMERCIAL LEADERSHIP",
    primaryObjective: "PoC → Design Partners → Pilots → First Paying Customers",
    minQualifications: [
      "Bachelor's degree in Business, Management, Engineering, Pharmacy, Life Sciences or related field.",
      "5+ years of B2B enterprise sales, business development, GTM or strategic partnerships experience.",
      "Demonstrated experience selling to or working with enterprise organizations.",
      "Strong experience in prospecting, enterprise relationship development and commercial negotiations.",
      "Ability to identify decision-makers and convert relationships into qualified opportunities."
    ],
    prefQualifications: [
      "Pharmaceutical / life-sciences experience strongly preferred.",
      "Existing relationships with pharma manufacturers, API companies, distributors, 3PLs or regulated enterprises.",
      "Experience selling ERP, supply-chain technology, compliance technology or enterprise SaaS.",
      "Experience working with CFO, COO, CIO, CTO, Supply Chain, Procurement, QA or Regulatory stakeholders.",
      "Experience taking a product from zero-to-one commercial traction."
    ],
    eligibility: [
      "Must be willing to personally participate in enterprise outreach and customer development.",
      "Must be comfortable with an early-stage environment where processes are still being built.",
      "Must be capable of developing design partners and pilot opportunities rather than only generating leads.",
      "India-based preferred."
    ],
    engagement: "Founding / leadership / full-time opportunity depending on experience and mutual fit.",
    applyButtonText: "Apply for Founding GTM & Enterprise Business Development Lead →",
    emailSubject: "Application — Founding GTM & Enterprise Business Development Lead",
    isAdvisor: false
  },
  {
    number: "03",
    title: "Strategic GTM & Enterprise Partnerships Advisor",
    roleType: "STRATEGIC ADVISORY",
    primaryObjective: "Help Synthrova move from PoC → Design Partners → Enterprise Pilots through strategic guidance and qualified access.",
    minQualifications: [
      "10+ years of experience in enterprise technology, consulting, pharma, supply chain, compliance, enterprise sales or strategic partnerships.",
      "Demonstrated senior-level experience working with enterprise decision-makers.",
      "Established professional network within at least one relevant target sector.",
      "Experience advising organizations on enterprise technology adoption, transformation or commercial strategy.",
      "Strong understanding of enterprise procurement and stakeholder management."
    ],
    prefQualifications: [
      "C-suite relationships within pharma, healthcare, supply chain, logistics or regulated industries.",
      "Experience with SAP, Oracle, enterprise architecture, ERP transformation or compliance systems.",
      "Experience supporting enterprise pilots or technology partnerships.",
      "Previous advisory, consulting, executive or board-level experience."
    ],
    eligibility: [
      "Able to contribute approximately 2–5 hours per month.",
      "Willing to facilitate relevant introductions where appropriate.",
      "Must have no material conflict of interest with Synthrova.",
      "Comfortable with an equity-based advisory structure."
    ],
    engagement: "Strategic advisory.",
    applyButtonText: "Express Interest — Strategic GTM & Enterprise Partnerships Advisor →",
    emailSubject: "Expression of Interest — Strategic GTM & Enterprise Partnerships Advisor",
    isAdvisor: true
  },
  {
    number: "04",
    title: "Pharma QA / GxP / Compliance Advisor",
    roleType: "DOMAIN ADVISORY",
    primaryObjective: "Validate real pharmaceutical quality, compliance and regulatory workflows for E-Ledger.",
    minQualifications: [
      "Bachelor's or Master's degree in Pharmacy, Life Sciences, Chemistry, Biotechnology or related discipline.",
      "8+ years of pharmaceutical quality, compliance or regulatory experience.",
      "Strong practical knowledge of GMP / GxP environments.",
      "Experience with pharmaceutical quality systems and audit / compliance processes."
    ],
    prefQualifications: [
      "CSV / CQV / GAMP 5 experience.",
      "Regulatory affairs experience.",
      "Experience with pharma manufacturing and supply-chain compliance.",
      "Experience with quality audits and inspection readiness.",
      "Experience implementing digital quality / compliance systems."
    ],
    eligibility: [
      "Must be able to advise on real pharmaceutical workflows.",
      "Must be willing to participate in product / workflow validation.",
      "Advisory / consulting engagement initially."
    ],
    engagement: "Advisory / consulting / design partnership.",
    applyButtonText: "Express Interest — Pharma QA / GxP / Compliance Advisor →",
    emailSubject: "Expression of Interest — Pharma QA / GxP / Compliance Advisor",
    isAdvisor: true
  },
  {
    number: "05",
    title: "Pharmaceutical Supply Chain & Procurement Advisor",
    roleType: "DOMAIN ADVISORY",
    primaryObjective: "Validate pharmaceutical supply-chain and procurement workflows for E-Ledger.",
    minQualifications: [
      "Bachelor's / Master's degree in Supply Chain, Operations, Pharmacy, Engineering, Management or related discipline.",
      "8+ years of pharmaceutical supply-chain / procurement experience.",
      "Practical experience with procurement, vendor management, distribution or pharmaceutical logistics.",
      "Understanding of multi-party supply-chain workflows."
    ],
    prefQualifications: [
      "Experience with SAP / Oracle or other ERP systems.",
      "Pharmaceutical manufacturing / distribution experience.",
      "Cold-chain logistics experience.",
      "Supplier qualification and procurement compliance.",
      "Experience with digital supply-chain transformation."
    ],
    eligibility: [
      "Must be able to provide practical workflow feedback.",
      "Must be willing to participate in design-partner discovery.",
      "Advisory / consulting engagement initially."
    ],
    engagement: "Advisory / consulting / design partnership.",
    applyButtonText: "Express Interest — Pharmaceutical Supply Chain & Procurement Advisor →",
    emailSubject: "Expression of Interest — Pharmaceutical Supply Chain & Procurement Advisor",
    isAdvisor: true
  },
  {
    number: "06",
    title: "Audit, Risk & Compliance Advisor",
    roleType: "DOMAIN ADVISORY",
    primaryObjective: "Evaluate E-Ledger from an audit, control, risk and compliance perspective.",
    minQualifications: [
      "CA / CPA / ACCA / CIA or equivalent professional qualification.",
      "8+ years of audit, risk, internal controls or compliance experience.",
      "Experience working with enterprise financial / operational controls.",
      "Strong understanding of reconciliation, audit evidence and control frameworks."
    ],
    prefQualifications: [
      "Experience with pharmaceutical or other regulated industries.",
      "ERP audit experience.",
      "Internal controls / SOX experience.",
      "Technology risk or IT audit experience.",
      "Experience with continuous monitoring or automated reconciliation."
    ],
    eligibility: [
      "Must be able to evaluate E-Ledger from an auditor / control perspective.",
      "Must be willing to participate in product validation and pilot design.",
      "Advisory / consulting engagement initially."
    ],
    engagement: "Advisory / consulting / design partnership.",
    applyButtonText: "Express Interest — Audit, Risk & Compliance Advisor →",
    emailSubject: "Expression of Interest — Audit, Risk & Compliance Advisor",
    isAdvisor: true
  },
  {
    number: "07",
    title: "Enterprise Architecture / Technology Strategy Advisor",
    roleType: "TECHNOLOGY STRATEGY ADVISORY",
    primaryObjective: "Provide enterprise architecture and technology strategy perspective as E-Ledger moves toward enterprise adoption.",
    minQualifications: [
      "Bachelor's or Master's degree in Computer Science, Engineering, IT or related field.",
      "12+ years of enterprise technology experience.",
      "Demonstrated experience in enterprise architecture, digital transformation or technology strategy.",
      "Strong understanding of APIs, integration architecture, cloud and enterprise systems.",
      "Experience engaging with CIO / CTO / C-suite stakeholders."
    ],
    prefQualifications: [
      "SAP / Oracle architecture.",
      "Enterprise integration and interoperability.",
      "Cloud architecture.",
      "Data architecture.",
      "Cybersecurity.",
      "AI / ML strategy.",
      "Government / regulated-industry technology.",
      "Experience advising large transformation programs."
    ],
    eligibility: [
      "Strategic / advisory capacity.",
      "Ability to review E-Ledger architecture and enterprise positioning.",
      "Ability to provide enterprise technology perspective and, where appropriate, relevant introductions."
    ],
    engagement: "Strategic advisory.",
    applyButtonText: "Express Interest — Enterprise Architecture / Technology Strategy Advisor →",
    emailSubject: "Expression of Interest — Enterprise Architecture / Technology Strategy Advisor",
    isAdvisor: true
  },
  {
    number: "08",
    title: "Investor & Strategic Partnerships Advisor",
    roleType: "STRATEGIC ADVISORY",
    primaryObjective: "Support Synthrova's strategic ecosystem development and institutional fundraising readiness.",
    minQualifications: [
      "10+ years in venture capital, investment banking, corporate strategy, startup ecosystem, enterprise partnerships or fundraising.",
      "Demonstrated experience working with founders, investors or enterprise strategic partners.",
      "Strong understanding of startup fundraising and investor processes.",
      "Established professional network within relevant investor or corporate ecosystem."
    ],
    prefQualifications: [
      "Experience investing in or advising B2B SaaS, enterprise technology, supply-chain technology, pharma / life sciences or regulated-industry startups.",
      "Relationships with angel investors, VCs, strategic corporates or family offices.",
      "Experience helping startups prepare for institutional fundraising.",
      "Previous founder / operator experience."
    ],
    eligibility: [
      "Must provide strategic introductions rather than merely generic investor lists.",
      "Must understand that investor introductions do not guarantee investment.",
      "Advisory structure to be mutually agreed.",
      "Any compensation or equity arrangement must be subject to appropriate legal review."
    ],
    engagement: "Strategic advisory / partnerships.",
    applyButtonText: "Express Interest — Investor & Strategic Partnerships Advisor →",
    emailSubject: "Expression of Interest — Investor & Strategic Partnerships Advisor",
    isAdvisor: true
  }
];

const INTERNSHIPS = [
  {
    title: "Software Engineering Intern",
    focus: "Backend / Full Stack / APIs / PostgreSQL / Git",
    type: "Remote",
    duration: "3–6 months",
    subject: "Application — Software Engineering Internship"
  },
  {
    title: "AI Engineering Intern",
    focus: "Python / AI / LLMs / enterprise workflow automation",
    type: "Remote",
    duration: "3–6 months",
    subject: "Application — AI Engineering Internship"
  },
  {
    title: "Product & Research Intern",
    focus: "Market research / enterprise workflows / pharmaceutical supply chains / product research",
    type: "Remote",
    duration: "3–6 months",
    subject: "Application — Product & Research Internship"
  },
  {
    title: "UI/UX Design Intern",
    focus: "Enterprise interfaces / design systems / Figma / interaction design",
    type: "Remote",
    duration: "3–6 months",
    subject: "Application — UI/UX Design Internship"
  }
];

function generateMailtoLink(subject: string, roleTitle: string, isAdvisor: boolean = false): string {
  const intro = isAdvisor 
    ? `Dear Synthrova Technologies Team,\n\nI am writing to express my interest in the ${roleTitle} opportunity at Synthrova Technologies.\n\nPlease find my background summary / CV attached for your consideration.\n\nFull Name: [Your Name]\nCurrent Location: [Your Location]\nLinkedIn / Profile: [URL]\nSummary of Background & Strategic Alignment:\n[Brief overview]\n\nRegards,\n[Your Name]`
    : `Dear Synthrova Technologies Team,\n\nI am writing to apply for the ${roleTitle} opportunity at Synthrova Technologies.\n\nPlease find my CV/resume attached for your consideration.\n\nFull Name: [Your Name]\nCurrent Location: [Your Location]\nLinkedIn / GitHub / Portfolio: [URL]\nRelevant Experience & Focus:\n[Brief overview]\n\nRegards,\n[Your Name]`;

  return `mailto:careers@synthrova.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(intro)}`;
}

export function Careers() {
  const { hash } = useLocation();
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({ "01": true });

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const toggleRole = (number: string) => {
    setExpandedRoles(prev => ({
      ...prev,
      [number]: !prev[number]
    }));
  };

  const expandAll = () => {
    const allExpanded = SENIOR_ROLES.reduce((acc, r) => ({ ...acc, [r.number]: true }), {});
    setExpandedRoles(allExpanded);
  };

  const collapseAll = () => {
    setExpandedRoles({});
  };

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers | Synthrova Technologies",
    "description": "Explore leadership, founding-team, advisory, enterprise technology and remote internship opportunities at Synthrova Technologies as we build E-Ledger for regulated supply chains.",
    "url": "https://synthrova.in/careers"
  };

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-white min-h-screen text-synthrova-black">
      <SEO
        title="Careers | Synthrova Technologies"
        description="Explore leadership, founding-team, advisory, enterprise technology and remote internship opportunities at Synthrova Technologies as we build E-Ledger for regulated supply chains."
        canonical="/careers"
        schema={seoSchema}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] bg-synthrova-black text-synthrova-white pt-32 pb-24 flex flex-col justify-center overflow-hidden">
        {/* Subtle architectural background traces */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/3 left-1/5 w-px h-1/2 bg-synthrova-blue/40 animate-pulse" />
          <div className="absolute top-1/4 left-1/2 w-1/3 h-px bg-synthrova-blue/40 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 right-1/4 w-px h-1/3 bg-synthrova-blue/40 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="font-mono text-xs md:text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
              CAREERS AT SYNTHROVA
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
              Build what takes Synthrova from PoC to production.
            </h1>
            <p className="text-xl md:text-2xl font-light text-synthrova-white/80 max-w-4xl leading-relaxed text-balance mb-6">
              Synthrova Technologies is building the team and advisory network around E-Ledger, our transaction and compliance infrastructure for regulated supply chains.
            </p>
            <p className="text-lg md:text-xl font-light text-synthrova-white/60 max-w-4xl leading-relaxed text-balance mb-6">
              As we move from Proof of Concept toward design partnerships, enterprise pilots and MVP development, we are looking for people who can contribute real domain expertise, technical leadership, commercial traction and strategic access.
            </p>
            <p className="text-base md:text-lg font-light text-synthrova-blue/90 max-w-3xl leading-relaxed text-balance mb-12 border-l-2 border-synthrova-blue/60 pl-4 py-1">
              We are looking for people who can challenge assumptions, validate workflows, architect robust systems, develop enterprise relationships and help build meaningful infrastructure.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#opportunities"
                className="px-8 py-4 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 inline-flex items-center group shadow-sm"
              >
                Explore Opportunities
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#opportunities"
                className="px-8 py-4 bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 inline-flex items-center group"
              >
                Express Interest
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION SECTION: THE OPPORTUNITY */}
      <section className="py-24 md:py-32 bg-synthrova-white text-synthrova-black border-b border-synthrova-lightgrey/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-xs tracking-widest text-synthrova-blue uppercase mb-6">
            THE OPPORTUNITY
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-tight">
                Leadership, Advisory &amp; Founding Opportunities
              </h2>
              <p className="text-xl font-light text-synthrova-black/80 leading-relaxed mb-6 text-balance">
                Synthrova is currently building the core team around E-Ledger, our compliance infrastructure for regulated supply chains.
              </p>
              <p className="text-lg font-light text-synthrova-black/70 leading-relaxed text-balance">
                We are looking for experienced professionals who can contribute beyond a conventional job description.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="bg-synthrova-offwhite p-8 md:p-10 border border-synthrova-lightgrey/20">
                <h3 className="font-mono text-xs tracking-widest uppercase text-synthrova-black/60 mb-6">
                  At our current stage, our priorities are:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-light text-synthrova-black/90">
                  {[
                    "Technical execution",
                    "Enterprise validation",
                    "Design partners",
                    "Initial commercial traction",
                    "Strategic ecosystem development",
                    "Product and workflow validation",
                    "Enterprise architecture",
                    "Strategic partnerships"
                  ].map((priority, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full flex-shrink-0" />
                      <span>{priority}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-synthrova-lightgrey/30">
                <h3 className="font-mono text-xs tracking-widest uppercase text-synthrova-black/60 mb-4">
                  Depending on experience and commitment, opportunities may be structured as:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-time leadership roles",
                    "Founding-team positions",
                    "Advisory roles",
                    "Consulting engagements",
                    "Strategic partnerships"
                  ].map((model, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-synthrova-white border border-synthrova-lightgrey/40 text-xs font-mono tracking-wide text-synthrova-black/80"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE DIRECTORY */}
      <section id="opportunities" className="py-24 md:py-32 bg-synthrova-offwhite text-synthrova-black border-b border-synthrova-lightgrey/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="font-mono text-xs tracking-widest text-synthrova-blue uppercase mb-3">
                EDITORIAL ROLE DIRECTORY
              </div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                Founding Leadership &amp; Advisory Directory
              </h2>
              <p className="text-lg md:text-xl font-light text-synthrova-black/70 max-w-3xl">
                Explore our strategic opportunities. Each role represents a critical capability to advance E-Ledger toward enterprise pilots and production.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={expandAll}
                className="px-4 py-2 border border-synthrova-lightgrey/40 text-xs font-mono tracking-widest uppercase hover:border-synthrova-blue hover:text-synthrova-blue transition-colors"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-4 py-2 border border-synthrova-lightgrey/40 text-xs font-mono tracking-widest uppercase hover:border-synthrova-blue hover:text-synthrova-blue transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {SENIOR_ROLES.map((role) => {
              const isExpanded = !!expandedRoles[role.number];
              const mailtoUrl = generateMailtoLink(role.emailSubject, role.title, role.isAdvisor);

              return (
                <div
                  key={role.number}
                  id={`role-${role.number}`}
                  className={`bg-synthrova-white border transition-all duration-300 ${
                    isExpanded 
                      ? "border-synthrova-blue/80 shadow-[0_4px_30px_rgba(0,188,212,0.06)]" 
                      : "border-synthrova-lightgrey/30 hover:border-synthrova-lightgrey/70"
                  }`}
                >
                  {/* Role Header Bar */}
                  <div className="p-6 md:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex items-start gap-4 md:gap-6">
                        <span className="font-mono text-2xl md:text-3xl text-synthrova-blue font-light flex-shrink-0">
                          {role.number}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-mono text-xs tracking-widest uppercase text-synthrova-black/50 border border-synthrova-lightgrey/40 px-2.5 py-0.5">
                              {role.roleType}
                            </span>
                            <span className="font-mono text-xs tracking-widest uppercase text-synthrova-blue/90">
                              {role.engagement}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-synthrova-black mb-3">
                            {role.title}
                          </h3>
                          <p className="text-base md:text-lg font-light text-synthrova-black/75">
                            <strong className="font-medium text-synthrova-black">Primary Objective:</strong>{" "}
                            {role.primaryObjective}
                          </p>
                        </div>
                      </div>

                      {/* Header Actions */}
                      <div className="flex items-center gap-4 pt-2 lg:pt-0 lg:flex-shrink-0">
                        <a
                          href={mailtoUrl}
                          className="px-5 py-3 bg-synthrova-black text-synthrova-white text-xs md:text-sm font-medium tracking-wide uppercase hover:bg-synthrova-blue transition-colors flex items-center group"
                        >
                          <span>{role.isAdvisor ? "Express Interest" : "Apply"}</span>
                          <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleRole(role.number)}
                          aria-expanded={isExpanded}
                          aria-label={`Toggle details for ${role.title}`}
                          className="p-3 border border-synthrova-lightgrey/40 text-synthrova-black/60 hover:text-synthrova-blue hover:border-synthrova-blue transition-colors"
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Detailed Panels */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-synthrova-lightgrey/20 bg-synthrova-offwhite/50"
                      >
                        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Minimum Qualifications */}
                          <div className="bg-synthrova-white p-6 border border-synthrova-lightgrey/20">
                            <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/50 mb-4 pb-2 border-b border-synthrova-lightgrey/20 flex items-center justify-between">
                              <span>MINIMUM QUALIFICATIONS</span>
                              <span className="text-[10px] text-synthrova-blue">REQUIRED</span>
                            </div>
                            <ul className="space-y-3 text-sm font-light text-synthrova-black/80 leading-relaxed">
                              {role.minQualifications.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 bg-synthrova-black/40 rounded-full mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Preferred Qualifications */}
                          <div className="bg-synthrova-white p-6 border border-synthrova-lightgrey/20">
                            <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/50 mb-4 pb-2 border-b border-synthrova-lightgrey/20 flex items-center justify-between">
                              <span>PREFERRED QUALIFICATIONS</span>
                              <span className="text-[10px] text-synthrova-black/40">DESIRABLE</span>
                            </div>
                            <ul className="space-y-3 text-sm font-light text-synthrova-black/80 leading-relaxed">
                              {role.prefQualifications.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 bg-synthrova-blue/70 rounded-full mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Eligibility & Engagement Details */}
                          <div className="bg-synthrova-white p-6 border border-synthrova-lightgrey/20 flex flex-col justify-between">
                            <div>
                              <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/50 mb-4 pb-2 border-b border-synthrova-lightgrey/20">
                                ELIGIBILITY &amp; EXPECTATIONS
                              </div>
                              <ul className="space-y-3 text-sm font-light text-synthrova-black/80 leading-relaxed mb-6">
                                {role.eligibility.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-synthrova-blue mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="pt-4 border-t border-synthrova-lightgrey/20">
                                <div className="font-mono text-[11px] tracking-widest uppercase text-synthrova-black/50 mb-1">
                                  ENGAGEMENT STRUCTURE
                                </div>
                                <p className="text-xs font-light text-synthrova-black/80 leading-relaxed">
                                  {role.engagement}
                                </p>
                              </div>
                            </div>

                            {/* Full Apply Button */}
                            <div className="mt-8 pt-4 border-t border-synthrova-lightgrey/20">
                              <a
                                href={mailtoUrl}
                                className="w-full py-3.5 px-6 bg-synthrova-black text-synthrova-white text-xs md:text-sm font-medium tracking-wide uppercase hover:bg-synthrova-blue transition-colors flex items-center justify-center group"
                              >
                                <span>{role.applyButtonText}</span>
                              </a>
                              <p className="text-[11px] font-mono text-synthrova-black/50 text-center mt-2">
                                Submissions: careers@synthrova.in
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REMOTE INTERNSHIP PROGRAM (VISUALLY SEPARATE) */}
      <section className="py-24 md:py-32 bg-synthrova-black text-synthrova-white border-t border-synthrova-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-xs tracking-widest text-synthrova-blue uppercase mb-4">
            EARLY CAREER
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Remote Internship Program
              </h2>
              <p className="text-xl font-light text-synthrova-white/80 leading-relaxed max-w-2xl text-balance">
                For students and early-career professionals who want practical exposure to enterprise technology, regulated supply chains and the development of E-Ledger.
              </p>
            </div>
            <div className="lg:col-span-5 bg-synthrova-white/5 border border-synthrova-white/10 p-6">
              <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
                INTERNSHIP ELIGIBILITY
              </div>
              <ul className="space-y-2 text-xs md:text-sm font-light text-synthrova-white/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Students, recent graduates and early-career professionals may apply.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Relevant coursework, projects or demonstrated skills are preferred.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Strong communication and willingness to learn are required.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Internship opportunities are remote.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Internship availability may depend on current project requirements.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {INTERNSHIPS.map((intern, i) => {
              const internMailto = generateMailtoLink(intern.subject, intern.title, false);
              return (
                <div
                  key={i}
                  className="border border-synthrova-white/10 p-8 hover:border-synthrova-blue/50 transition-colors bg-synthrova-white/5 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-light mb-3 text-synthrova-white">
                      {intern.title}
                    </h3>
                    <div className="font-mono text-xs tracking-widest uppercase text-synthrova-white/40 mb-6 flex items-center justify-between border-b border-synthrova-white/10 pb-2">
                      <span>{intern.type}</span>
                      <span>{intern.duration}</span>
                    </div>
                    <div className="mb-8">
                      <div className="font-mono text-[11px] tracking-widest uppercase text-synthrova-white/40 mb-2">
                        Focus Areas
                      </div>
                      <p className="text-sm font-light text-synthrova-white/70 leading-relaxed">
                        {intern.focus}
                      </p>
                    </div>
                  </div>

                  <a
                    href={internMailto}
                    className="w-full py-3 px-4 bg-transparent border border-synthrova-white/20 text-xs font-mono uppercase tracking-widest text-synthrova-white hover:bg-synthrova-blue hover:border-synthrova-blue hover:text-synthrova-white transition-colors flex items-center justify-center group"
                  >
                    <span>Apply for Internship</span>
                    <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-mono text-xs tracking-widest uppercase text-synthrova-white/60 text-center border-t border-synthrova-white/10 pt-10">
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-2.5" /> Remote-first exposure</div>
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-2.5" /> Engineering &amp; Research Mentorship</div>
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-2.5" /> Real E-Ledger infrastructure context</div>
            <div className="flex items-center"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mr-2.5" /> Flexible engagement</div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK: PRINCIPLES */}
      <section className="py-24 md:py-36 bg-synthrova-white text-synthrova-black border-b border-synthrova-lightgrey/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="font-mono text-xs tracking-widest text-synthrova-blue uppercase mb-4">
              HOW WE WORK
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              We're looking for contribution, not titles.
            </h2>
            <p className="text-xl font-light text-synthrova-black/80 leading-relaxed mb-4 text-balance">
              This is not about adding impressive names or titles to a company profile.
            </p>
            <p className="text-lg font-light text-synthrova-black/65 leading-relaxed text-balance">
              We are looking for people who can actually contribute — challenge assumptions, bring deep domain expertise, validate workflows, architect robust systems, develop enterprise relationships and help build E-Ledger into meaningful infrastructure for regulated supply chains.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl">
            {[
              { num: "01", text: "Challenge assumptions." },
              { num: "02", text: "Bring domain depth." },
              { num: "03", text: "Build for production." },
              { num: "04", text: "Create measurable traction." },
              { num: "05", text: "Think beyond the conventional job description." }
            ].map((principle) => (
              <div
                key={principle.num}
                className="group flex flex-col md:flex-row md:items-baseline border-b border-synthrova-lightgrey/10 pb-8"
              >
                <span className="text-synthrova-blue font-mono text-xl md:text-2xl mb-2 md:mb-0 md:mr-12 md:w-16">
                  {principle.num}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-synthrova-black/50 group-hover:text-synthrova-black transition-colors duration-300">
                  {principle.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 md:py-32 bg-synthrova-offwhite text-synthrova-black border-b border-synthrova-lightgrey/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="font-mono text-xs tracking-widest text-synthrova-blue uppercase mb-4">
              COLLABORATION
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Engagement Models
            </h2>
            <p className="text-lg md:text-xl font-light text-synthrova-black/70">
              Not every opportunity is a conventional full-time position. We structure engagements to match individual expertise, availability, and strategic alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "FULL-TIME LEADERSHIP",
                desc: "For individuals taking substantial ownership of execution and company-building.",
                icon: Cpu
              },
              {
                title: "FOUNDING TEAM",
                desc: "For people joining at an early stage with significant responsibility and long-term commitment.",
                icon: Layers
              },
              {
                title: "ADVISORY",
                desc: "For experienced professionals providing specialized domain or strategic expertise.",
                icon: Compass
              },
              {
                title: "CONSULTING",
                desc: "For professionals contributing defined expertise to specific projects or workflows.",
                icon: ShieldCheck
              },
              {
                title: "DESIGN PARTNERSHIPS",
                desc: "For organizations and professionals helping validate real-world workflows and product requirements.",
                icon: ArrowRight
              }
            ].map((model, i) => (
              <div
                key={i}
                className="bg-synthrova-white p-8 border border-synthrova-lightgrey/30 hover:border-synthrova-blue/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <model.icon className="w-6 h-6 text-synthrova-blue mb-6" />
                  <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-synthrova-black mb-3">
                    {model.title}
                  </h3>
                  <p className="text-base font-light text-synthrova-black/70 leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO EXPRESS INTEREST / FINAL CTA */}
      <section className="py-24 md:py-36 bg-synthrova-black text-synthrova-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-balance">
            Have the experience we're looking for?
          </h2>
          <p className="text-xl md:text-2xl font-light text-synthrova-white/80 max-w-3xl leading-relaxed mb-4 text-balance">
            If your experience aligns with one of these opportunities, we'd like to hear from you.
          </p>
          <p className="text-base md:text-lg font-light text-synthrova-white/60 max-w-2xl leading-relaxed mb-12 text-balance">
            Please select the role that best matches your background and use the dedicated application button to contact the Synthrova team.
          </p>

          <a
            href="#opportunities"
            className="px-10 py-5 bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 inline-flex items-center group shadow-md"
          >
            <span>View Opportunities</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-16 pt-12 border-t border-synthrova-white/10 w-full max-w-xl">
            <p className="text-sm font-light text-synthrova-white/60 mb-2">
              For general inquiries and strategic collaboration:
            </p>
            <p className="font-mono text-sm text-synthrova-blue mb-4">
              info@synthrova.in
            </p>
            <p className="text-xs font-light text-synthrova-white/40">
              <strong className="text-synthrova-white/70">Note:</strong> All career, founding-leadership, and advisory expressions of interest must be submitted through each role's dedicated button directly to{" "}
              <span className="font-mono text-synthrova-white/80">careers@synthrova.in</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
