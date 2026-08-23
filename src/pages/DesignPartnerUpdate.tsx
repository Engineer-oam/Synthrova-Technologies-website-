import { SEO } from "../components/SEO";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function DesignPartnerUpdate() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-white bg-[#0A0A0A] text-[#FFFFFF] min-h-screen font-light">
      <SEO 
        title="Calling Audit & CA Firms: Become an E-Ledger Design Partner | Synthrova"
        description="Synthrova is opening a limited Design Partner cohort for audit and CA firms working with pharmaceutical and regulated manufacturing companies to help shape E-Ledger, compliance infrastructure for regulated supply chains."
        canonical="/updates/design-partners-audit-ca"
      />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "Calling Audit & CA Firms: Become an E-Ledger Design Partner",
          "datePublished": "2026-08-23T00:00:00Z",
          "author": [{
            "@type": "Organization",
            "name": "Synthrova Technologies",
            "url": "https://synthrova.com"
          }],
          "publisher": {
            "@type": "Organization",
            "name": "Synthrova Technologies"
          },
          "description": "Synthrova is opening a limited Design Partner cohort for audit and CA firms working with pharmaceutical and regulated manufacturing companies to help shape E-Ledger, compliance infrastructure for regulated supply chains."
        })}
      </script>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-32">
        
        <div className="mb-12">
          <Link to="/updates" className="inline-flex items-center text-sm font-mono tracking-widest text-[#E7E7E4]/60 hover:text-[#FFFFFF] transition-colors uppercase">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Updates
          </Link>
        </div>

        <article className="max-w-3xl">
          
          <header className="mb-16 border-b border-[#FFFFFF]/10 pb-16">
            <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-widest uppercase mb-8">
              <span className="text-[#168FEA] border border-[#168FEA]/30 px-3 py-1">Design Partners</span>
              <span className="text-[#E7E7E4]/60">Aug 23, 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.1] text-balance">
              Calling Audit & CA Firms: Become an E-Ledger Design Partner
            </h1>
            <p className="text-xl md:text-2xl text-[#E7E7E4] leading-relaxed text-balance">
              Synthrova is opening a limited Design Partner cohort for audit and CA firms working with pharmaceutical and regulated manufacturing companies to help shape E-Ledger, compliance infrastructure for regulated supply chains.
            </p>
          </header>

          <div className="space-y-16 text-[#E7E7E4]">
            <section>
              <p className="text-xl leading-relaxed">
                We’re opening a limited Design Partner cohort for audit and CA firms working with pharmaceutical and regulated manufacturing companies.
              </p>
              <p className="text-xl leading-relaxed mt-6">
                We’re building E-Ledger — compliance infrastructure for regulated supply chains.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mt-16 mb-8 text-[#FFFFFF] tracking-tight">The idea is simple</h2>
              <blockquote className="border-l-2 border-[#168FEA] pl-8 my-8 text-2xl font-light italic text-[#FFFFFF]">
                “Why should reconciliation and compliance verification begin only when the audit begins?”
              </blockquote>
              <p className="text-lg leading-relaxed">
                E-Ledger is being designed to maintain a structured, traceable transaction and compliance trail throughout the operating cycle—helping enterprises and auditors work with better-organised evidence when it matters.
              </p>
            </section>

            <section className="border-t border-[#FFFFFF]/10 pt-16">
              <h2 className="text-3xl mb-8 text-[#FFFFFF] tracking-tight">Who are we looking for?</h2>
              <p className="mb-6 text-lg">Audit / CA firms that:</p>
              <ul className="space-y-4 pl-6 list-disc marker:text-[#168FEA] text-lg">
                <li className="pl-2">Work with pharmaceutical or regulated manufacturing clients</li>
                <li className="pl-2">Have experience with SCM, procurement, inventory or compliance audits</li>
                <li className="pl-2">Regularly deal with 3-way / 4-way matching and reconciliation</li>
                <li className="pl-2">Work with records collected from multiple systems and parties</li>
                <li className="pl-2">Are interested in continuous compliance and assurance</li>
              </ul>
            </section>

            <section className="border-t border-[#FFFFFF]/10 pt-16">
              <h2 className="text-3xl mb-8 text-[#FFFFFF] tracking-tight">What’s in it for your firm?</h2>
              <p className="mb-6 text-lg">As a Design Partner, you can:</p>
              <ul className="space-y-4 pl-6 list-disc marker:text-[#168FEA] text-lg">
                <li className="pl-2">Shape the auditor workflow and influence the product roadmap</li>
                <li className="pl-2">Get early access to E-Ledger and new capabilities</li>
                <li className="pl-2">Help develop new continuous compliance & assurance services</li>
                <li className="pl-2">Explore future implementation and advisory opportunities</li>
                <li className="pl-2">Become an early participant in an emerging compliance infrastructure ecosystem</li>
              </ul>
              <p className="mt-8 text-[#E7E7E4]/80 text-base">
                Selected partners may also be eligible for additional commercial benefits based on their level of participation.
              </p>
            </section>

            <section className="border-t border-[#FFFFFF]/10 pt-16">
              <h2 className="text-3xl mb-8 text-[#FFFFFF] tracking-tight">Why join now?</h2>
              <p className="text-lg leading-relaxed">
                We’re not looking for firms simply to test another software tool.
              </p>
              <p className="mt-6 text-lg leading-relaxed">
                We want experienced audit professionals to help us answer a bigger question:
              </p>
              <blockquote className="border-l-2 border-[#168FEA] pl-8 my-8 text-2xl font-light italic text-[#FFFFFF]">
                “What would compliance and audit look like if the evidence was continuously built during the year instead of reconstructed at audit time?”
              </blockquote>
              <p className="text-lg leading-relaxed">
                We’re keeping the initial cohort limited.
              </p>
              <p className="mt-6 text-lg leading-relaxed">
                If your firm works with pharma or regulated-industry clients and this interests you, contact Synthrova directly for details.
              </p>
              <p className="mt-6 text-lg leading-relaxed">
                We’re looking for firms that want to help build this category—not simply adopt another tool.
              </p>
            </section>

            <section className="border-t border-[#FFFFFF]/10 pt-16 pb-8">
              <div className="flex flex-wrap gap-2 mb-16">
                {['Audit', 'CA', 'Pharma', 'Supply Chain', 'Compliance', 'Internal Audit', 'Design Partner', 'RegTech', 'Pharmaceuticals', 'Synthrova', 'E-Ledger'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#FFFFFF]/5 text-[#E7E7E4] text-xs font-mono tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 p-10 md:p-16 text-center rounded-sm">
                <h3 className="text-3xl font-light mb-8 text-[#FFFFFF]">Interested in becoming a Design Partner?</h3>
                <a 
                  href="mailto:info.synthrova@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FFFFFF] text-[#0A0A0A] font-medium hover:bg-[#168FEA] hover:text-[#FFFFFF] transition-colors duration-300 group"
                >
                  Contact Synthrova
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-8 font-mono text-sm tracking-widest text-[#E7E7E4]/60 uppercase">
                  info.synthrova@gmail.com
                </p>
              </div>
            </section>
            
          </div>
        </article>
      </main>
    </div>
  );
}
