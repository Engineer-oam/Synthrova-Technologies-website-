import { ArrowRight, Check, ShieldCheck, Building2, Network, GitPullRequest, Milestone, Users2 } from "lucide-react";
import { ShareOpportunity } from "./ShareOpportunity";

interface CooExecutiveRoleDetailProps {
  mailtoUrl: string;
}

export function CooExecutiveRoleDetail({ mailtoUrl }: CooExecutiveRoleDetailProps) {
  return (
    <div className="space-y-12 text-synthrova-black">
      {/* ROLE INTRODUCTION & METADATA OVERVIEW */}
      <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-8 mb-8 border-b border-synthrova-lightgrey/20 font-mono text-xs">
          <div>
            <span className="text-synthrova-black/50 block mb-1 uppercase tracking-wider">Company</span>
            <span className="text-synthrova-black font-medium">Synthrova Technologies Pvt. Ltd.</span>
          </div>
          <div>
            <span className="text-synthrova-black/50 block mb-1 uppercase tracking-wider">Product</span>
            <span className="text-synthrova-blue font-medium">E-Ledger</span>
          </div>
          <div>
            <span className="text-synthrova-black/50 block mb-1 uppercase tracking-wider">Location</span>
            <span className="text-synthrova-black font-medium">India | Hybrid / On-site</span>
          </div>
          <div>
            <span className="text-synthrova-black/50 block mb-1 uppercase tracking-wider">Reporting To</span>
            <span className="text-synthrova-black font-medium">Founder &amp; CEO</span>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
            ABOUT SYNTHROVA
          </div>
          <p className="text-lg md:text-xl font-light text-synthrova-black/80 leading-relaxed mb-4">
            Synthrova Technologies is building infrastructure for trusted, interoperable digital records across regulated supply chains.
          </p>
          <p className="text-base md:text-lg font-light text-synthrova-black/70 leading-relaxed mb-4">
            Our flagship platform, <strong className="font-medium text-synthrova-black">E-Ledger</strong>, is designed to create a shared, verifiable transaction and compliance layer between organizations without requiring them to replace their existing ERP, QMS, WMS or other enterprise systems.
          </p>
          <p className="text-base font-light text-synthrova-black/70 leading-relaxed mb-4">
            We are initially focused on the pharmaceutical sector, with a long-term vision spanning other regulated industries.
          </p>
          <p className="text-base font-light text-synthrova-black/90 leading-relaxed border-l-2 border-synthrova-blue pl-4 py-1">
            We are now building the leadership team that will take E-Ledger from product development into real-world industry adoption.
          </p>
        </div>
      </div>

      {/* THE OPPORTUNITY */}
      <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-12">
        <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-4">
          THE OPPORTUNITY
        </div>
        <h3 className="text-3xl md:text-4xl font-light tracking-tight text-synthrova-black mb-6">
          This is not a conventional startup COO role.
        </h3>
        <p className="text-lg font-light text-synthrova-black/80 leading-relaxed mb-6">
          We are looking for a senior pharmaceutical industry executive to join Synthrova as Chief Operating Officer / President — Pharma Industry &amp; Strategic Partnerships.
        </p>
        <p className="text-base md:text-lg font-light text-synthrova-black/70 leading-relaxed mb-8">
          We are looking for an individual who has spent a substantial part of their career inside the pharmaceutical ecosystem and understands how manufacturers, distributors, hospitals, regulators, quality organizations, technology providers and supply-chain stakeholders operate.
        </p>

        <div className="bg-synthrova-offwhite p-6 md:p-8 border border-synthrova-lightgrey/30 mb-8">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/60 mb-4">
            This person will help Synthrova:
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-light text-synthrova-black/90">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-2 flex-shrink-0" />
              <span>Establish its first industry relationships.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-2 flex-shrink-0" />
              <span>Identify high-value pharmaceutical use cases.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-2 flex-shrink-0" />
              <span>Secure design partners.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-2 flex-shrink-0" />
              <span>Structure enterprise pilots.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-2 flex-shrink-0" />
              <span>Develop strategic partnerships.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-2 flex-shrink-0" />
              <span>Build the foundation for E-Ledger adoption across the pharmaceutical supply chain.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-synthrova-black text-synthrova-white border-l-4 border-synthrova-blue">
          <p className="font-light text-lg md:text-xl leading-relaxed">
            You will not simply advise the company.
          </p>
          <p className="text-xl md:text-2xl font-normal text-synthrova-blue tracking-tight mt-1">
            You will help build the market.
          </p>
        </div>
      </div>

      {/* WHAT YOU WILL OWN (8 MAJOR RESPONSIBILITY AREAS) */}
      <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-12">
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
            EXECUTIVE MANDATE
          </div>
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-synthrova-black mb-4">
            What You Will Own
          </h3>
          <p className="text-base md:text-lg font-light text-synthrova-black/70">
            Eight major responsibility areas establishing E-Ledger's trajectory across the pharmaceutical supply chain.
          </p>
        </div>

        <div className="space-y-8">
          {/* 01 — PHARMACEUTICAL INDUSTRY STRATEGY */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                01
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Pharmaceutical Industry Strategy
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Define Synthrova's pharmaceutical industry strategy in collaboration with the Founder &amp; CEO.
            </p>
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                Identify:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm font-light text-synthrova-black/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full" />
                  <span>High-value supply-chain problems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full" />
                  <span>Inter-organizational reconciliation gaps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full" />
                  <span>Traceability and serialization opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full" />
                  <span>Compliance and audit inefficiencies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full" />
                  <span>Data interoperability problems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full" />
                  <span>Areas where a shared transaction layer can create measurable value</span>
                </li>
              </ul>
            </div>
            <p className="text-xs md:text-sm font-mono text-synthrova-blue border-t border-synthrova-lightgrey/20 pt-3">
              Translate industry requirements into commercially viable E-Ledger use cases.
            </p>
          </div>

          {/* 02 — DESIGN PARTNER ACQUISITION */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                02
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Design Partner Acquisition
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Lead the identification and acquisition of Synthrova's first pharmaceutical design partners.
            </p>
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                Build relationships with:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Pharmaceutical manufacturers",
                  "API manufacturers",
                  "CDMOs",
                  "Distributors and wholesalers",
                  "Hospitals and hospital networks",
                  "Pharmacy networks",
                  "Logistics providers",
                  "Quality organizations",
                  "Industry associations",
                  "Technology and ERP partners"
                ].map((partner, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-synthrova-white border border-synthrova-lightgrey/30 text-xs font-light text-synthrova-black/80"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-synthrova-white border border-synthrova-lightgrey/30 border-l-2 border-l-synthrova-blue">
              <p className="text-xs font-mono tracking-wider uppercase text-synthrova-black/50">Core Philosophy</p>
              <p className="text-sm font-light text-synthrova-black/80 mt-1">
                The objective is not to accumulate meetings. <strong className="font-medium text-synthrova-black">The objective is to establish live, measurable industry pilots.</strong>
              </p>
            </div>
          </div>

          {/* 03 — INDUSTRY CONSORTIUM DEVELOPMENT */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                03
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Industry Consortium Development
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-6">
              Develop the relationships necessary to bring multiple stakeholders into a common pilot environment.
            </p>

            {/* Visual ecosystem illustration */}
            <div className="bg-synthrova-white p-6 border border-synthrova-lightgrey/30 mb-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-synthrova-black/50 mb-4 text-center">
                Target Ecosystem Relationship Flow
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 font-mono text-xs md:text-sm">
                <div className="px-5 py-3 border border-synthrova-lightgrey/50 bg-synthrova-offwhite text-synthrova-black text-center w-full md:w-auto">
                  Manufacturer
                </div>
                <ArrowRight className="w-4 h-4 text-synthrova-blue rotate-90 md:rotate-0 flex-shrink-0" />
                <div className="px-5 py-3 border border-synthrova-lightgrey/50 bg-synthrova-offwhite text-synthrova-black text-center w-full md:w-auto">
                  Distributor
                </div>
                <ArrowRight className="w-4 h-4 text-synthrova-blue rotate-90 md:rotate-0 flex-shrink-0" />
                <div className="px-5 py-3 border border-synthrova-blue/40 bg-synthrova-blue/5 text-synthrova-black text-center w-full md:w-auto">
                  Hospital / Pharmacy
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-synthrova-lightgrey/20 text-center font-mono text-[11px] text-synthrova-blue">
                Shared Transaction &amp; Verifiable Compliance Layer (E-Ledger)
              </div>
            </div>

            <p className="text-sm font-light text-synthrova-black/80 leading-relaxed">
              E-Ledger should demonstrate value across organizational boundaries. The role requires the ability to bring organizations with different commercial interests together around a shared operational or regulatory problem.
            </p>
          </div>

          {/* 04 — ENTERPRISE GTM */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                04
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Enterprise GTM
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Develop the enterprise go-to-market strategy for E-Ledger.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                  Own Execution:
                </span>
                <ul className="space-y-1.5 text-xs md:text-sm font-light text-synthrova-black/80">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Enterprise discovery</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Strategic accounts</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Pilot proposals</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Commercial negotiations</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Partnership structures</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Procurement processes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full" />Customer onboarding &amp; Expansion</li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                  Work directly with senior executives including:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "CEOs",
                    "COOs",
                    "CFOs",
                    "CIOs",
                    "CTOs",
                    "Chief Supply Chain Officers",
                    "Quality Heads",
                    "Regulatory Affairs Heads",
                    "Digital Transformation Heads"
                  ].map((role, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-synthrova-white border border-synthrova-lightgrey/30 text-xs font-mono text-synthrova-black/80"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 05 — REGULATORY & INDUSTRY ENGAGEMENT */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                05
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Regulatory &amp; Industry Engagement
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Develop strategic relationships across India's pharmaceutical regulatory and industry ecosystem.
            </p>
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                Relevant exposure may include:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "CDSCO",
                  "Ministry of Health & Family Welfare",
                  "Department of Pharmaceuticals",
                  "State drug-control authorities",
                  "C-DAC",
                  "GS1 India",
                  "Pharmaceutical industry associations",
                  "Standards organizations",
                  "Healthcare institutions"
                ].map((org, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-synthrova-white border border-synthrova-lightgrey/30 text-xs font-mono text-synthrova-black/80"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-synthrova-white border-l-2 border-synthrova-blue">
              <p className="text-xs font-mono uppercase tracking-wider text-synthrova-black/50 mb-1">Guiding Principle</p>
              <p className="text-sm font-light text-synthrova-black/85 italic">
                "The role is to understand where E-Ledger can complement existing regulatory and industry initiatives, not attempt to replace them."
              </p>
            </div>
          </div>

          {/* 06 — PRODUCT-INDUSTRY TRANSLATION */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                06
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Product-Industry Translation
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Act as the principal bridge between the pharmaceutical industry and Synthrova's technology/product organization.
            </p>

            <div className="bg-synthrova-white p-6 border border-synthrova-lightgrey/30 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/50 block mb-2">
                Real Industry Input:
              </span>
              <p className="text-sm md:text-base font-light italic text-synthrova-black mb-6 bg-synthrova-offwhite p-3 border-l-2 border-synthrova-blue">
                "Our teams spend several days reconciling this transaction every month."
              </p>

              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/50 block mb-3">
                Rigorous Translation Flow:
              </span>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-2 font-mono text-[11px] md:text-xs">
                {[
                  "Industry Problem",
                  "Workflow Requirements",
                  "Data Requirements",
                  "Integration Requirements",
                  "Compliance Requirements",
                  "Measurable KPIs",
                  "Commercial Value"
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-2.5 py-1.5 bg-synthrova-offwhite border border-synthrova-lightgrey/40 text-synthrova-black text-center whitespace-nowrap">
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-synthrova-blue font-bold">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm font-light text-synthrova-black/80">
              The role works closely with the CTO and product team to ensure E-Ledger solves real pharmaceutical problems rather than theoretical ones.
            </p>
          </div>

          {/* 07 — STRATEGIC PARTNERSHIPS */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                07
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Strategic Partnerships
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Identify and develop partnerships that can accelerate adoption.
            </p>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                Potential partners include:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs md:text-sm font-light text-synthrova-black/80">
                {[
                  "ERP providers",
                  "Supply-chain technology companies",
                  "Serialization providers",
                  "GS1 ecosystem participants",
                  "Logistics technology providers",
                  "Healthcare technology companies",
                  "Industry associations",
                  "Consulting organizations",
                  "System integrators",
                  "Regulatory technology organizations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-synthrova-white p-2 border border-synthrova-lightgrey/20">
                    <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 08 — COMMERCIAL VALIDATION */}
          <div className="border border-synthrova-lightgrey/30 p-6 md:p-8 bg-synthrova-offwhite/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-synthrova-blue font-bold px-2 py-0.5 bg-synthrova-blue/10 border border-synthrova-blue/30">
                08
              </span>
              <h4 className="text-xl font-light tracking-tight text-synthrova-black">
                Commercial Validation
              </h4>
            </div>
            <p className="text-sm md:text-base font-light text-synthrova-black/80 leading-relaxed mb-4">
              Establish evidence that E-Ledger creates measurable economic and operational value.
            </p>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-2">
                For every pilot, establish appropriate metrics such as:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Reduction in reconciliation time",
                  "Reduction in manual data entry",
                  "Reduction in transaction disputes",
                  "Audit preparation time",
                  "Traceability time",
                  "Compliance effort",
                  "Exception resolution time",
                  "Data integrity",
                  "Cost savings"
                ].map((metric, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-synthrova-white border border-synthrova-lightgrey/30 text-xs font-mono text-synthrova-black/80"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-synthrova-white border-l-2 border-synthrova-blue">
              <p className="text-xs font-mono uppercase tracking-wider text-synthrova-black/50">Core Directive</p>
              <p className="text-sm font-medium text-synthrova-black mt-1">
                Convert pilot participation into commercially defensible evidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QUALIFICATIONS: MINIMUM & STRONGLY PREFERRED */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Minimum Qualifications */}
        <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-10">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/50 mb-2 pb-2 border-b border-synthrova-lightgrey/20 flex items-center justify-between">
            <span>MINIMUM QUALIFICATIONS</span>
            <span className="text-xs text-synthrova-blue font-mono font-medium">REQUIRED</span>
          </div>
          <h4 className="text-2xl font-light text-synthrova-black mb-6">
            Minimum Qualifications
          </h4>
          <ul className="space-y-4 text-sm font-light text-synthrova-black/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>15+ years of professional experience in the pharmaceutical, life-sciences, healthcare supply-chain, or closely related regulated industry.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <div>
                <span>Significant experience in a senior leadership position such as:</span>
                <div className="mt-2 pl-2 border-l border-synthrova-lightgrey/30 space-y-1 text-xs text-synthrova-black/70 font-mono">
                  <div>• VP / SVP</div>
                  <div>• Head of Supply Chain / Operations</div>
                  <div>• Head of Commercial Operations</div>
                  <div>• COO / Business Unit Head</div>
                  <div>• Digital Transformation Head</div>
                  <div>• Serialization / Track &amp; Trace Head</div>
                  <div>• Supply Chain Transformation Leader (or equivalent)</div>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Deep understanding of pharmaceutical supply chains.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Experience working across multiple organizations rather than exclusively within a single internal function.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Demonstrated experience leading large-scale cross-functional or cross-organizational initiatives.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Strong understanding of pharmaceutical quality, compliance, distribution, traceability or regulatory workflows.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Demonstrated ability to engage C-suite and senior pharmaceutical executives.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Strong strategic partnership and enterprise business-development capability.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-synthrova-black/50 rounded-full mt-2 flex-shrink-0" />
              <span>Excellent communication and negotiation skills.</span>
            </li>
          </ul>
        </div>

        {/* Strongly Preferred */}
        <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-synthrova-black/50 mb-2 pb-2 border-b border-synthrova-lightgrey/20 flex items-center justify-between">
              <span>STRONGLY PREFERRED</span>
              <span className="text-xs text-synthrova-black/50 font-mono">DOMAIN DEPTH</span>
            </div>
            <h4 className="text-2xl font-light text-synthrova-black mb-6">
              Preferred Domain Qualifications
            </h4>
            <p className="text-sm font-light text-synthrova-black/70 mb-4">
              Experience with one or more of:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-synthrova-black/80 mb-8">
              {[
                "DSCSA",
                "Serialization",
                "Track & Trace",
                "GS1 standards",
                "QR / barcode systems",
                "Pharmaceutical ERP",
                "SAP",
                "WMS",
                "QMS",
                "GMP / GxP",
                "Supply-chain digitization",
                "Data interoperability",
                "Digital transformation",
                "Regulatory technology",
                "Pharmaceutical distribution",
                "Contract manufacturing",
                "Hospital procurement",
                "Chargebacks / reconciliation"
              ].map((domain, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-synthrova-offwhite border border-synthrova-lightgrey/20">
                  <Check className="w-3.5 h-3.5 text-synthrova-blue flex-shrink-0" />
                  <span>{domain}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-synthrova-offwhite border border-synthrova-lightgrey/30 border-l-2 border-synthrova-blue">
            <span className="font-mono text-[11px] tracking-wider uppercase text-synthrova-black/60 block mb-1">
              Indian Institutional Ecosystem
            </span>
            <p className="text-xs font-light text-synthrova-black/80 leading-relaxed">
              Experience interacting with Indian regulatory and industry institutions is highly desirable.
            </p>
          </div>
        </div>
      </div>

      {/* THE NETWORK REQUIREMENT */}
      <div className="bg-synthrova-white border-2 border-synthrova-black/80 p-8 md:p-12 relative overflow-hidden">
        <div className="max-w-4xl">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-4">
            EVALUATION CRITERIA
          </div>
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-synthrova-black mb-4">
            The Network Requirement
          </h3>
          <p className="text-xl font-light text-synthrova-black/90 leading-relaxed mb-4">
            This role requires more than a strong résumé.
          </p>
          <p className="text-base md:text-lg font-light text-synthrova-black/75 leading-relaxed mb-8">
            The successful candidate should have established professional relationships across the pharmaceutical ecosystem.
          </p>

          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-3">
              Relevant relationships may include senior decision-makers within:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-synthrova-black/80">
              {[
                "Pharmaceutical manufacturers",
                "API manufacturers",
                "Distributors",
                "Hospitals",
                "Pharmacy networks",
                "Logistics providers",
                "Healthcare tech organizations",
                "Industry associations"
              ].map((partner, idx) => (
                <div key={idx} className="p-3 bg-synthrova-offwhite border border-synthrova-lightgrey/30 text-center flex items-center justify-center">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-synthrova-black text-synthrova-white border-l-4 border-synthrova-blue">
            <p className="text-base md:text-lg font-light text-synthrova-white/80">
              You will not be evaluated on the number of contacts in your phone.
            </p>
            <p className="text-lg md:text-xl font-medium text-synthrova-blue mt-1">
              You will be evaluated on your ability to convert relationships into serious strategic conversations and eventually live pilots.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT SUCCESS LOOKS LIKE (THREE-STAGE HORIZONTAL TIMELINE) */}
      <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-12">
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
            ROADMAP &amp; OBJECTIVES
          </div>
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-synthrova-black mb-4">
            What Success Looks Like
          </h3>
          <p className="text-sm font-light text-synthrova-black/60 italic">
            Note: Expected areas of responsibility and strategic objectives, not guaranteed outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FIRST 90 DAYS */}
          <div className="border border-synthrova-lightgrey/30 p-6 bg-synthrova-offwhite/50 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-synthrova-blue uppercase tracking-widest pb-3 border-b border-synthrova-lightgrey/20 mb-4 font-bold">
                STAGE 01 — FIRST 90 DAYS
              </div>
              <ul className="space-y-3 text-xs md:text-sm font-light text-synthrova-black/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Establish Synthrova's pharmaceutical industry strategy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Identify the highest-value initial E-Ledger use cases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Build a qualified pipeline of pharmaceutical stakeholders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Establish relationships with senior decision-makers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Identify potential design partners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Refine the enterprise pilot proposition.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-synthrova-lightgrey/20 font-mono text-[11px] text-synthrova-black/50">
              Foundational Focus
            </div>
          </div>

          {/* 3–6 MONTHS */}
          <div className="border border-synthrova-lightgrey/30 p-6 bg-synthrova-offwhite/50 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-synthrova-blue uppercase tracking-widest pb-3 border-b border-synthrova-lightgrey/20 mb-4 font-bold">
                STAGE 02 — 3–6 MONTHS
              </div>
              <ul className="space-y-3 text-xs md:text-sm font-light text-synthrova-black/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Secure the first serious design-partner relationships.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Structure one or more controlled pharmaceutical pilots.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Establish measurable pilot KPIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Build strategic relationships across manufacturers, distributors and downstream stakeholders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Develop the enterprise GTM framework.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-synthrova-lightgrey/20 font-mono text-[11px] text-synthrova-black/50">
              Pilot Validation
            </div>
          </div>

          {/* 6–12 MONTHS */}
          <div className="border border-synthrova-lightgrey/30 p-6 bg-synthrova-offwhite/50 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-synthrova-blue uppercase tracking-widest pb-3 border-b border-synthrova-lightgrey/20 mb-4 font-bold">
                STAGE 03 — 6–12 MONTHS
              </div>
              <ul className="space-y-3 text-xs md:text-sm font-light text-synthrova-black/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Convert successful pilots into commercial relationships.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Expand participation across the pharmaceutical ecosystem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Develop strategic industry partnerships.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Establish Synthrova as a credible participant in India's pharmaceutical digitization ecosystem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full mt-1.5 flex-shrink-0" />
                  <span>Build the foundation for broader regulatory and industry engagement.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-synthrova-lightgrey/20 font-mono text-[11px] text-synthrova-black/50">
              Commercial Expansion
            </div>
          </div>
        </div>
      </div>

      {/* WHAT WE ARE LOOKING FOR */}
      <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-12">
        <div className="max-w-4xl">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
            CULTURE &amp; MINDSET
          </div>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-synthrova-black mb-6">
            Build something new.
          </h3>
          <p className="text-lg md:text-xl font-light text-synthrova-black/80 leading-relaxed mb-6">
            We are particularly interested in people who have reached a stage in their career where they want to build something new rather than simply operate an existing organization.
          </p>

          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-3">
              The individual should be comfortable with:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono text-synthrova-black/80">
              {[
                "Ambiguity",
                "Building from zero",
                "Enterprise sales",
                "Industry-level problem solving",
                "Regulatory complexity",
                "Multi-stakeholder negotiations",
                "Technology transformation",
                "Startup environments",
                "Personally opening doors",
                "Working directly with founders and technical leadership"
              ].map((trait, idx) => (
                <div key={idx} className="p-3 bg-synthrova-offwhite border border-synthrova-lightgrey/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-synthrova-blue rounded-full flex-shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-synthrova-offwhite border border-synthrova-lightgrey/30 border-l-4 border-synthrova-blue mb-8">
            <p className="text-base md:text-lg font-light text-synthrova-black/90 leading-relaxed">
              You should be equally comfortable sitting with a pharmaceutical CEO discussing strategy and sitting with a product team translating a supply-chain problem into a technical requirement.
            </p>
          </div>

          <div className="pt-6 border-t border-synthrova-lightgrey/20">
            <h4 className="text-2xl md:text-3xl font-light text-synthrova-black mb-2">
              This is not a title-driven role.
            </h4>
            <p className="text-base font-light text-synthrova-black/70">
              The title matters less than the ability to create tangible industry momentum.
            </p>
          </div>
        </div>
      </div>

      {/* THE CORE QUESTION (DARK SECTION) */}
      <div className="bg-synthrova-black text-synthrova-white p-8 md:p-14 border border-synthrova-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-6">
            THE QUESTION WE'RE TRYING TO ANSWER
          </div>
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-8 text-balance">
            "Can we bring the pharmaceutical ecosystem together around a real problem and build a trusted infrastructure layer that solves it?"
          </blockquote>
          <p className="text-base md:text-lg font-light text-synthrova-white/70 max-w-2xl mx-auto leading-relaxed text-balance mb-2">
            If you believe you can help answer that question through industry experience, strategic relationships and execution, we want to hear from you.
          </p>
          <p className="text-xs font-mono text-synthrova-white/40">
            (Synthrova Technologies E-Ledger Strategic Evaluation)
          </p>
        </div>
      </div>

      {/* COMPENSATION & EXECUTIVE STRUCTURE */}
      <div className="bg-synthrova-white border border-synthrova-lightgrey/20 p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
            EXECUTIVE TERMS
          </div>
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-synthrova-black mb-4">
            Compensation &amp; Executive Structure
          </h3>
          <p className="text-base md:text-lg font-light text-synthrova-black/80 leading-relaxed mb-4">
            Competitive executive compensation with meaningful equity participation, structured according to experience, commitment and expected contribution to the company's growth.
          </p>
          <div className="p-4 bg-synthrova-offwhite border border-synthrova-lightgrey/30 border-l-2 border-synthrova-blue">
            <p className="text-sm font-light text-synthrova-black/80 leading-relaxed">
              Exceptional candidates may be considered for an expanded executive mandate, including President / Executive Leadership responsibilities, based on experience and fit.
            </p>
          </div>
        </div>
      </div>

      {/* HOW TO APPLY */}
      <div id="apply-coo" className="bg-synthrova-offwhite border-2 border-synthrova-blue/80 p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="font-mono text-xs tracking-widest uppercase text-synthrova-blue mb-3">
            APPLICATION INSTRUCTIONS
          </div>
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-synthrova-black mb-4">
            How to Apply
          </h3>
          <p className="text-base font-light text-synthrova-black/80 leading-relaxed mb-6">
            Candidates are invited to submit their credentials directly to our founding leadership team:
          </p>

          <div className="bg-synthrova-white p-6 border border-synthrova-lightgrey/30 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-synthrova-black/60 block mb-4">
              Please include the following in your submission:
            </span>
            <ol className="space-y-3 text-sm font-light text-synthrova-black/85">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-synthrova-blue font-bold mt-0.5">1.</span>
                <span>Resume / Executive Profile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-synthrova-blue font-bold mt-0.5">2.</span>
                <span>LinkedIn profile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-synthrova-blue font-bold mt-0.5">3.</span>
                <span>Brief statement describing your most significant pharmaceutical industry initiative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-synthrova-blue font-bold mt-0.5">4.</span>
                <span>Examples of cross-organizational programs you have led</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-synthrova-blue font-bold mt-0.5">5.</span>
                <span>Relevant pharmaceutical industry relationships and ecosystem experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-synthrova-blue font-bold mt-0.5">6.</span>
                <span>A short note describing how you would approach securing Synthrova's first pharmaceutical design partner</span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href={mailtoUrl}
              className="px-8 py-4 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors duration-300 inline-flex items-center group shadow-md"
            >
              <span>Apply for COO / President →</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="font-mono text-xs text-synthrova-black/60">
              <span>Direct Submissions: </span>
              <a href="mailto:careers@synthrova.in" className="text-synthrova-blue hover:underline font-medium">
                careers@synthrova.in
              </a>
            </div>
          </div>
          <p className="text-[11px] font-mono text-synthrova-black/50 mt-4 mb-6">
            Subject: Application — COO / President, Pharma Industry &amp; Strategic Partnerships
          </p>

          <ShareOpportunity
            roleTitle="Chief Operating Officer / President — Pharma Industry & Strategic Partnerships"
            slug="coo-president-pharma"
            shareDescription="Synthrova Technologies is looking for a senior pharmaceutical industry executive to help build the market for E-Ledger."
            className="mt-6 pt-6 border-t border-synthrova-lightgrey/30"
          />
        </div>
      </div>
    </div>
  );
}
