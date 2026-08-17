import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, ArrowUpRight, Scale, BookOpen, FileText, Newspaper } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function HeroSection() {
  return (
    <section className="relative min-h-[60vh] bg-synthrova-white text-synthrova-black pt-32 pb-24 flex flex-col justify-end overflow-hidden border-b border-synthrova-lightgrey">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
          <div className="font-mono text-sm tracking-widest text-synthrova-blue mb-8 uppercase flex items-center">
            Editorial & Research
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
            Ideas shaping the systems of tomorrow.
          </h1>
          <p className="text-xl md:text-2xl font-light text-synthrova-black/60 max-w-3xl leading-relaxed text-balance">
            Research, analysis and perspectives on technology, regulated industries, infrastructure and emerging systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CategoriesNav() {
  const categories = [
    "Regulated Industries", "Supply Chain", "Compliance", "Enterprise Technology", 
    "Artificial Intelligence", "Energy", "Defence Technology", "Interoperability", 
    "Digital Infrastructure", "Company"
  ];

  return (
    <div className="bg-synthrova-white border-b border-synthrova-lightgrey/10 sticky top-20 md:top-24 z-40 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center space-x-8 py-4 whitespace-nowrap">
        <span className="font-mono text-xs tracking-widest text-synthrova-black/40 uppercase">Topics</span>
        {categories.map((cat) => (
          <button key={cat} className="text-sm font-light text-synthrova-black/70 hover:text-synthrova-black hover:underline underline-offset-4 decoration-synthrova-black/20 transition-all">
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

function FeaturedStorySection() {
  return (
    <section className="py-20 md:py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-0 border border-synthrova-lightgrey/10 group cursor-pointer hover:border-synthrova-lightgrey/30 transition-colors">
          
          <div className="lg:w-3/5 bg-synthrova-black/5 relative overflow-hidden min-h-[400px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-synthrova-lightgrey/10">
            {/* Technical visual pattern */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <defs>
                   <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                     <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
                   </pattern>
                 </defs>
                 <rect width="100" height="100" fill="url(#grid)" />
                 
                 <circle cx="30" cy="40" r="15" fill="none" stroke="rgba(0,188,212,0.2)" strokeWidth="0.5" />
                 <circle cx="30" cy="40" r="10" fill="none" stroke="rgba(0,188,212,0.4)" strokeWidth="0.5" />
                 <circle cx="30" cy="40" r="2" fill="#00BCD4" />
                 
                 <circle cx="70" cy="60" r="20" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                 <circle cx="70" cy="60" r="2" fill="currentColor" />
                 
                 <line x1="30" y1="40" x2="70" y2="60" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
               </svg>
            </div>
            <div className="absolute top-6 left-6 bg-synthrova-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase border border-synthrova-lightgrey/10">
              Featured Analysis
            </div>
          </div>
          
          <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center bg-synthrova-white relative">
            <div className="font-mono text-[10px] tracking-widest text-synthrova-black/60 uppercase mb-6">
              Digital Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-tight group-hover:text-synthrova-blue transition-colors">
              The Convergence of Cryptography and Physical Supply Chains
            </h2>
            <p className="text-lg font-light text-synthrova-black/70 leading-relaxed mb-12">
              Why traditional database architectures fail to provide the structural accountability required for heavily regulated, multi-stakeholder logistics networks.
            </p>
            <div className="flex items-center justify-between mt-auto border-t border-synthrova-lightgrey/10 pt-6">
              <span className="text-sm font-mono tracking-widest text-synthrova-black/40">AUG 12, 2026</span>
              <span className="flex items-center text-sm font-medium">Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function ArticlesGridSection() {
  const articles = [
    { cat: "Enterprise Technology", title: "Why E-Ledger is Built on Byzantine Fault Tolerance", desc: "Examining the mathematical guarantees required to operate mission-critical systems across untrusted organizational nodes.", date: "AUG 01, 2026" },
    { cat: "Regulated Industries", title: "The Limits of SaaS in Regulated Manufacturing", desc: "As regulatory scrutiny increases, standard multi-tenant architectures are becoming structural liabilities for critical manufacturers.", date: "JUL 24, 2026" },
    { cat: "Artificial Intelligence", title: "Contextual AI: The Next Frontier for Industrial Intelligence", desc: "Machine learning models operating on cryptographically verified datasets eliminate the 'garbage in, garbage out' paradigm.", date: "JUL 15, 2026" },
    { cat: "Energy", title: "Immutable Architectures for the Energy Grid", desc: "Exploring decentralized telemetry and consensus protocols required to coordinate the next generation of microgrids.", date: "JUL 08, 2026" },
    { cat: "Compliance", title: "Continuous Proof vs. Point-in-Time Auditing", desc: "The transition from retrospective manual reviews to automated, mathematically verifiable state compliance.", date: "JUN 30, 2026" },
    { cat: "Interoperability", title: "Bridging Legacy ERPs with Verifiable Networks", desc: "Strategic implementation frameworks for connecting existing enterprise systems to the Synthrova infrastructure layer.", date: "JUN 18, 2026" }
  ];

  return (
    <section className="py-20 bg-synthrova-offwhite text-synthrova-black border-t border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-light tracking-tight mb-12">Latest Perspectives</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-synthrova-black/10 border border-synthrova-lightgrey/10">
          {articles.map((article, i) => (
            <Link to="#" key={i} className="bg-synthrova-white p-10 flex flex-col group hover:bg-synthrova-blue/5 transition-colors">
              <div className="font-mono text-[10px] tracking-widest text-synthrova-black/60 uppercase mb-6">
                {article.cat}
              </div>
              <h4 className="text-2xl font-light tracking-tight mb-4 leading-tight group-hover:text-synthrova-blue transition-colors">
                {article.title}
              </h4>
              <p className="text-synthrova-black/70 font-light leading-relaxed mb-12 flex-grow">
                {article.desc}
              </p>
              <div className="flex items-center justify-between border-t border-synthrova-lightgrey/5 pt-6 mt-auto">
                <span className="text-xs font-mono tracking-widest text-synthrova-black/40">{article.date}</span>
                <ArrowUpRight className="w-4 h-4 text-synthrova-black/30 group-hover:text-synthrova-black transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResearchAndRegulatorySection() {
  const researchTypes = [
    { title: "Industry Reports", icon: BookOpen },
    { title: "Technical Papers", icon: FileText },
    { title: "Architecture Explainers", icon: ArrowRight },
    { title: "Case Studies", icon: ArrowRight },
    { title: "Research Notes", icon: ArrowRight }
  ];

  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black border-t border-synthrova-lightgrey/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Research */}
          <div>
            <div className="flex items-center mb-12">
              <BookOpen className="w-6 h-6 mr-4 text-synthrova-blue" />
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Research & Publications</h2>
            </div>
            
            <div className="border-t border-synthrova-lightgrey/10">
              {researchTypes.map((type, i) => (
                <Link to="#" key={i} className="flex items-center justify-between py-6 border-b border-synthrova-lightgrey/10 group hover:pl-2 transition-all">
                  <span className="text-xl font-light">{type.title}</span>
                  <type.icon className="w-5 h-5 text-synthrova-black/30 group-hover:text-synthrova-blue transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Regulatory Intelligence */}
          <div>
            <div className="flex items-center mb-12">
              <Scale className="w-6 h-6 mr-4 text-synthrova-black" />
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Regulatory Intelligence</h2>
            </div>
            
            <div className="bg-synthrova-offwhite border border-synthrova-lightgrey/10 p-8 md:p-12">
              <div className="font-mono text-[10px] tracking-widest text-synthrova-black/60 uppercase mb-8 pb-4 border-b border-synthrova-lightgrey/10">
                Active Analysis
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-4 leading-tight hover:text-synthrova-blue cursor-pointer transition-colors">
                Structural Implications of the 2026 Pharmaceutical Traceability Mandates
              </h3>
              <p className="text-synthrova-black/70 font-light leading-relaxed mb-8">
                An architectural analysis of evolving compliance frameworks and the technical infrastructure required to satisfy multi-jurisdictional reporting requirements without operational degradation.
              </p>
              
              <Link to="#" className="inline-flex items-center text-sm font-medium hover:text-synthrova-blue transition-colors group mb-12">
                Read Analysis <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="bg-synthrova-black/5 p-4 border-l-2 border-synthrova-lightgrey/20 text-xs text-synthrova-black/70 leading-relaxed font-mono">
                <strong>Disclaimer:</strong> Content within the Regulatory Intelligence section constitutes technical and architectural analysis of regulatory frameworks. It is provided for informational purposes only and does not constitute legal advice.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function NewsroomSection() {
  const news = [
    { date: "AUG 10, 2026", type: "Pilot", title: "Synthrova initiates E-Ledger pilot for controlled pharmaceutical provenance tracking." },
    { date: "JUL 05, 2026", type: "Incubation", title: "Synthrova admitted to Kasliwal Startup Incubation Foundation." },
    { date: "JUN 12, 2026", type: "Recognition", title: "Synthrova Technologies officially recognized by DPIIT." },
    { date: "MAY 20, 2026", type: "Product Update", title: "E-Ledger v1.2 introduces advanced Zero-Knowledge Proof modules for confidential supplier logic." }
  ];

  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black border-t border-synthrova-lightgrey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="flex items-center mb-6">
              <Newspaper className="w-6 h-6 mr-4 text-synthrova-white/50" />
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">Newsroom</h2>
            </div>
            <p className="text-lg font-light text-synthrova-black/60">
              Verified announcements, product updates, and company milestones.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="border-t border-synthrova-lightgrey">
              {news.map((item, i) => (
                <div key={i} className="py-8 border-b border-synthrova-lightgrey flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 group">
                  <div className="md:w-32 shrink-0">
                    <div className="font-mono text-[10px] tracking-widest text-synthrova-blue uppercase mb-1">{item.type}</div>
                    <div className="font-mono text-xs text-synthrova-white/40">{item.date}</div>
                  </div>
                  <h3 className="text-xl font-light leading-snug group-hover:text-synthrova-blue transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <button className="mt-12 inline-flex items-center text-sm font-medium hover:text-synthrova-blue transition-colors">
              View all announcements <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


function GlossarySection() {
  const terms = [
    {
      term: "What is compliance infrastructure?",
      def: "Compliance infrastructure refers to the foundational digital systems, ledgers, and data pipelines that enable an organization to automatically record, verify, and report regulatory data without relying on manual intervention."
    },
    {
      term: "What is regulatory technology (RegTech)?",
      def: "RegTech is the application of advanced technologies—such as distributed ledgers, AI, and cloud computing—to improve the way businesses manage regulatory compliance and interact with regulatory bodies."
    },
    {
      term: "What is pharmaceutical compliance infrastructure?",
      def: "Pharmaceutical compliance infrastructure is the specialized digital system used to trace drugs across the supply chain, verify manufacturing batches, and ensure adherence to strict global pharmaceutical regulations."
    },
    {
      term: "How does E-Ledger improve pharmaceutical supply chain traceability?",
      def: "E-Ledger provides a cryptographically verified, shared transaction layer that connects manufacturers, distributors, and hospitals, ensuring that every movement of a pharmaceutical product is irrefutably recorded and instantly auditable."
    },
    {
      term: "What is B2B compliance infrastructure?",
      def: "B2B compliance infrastructure is enterprise software designed to synchronize regulatory data and transaction records across multiple cooperating businesses, ensuring mutual compliance within shared supply chains."
    },
    {
      term: "What is B2G technology?",
      def: "B2G (Business-to-Government) technology refers to the digital systems and interoperability platforms that allow private enterprises to securely transmit required compliance and operational data directly to government regulatory agencies."
    },
    {
      term: "What is B2G2B?",
      def: "B2G2B (Business-to-Government-to-Business) is an architectural model where government infrastructure facilitates trusted data exchange and verification between private enterprises, ensuring compliance while protecting proprietary trade secrets."
    },
    {
      term: "What is government-business interoperability?",
      def: "Government-business interoperability is the technical capability for enterprise IT systems (like ERPs) to communicate seamlessly and securely with government regulatory platforms without manual data entry or reconciliation."
    },
    {
      term: "What is supply chain interoperability?",
      def: "Supply chain interoperability is the ability of different organizations within a supply chain to automatically share, understand, and act upon transaction and compliance data across disparate software systems."
    },
    {
      term: "What is automated compliance reconciliation?",
      def: "Automated compliance reconciliation is the process of using software to instantly match transaction records (like invoices, purchase orders, and goods receipts) across different organizations to ensure they align perfectly for regulatory audits."
    },
    {
      term: "What is three-way matching?",
      def: "Three-way matching is an accounting and compliance process that verifies that a purchase order, receiving report (goods receipt), and supplier invoice all match precisely before a transaction is finalized."
    },
    {
      term: "What is four-way matching?",
      def: "Four-way matching extends three-way matching by adding a fourth verification step—typically an inspection or quality assurance report—ensuring that goods are not only received and invoiced correctly, but also meet regulatory quality standards."
    },
    {
      term: "What is regulatory data infrastructure?",
      def: "Regulatory data infrastructure consists of the databases, data pipelines, and cryptographic storage systems used specifically to secure, organize, and retain data required for regulatory audits."
    },
    {
      term: "What technologies does Synthrova develop?",
      def: "Synthrova develops enterprise interoperability systems, distributed ledger technology (E-Ledger) for compliance, data infrastructure, and emerging systems in Artificial Intelligence and decision intelligence."
    },
    {
      term: "What are Synthrova's upcoming technology programs?",
      def: "Synthrova is actively researching and developing emerging technology programs in enterprise AI and decision intelligence, intelligent energy systems, and secure defence technology infrastructure."
    }
  ];

  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-t border-synthrova-lightgrey/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Technology Glossary & Architecture FAQs</h2>
        <div className="space-y-12">
          {terms.map((item, i) => (
            <div key={i} className="border-b border-synthrova-lightgrey/20 pb-8">
              <h3 className="text-xl font-medium mb-4">{item.term}</h3>
              <p className="text-lg font-light text-synthrova-black/70 leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Insights() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-white min-h-screen">
      <SEO 
        title="Insights | Synthrova Technologies"
        description="Research, analysis, and perspectives on technology, regulated industries, infrastructure, and emerging systems from Synthrova Technologies."
        canonical="/insights"
      />
      
      <HeroSection />
      <CategoriesNav />
      <FeaturedStorySection />
      <ArticlesGridSection />
      <GlossarySection />
      <ResearchAndRegulatorySection />
      <NewsroomSection />
    </div>
  );
}
