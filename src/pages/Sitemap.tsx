import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { 
  Search, 
  ArrowRight, 
  Check, 
  Copy, 
  Layers, 
  ShieldCheck, 
  Briefcase, 
  Network, 
  Building2, 
  Sparkles, 
  SlidersHorizontal,
  ChevronRight,
  Database
} from "lucide-react";

interface SitemapItem {
  title: string;
  path: string;
  description: string;
  category: "Core Architecture" | "Strategic Programs" | "Company & Leadership" | "Careers & Advisory" | "Insights & Updates" | "Trust & Legal";
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  badge?: string;
  isExternal?: boolean;
}

const SITEMAP_DATA: SitemapItem[] = [
  // Core Architecture & Platform
  {
    title: "Home — Flagship Overview",
    path: "/",
    description: "Foundational portal and mission introduction to Synthrova Technologies' enterprise software architectures.",
    category: "Core Architecture",
    changefreq: "weekly",
    priority: "1.0",
    badge: "Core"
  },
  {
    title: "Platform Architecture",
    path: "/platform",
    description: "Mission-critical system infrastructure, cryptographic verification engines, and enterprise resilience frameworks.",
    category: "Core Architecture",
    changefreq: "monthly",
    priority: "0.9",
    badge: "Core"
  },
  {
    title: "E-Ledger Ecosystem",
    path: "/eledger",
    description: "Multi-party cryptographic ledger providing immutable verification for regulated enterprise supply chains.",
    category: "Core Architecture",
    changefreq: "weekly",
    priority: "0.9",
    badge: "Flagship"
  },
  {
    title: "Pharmaceuticals Infrastructure",
    path: "/pharmaceuticals",
    description: "Life-sciences compliance, track-and-trace serialization, and GxP regulatory audit-readiness.",
    category: "Core Architecture",
    changefreq: "monthly",
    priority: "0.9",
    badge: "Industry"
  },
  {
    title: "Technology Stack & Zero-Trust",
    path: "/technology",
    description: "Zero-trust network architecture, distributed consensus, automated threat detection, and telemetry pipelines.",
    category: "Core Architecture",
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    title: "Partner Ecosystem",
    path: "/ecosystem",
    description: "Federated integration network linking pharmaceutical manufacturers, enterprise auditors, and government regulators.",
    category: "Core Architecture",
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    title: "Industries & Critical Sectors",
    path: "/industries",
    description: "High-assurance technological deployment across life sciences, defense aerospace, and utility power grids.",
    category: "Core Architecture",
    changefreq: "monthly",
    priority: "0.8"
  },

  // Strategic Programs
  {
    title: "Strategic Programs Hub",
    path: "/programs",
    description: "National-scale technology initiatives tackling high-stakes infrastructure, sovereign compute, and clean transition.",
    category: "Strategic Programs",
    changefreq: "monthly",
    priority: "0.8",
    badge: "Initiative"
  },
  {
    title: "Artificial Intelligence Program",
    path: "/programs#ai",
    description: "High-integrity AI model deployment, deterministic validation, and governance tooling for mission-critical operations.",
    category: "Strategic Programs",
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    title: "Energy Infrastructure Program",
    path: "/programs#energy",
    description: "Next-generation supervisory control and cryptographically verifiable telemetry for industrial power grids.",
    category: "Strategic Programs",
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    title: "Defence & Aerospace Security Program",
    path: "/programs#defence",
    description: "Resilient communications, hardened edge systems, and sovereign data perimeter protection.",
    category: "Strategic Programs",
    changefreq: "monthly",
    priority: "0.8"
  },

  // Company & Leadership
  {
    title: "Company & Mission",
    path: "/company",
    description: "Foundational philosophy, operational ethics, and organizational blueprint of Synthrova Technologies.",
    category: "Company & Leadership",
    changefreq: "monthly",
    priority: "0.8"
  },
  {
    title: "Executive Leadership & Advisory",
    path: "/leadership",
    description: "Profiles of the executive leadership team, technical fellows, and industry advisory board.",
    category: "Company & Leadership",
    changefreq: "monthly",
    priority: "0.7"
  },
  {
    title: "Civilizational Vision",
    path: "/vision",
    description: "Strategic engineering roadmap for building foundational digital infrastructure that outlasts generations.",
    category: "Company & Leadership",
    changefreq: "monthly",
    priority: "0.7"
  },
  {
    title: "Contact & Institutional Engagements",
    path: "/contact",
    description: "Institutional inquiries, design partnership applications, media contact, and executive correspondence.",
    category: "Company & Leadership",
    changefreq: "monthly",
    priority: "0.8"
  },

  // Insights & Updates
  {
    title: "Insights & Technical Briefings",
    path: "/insights",
    description: "Deep-dive engineering papers, cryptographic architecture analyses, and regulatory whitepapers.",
    category: "Insights & Updates",
    changefreq: "weekly",
    priority: "0.8"
  },
  {
    title: "Updates & Corporate Announcements",
    path: "/updates",
    description: "Chronological announcements, product releases, technical milestones, and institutional alliances.",
    category: "Insights & Updates",
    changefreq: "weekly",
    priority: "0.8"
  },
  {
    title: "Design Partners Audit & CA Advisory Update",
    path: "/updates/design-partners-audit-ca",
    description: "Charter announcement for design partner onboarding across pharmaceutical statutory auditors and CA firms.",
    category: "Insights & Updates",
    changefreq: "monthly",
    priority: "0.8",
    badge: "Update"
  },

  // Careers & Advisory Roles
  {
    title: "Careers & Open Roles Hub",
    path: "/careers",
    description: "Overview of current career opportunities, organizational culture, hiring philosophy, and open leadership tracks.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.9",
    badge: "Hiring"
  },
  {
    title: "COO / President — Pharma Industry & Strategic Partnerships",
    path: "/careers/coo-president-pharma",
    description: "Executive leadership role driving E-Ledger enterprise pilots and commercial partnerships across India's pharma sector.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Executive"
  },
  {
    title: "CTO / Technical Co-Founder — Distributed Systems & Security",
    path: "/careers/cto-technical-co-founder",
    description: "Foundational technical leader spearheading cryptographic protocol development, zero-trust infrastructure, and systems engineering.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Founding"
  },
  {
    title: "Founding Enterprise GTM & Business Development Lead",
    path: "/careers/founding-gtm-enterprise-business-development",
    description: "Core sales and commercial lead targeting enterprise pharma manufacturers, distributors, and hospital procurement chains.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Founding"
  },
  {
    title: "Strategic GTM & Enterprise Partnerships Advisor",
    path: "/careers/strategic-gtm-enterprise-partnerships-advisor",
    description: "Senior strategic advisory council role advising on pharma conglomerate access, commercial structuring, and pilot expansion.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Advisory"
  },
  {
    title: "Pharma QA & GxP Compliance Advisor",
    path: "/careers/pharma-qa-gxp-compliance-advisor",
    description: "Expert advisory track guiding 21 CFR Part 11, CDSCO, and international WHO-GMP regulatory validation workflows.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Advisory"
  },
  {
    title: "Pharmaceutical Supply Chain & Procurement Advisor",
    path: "/careers/pharmaceutical-supply-chain-procurement-advisor",
    description: "Advising on end-to-end pharmaceutical logistics, serialization reconciliation, and distributor inventory integrity.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Advisory"
  },
  {
    title: "Audit, Risk & Compliance Advisor",
    path: "/careers/audit-risk-compliance-advisor",
    description: "Strategic counsel for internal controls, statutory financial/operational audit integration, and fraud deterrence.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Advisory"
  },
  {
    title: "Enterprise Architecture & Technology Strategy Advisor",
    path: "/careers/enterprise-architecture-technology-strategy-advisor",
    description: "High-level technical advisory regarding hybrid cloud integrations, SAP/ERP connectors, and cryptographic assurance.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Advisory"
  },
  {
    title: "Investor & Strategic Partnerships Advisor",
    path: "/careers/investor-strategic-partnerships-advisor",
    description: "Advisory support for institutional capitalization, syndicate alignment, and cross-border strategic relationships.",
    category: "Careers & Advisory",
    changefreq: "weekly",
    priority: "0.8",
    badge: "Advisory"
  },

  // Trust, Security & Legal
  {
    title: "Security Architecture & Disclosure",
    path: "/security",
    description: "Security by design, multi-layer defensive perimeter, threat modeling, and responsible vulnerability disclosure.",
    category: "Trust & Legal",
    changefreq: "monthly",
    priority: "0.7",
    badge: "Trust"
  },
  {
    title: "Privacy Policy",
    path: "/privacy",
    description: "Enterprise privacy commitments, India DPDP Act compliance, data retention protocols, and stakeholder rights.",
    category: "Trust & Legal",
    changefreq: "yearly",
    priority: "0.5"
  },
  {
    title: "Terms of Service",
    path: "/terms",
    description: "Legal agreement governing access to Synthrova software interfaces, platforms, documentation, and services.",
    category: "Trust & Legal",
    changefreq: "yearly",
    priority: "0.5"
  }
];

const CATEGORIES = [
  "All",
  "Core Architecture",
  "Strategic Programs",
  "Company & Leadership",
  "Careers & Advisory",
  "Insights & Updates",
  "Trust & Legal"
] as const;

export function Sitemap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return SITEMAP_DATA.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (path: string) => {
    const fullUrl = `https://synthrova.in${path}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedPath(path);
    setTimeout(() => {
      setCopiedPath(null);
    }, 2000);
  };

  // Group items by category for detailed hierarchical view
  const categorizedSections = useMemo<Record<string, SitemapItem[]>>(() => {
    const groups: Record<string, SitemapItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Website Directory & Sitemap | Synthrova Technologies",
    "description": "Comprehensive HTML index and navigational directory of all public pages, enterprise solutions, career opportunities, and documentation at Synthrova Technologies.",
    "url": "https://synthrova.in/sitemap",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://synthrova.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sitemap",
          "item": "https://synthrova.in/sitemap"
        }
      ]
    }
  };

  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black bg-synthrova-white min-h-screen">
      <SEO
        title="Sitemap & Site Directory | Synthrova Technologies"
        description="Comprehensive index and navigational directory of all public pages, enterprise solutions, career opportunities, and documentation at Synthrova Technologies."
        canonical="/sitemap"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-synthrova-black text-synthrova-white overflow-hidden border-b border-synthrova-white/10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen">
          <svg width="100%" height="100%">
            <pattern id="sitemapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#sitemapGrid)" />
          </svg>
        </div>

        {/* Ambient radial glow */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-synthrova-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 font-mono text-[11px] tracking-widest text-synthrova-white/50 mb-6 uppercase">
            <Link to="/" className="hover:text-synthrova-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-synthrova-white/30" />
            <span className="text-synthrova-blue">Sitemap & Index</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-synthrova-white/5 border border-synthrova-white/10 text-synthrova-blue text-[11px] font-mono tracking-widest uppercase mb-6">
                <Network className="w-3.5 h-3.5" />
                <span>Navigational Architecture</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-balance leading-[1.08] mb-6">
                Website Directory & Sitemap
              </h1>
              <p className="text-base sm:text-lg text-synthrova-white/70 font-light max-w-2xl leading-relaxed text-balance">
                A structured, comprehensive directory of all canonical pages across Synthrova’s enterprise platforms, strategic initiatives, open career tracks, and governance disclosures.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <Link
                to="/platform"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-synthrova-blue text-synthrova-black text-xs font-mono uppercase tracking-wider font-medium hover:bg-white transition-colors"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-synthrova-white/20 text-synthrova-white text-xs font-mono uppercase tracking-wider hover:bg-synthrova-white/10 transition-colors"
              >
                <span>Contact Team</span>
              </Link>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-synthrova-white/10 font-mono">
            <div className="p-4 bg-synthrova-white/5 border border-synthrova-white/10">
              <span className="text-[10px] text-synthrova-white/40 uppercase tracking-widest block mb-1">Indexed Routes</span>
              <span className="text-2xl font-light text-synthrova-white">{SITEMAP_DATA.length} Canonical</span>
            </div>
            <div className="p-4 bg-synthrova-white/5 border border-synthrova-white/10">
              <span className="text-[10px] text-synthrova-white/40 uppercase tracking-widest block mb-1">Career Tracks</span>
              <span className="text-2xl font-light text-synthrova-blue">9 Open Roles</span>
            </div>
            <div className="p-4 bg-synthrova-white/5 border border-synthrova-white/10">
              <span className="text-[10px] text-synthrova-white/40 uppercase tracking-widest block mb-1">Domain Protocol</span>
              <span className="text-2xl font-light text-synthrova-white">HTTPS / Strict</span>
            </div>
            <div className="p-4 bg-synthrova-white/5 border border-synthrova-white/10">
              <span className="text-[10px] text-synthrova-white/40 uppercase tracking-widest block mb-1">Directory Structure</span>
              <span className="text-2xl font-light text-synthrova-white">6 Categories</span>
            </div>
          </div>

        </div>
      </section>

      {/* Control Bar: Search & Category Filter */}
      <section className="sticky top-20 md:top-24 z-30 bg-synthrova-offwhite/95 backdrop-blur-md border-b border-synthrova-lightgrey py-4 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-synthrova-black/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search routes by title, keyword, or path..."
              className="w-full pl-10 pr-4 py-2.5 bg-synthrova-white border border-synthrova-black/15 text-sm text-synthrova-black placeholder:text-synthrova-black/40 focus:outline-none focus:border-synthrova-blue transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-synthrova-black/40 hover:text-synthrova-black"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Toggle & Count Indicator */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-mono">
            <span className="text-synthrova-black/50">
              Showing <span className="font-semibold text-synthrova-black">{filteredItems.length}</span> of {SITEMAP_DATA.length} pages
            </span>
            
            <div className="h-4 w-[1px] bg-synthrova-black/15 hidden sm:block"></div>

            <div className="inline-flex p-0.5 bg-synthrova-white border border-synthrova-black/15">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 transition-colors ${viewMode === "grid" ? "bg-synthrova-black text-synthrova-white" : "text-synthrova-black/60 hover:text-synthrova-black"}`}
              >
                Card View
              </button>
              <button
                onClick={() => setViewMode("compact")}
                className={`px-3 py-1.5 transition-colors ${viewMode === "compact" ? "bg-synthrova-black text-synthrova-white" : "text-synthrova-black/60 hover:text-synthrova-black"}`}
              >
                Compact List
              </button>
            </div>
          </div>

        </div>

        {/* Category Pills */}
        <div className="max-w-7xl mx-auto mt-3 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 shrink-0">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono px-3.5 py-1.5 whitespace-nowrap transition-all border ${
                    isSelected
                      ? "bg-synthrova-black text-synthrova-white border-synthrova-black"
                      : "bg-synthrova-white text-synthrova-black/70 border-synthrova-black/15 hover:border-synthrova-black/40 hover:text-synthrova-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {filteredItems.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-synthrova-black/20 bg-synthrova-white p-8">
            <SlidersHorizontal className="w-10 h-10 mx-auto text-synthrova-black/30 mb-4" />
            <h3 className="text-xl font-light text-synthrova-black mb-2">No matching pages located</h3>
            <p className="text-sm text-synthrova-black/60 max-w-md mx-auto mb-6">
              No routes found matching "{searchQuery}". Try searching for terms like "platform", "eledger", "pharma", "coo", "cto", or "compliance".
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="px-6 py-2.5 bg-synthrova-black text-synthrova-white text-xs font-mono uppercase tracking-wider hover:bg-synthrova-blue hover:text-synthrova-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-20">
            {CATEGORIES.filter((cat) => cat !== "All" && categorizedSections[cat]?.length).map((category, catIndex) => {
              const items = categorizedSections[category] || [];
              const categoryNumber = `0${catIndex + 1}`;

              return (
                <section key={category} className="scroll-mt-48">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-synthrova-black/15 pb-4 mb-8 gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-synthrova-blue">{categoryNumber}</span>
                      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-synthrova-black">
                        {category}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-synthrova-black/50">
                      {items.length} {items.length === 1 ? "route" : "routes"}
                    </span>
                  </div>

                  {/* Render based on view mode */}
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item) => {
                        const isCopied = copiedPath === item.path;

                        return (
                          <div
                            key={item.path}
                            className="group relative bg-synthrova-white border border-synthrova-black/10 hover:border-synthrova-blue/80 transition-all duration-300 flex flex-col justify-between p-6 hover:shadow-lg hover:shadow-synthrova-blue/5"
                          >
                            <div>
                              {/* Top Bar: Path & Badges */}
                              <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="font-mono text-[11px] text-synthrova-black/50 group-hover:text-synthrova-blue transition-colors truncate max-w-[200px]" title={item.path}>
                                  {item.path}
                                </span>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  {item.badge && (
                                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-synthrova-black/5 text-synthrova-black/70 border border-synthrova-black/10">
                                      {item.badge}
                                    </span>
                                  )}
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-synthrova-black/40 bg-synthrova-offwhite" title="Search Index Priority">
                                    P:{item.priority}
                                  </span>
                                </div>
                              </div>

                              {/* Title */}
                              <h3 className="text-lg font-normal text-synthrova-black group-hover:text-synthrova-blue transition-colors mb-3 leading-snug">
                                <Link to={item.path} className="focus:outline-none">
                                  {item.title}
                                </Link>
                              </h3>

                              {/* Description */}
                              <p className="text-xs text-synthrova-black/70 font-light leading-relaxed mb-6">
                                {item.description}
                              </p>
                            </div>

                            {/* Card Footer: Metadata and Action */}
                            <div className="pt-4 border-t border-synthrova-black/5 flex items-center justify-between text-xs font-mono">
                              <span className="text-[10px] text-synthrova-black/40 uppercase tracking-wider">
                                {item.changefreq}
                              </span>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => copyToClipboard(item.path)}
                                  className="p-1.5 text-synthrova-black/40 hover:text-synthrova-black transition-colors"
                                  title="Copy full URL"
                                  aria-label={`Copy link for ${item.title}`}
                                >
                                  {isCopied ? (
                                    <Check className="w-3.5 h-3.5 text-green-600" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                                
                                <Link
                                  to={item.path}
                                  className="inline-flex items-center gap-1 text-xs text-synthrova-black font-medium group-hover:text-synthrova-blue group-hover:translate-x-0.5 transition-all"
                                >
                                  <span>Visit</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Compact List View */
                    <div className="bg-synthrova-white border border-synthrova-black/10 divide-y divide-synthrova-black/10">
                      {items.map((item) => {
                        const isCopied = copiedPath === item.path;

                        return (
                          <div
                            key={item.path}
                            className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-synthrova-offwhite/50 transition-colors group"
                          >
                            <div className="flex-1 min-w-0 pr-4">
                              <div className="flex items-center gap-3 mb-1">
                                <Link
                                  to={item.path}
                                  className="text-base font-normal text-synthrova-black group-hover:text-synthrova-blue transition-colors truncate"
                                >
                                  {item.title}
                                </Link>
                                {item.badge && (
                                  <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-synthrova-black/5 text-synthrova-black/70 border border-synthrova-black/10 shrink-0">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-synthrova-black/60 truncate max-w-2xl font-light">
                                {item.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                              <span className="text-synthrova-black/50 text-[11px] bg-synthrova-offwhite px-2 py-1 border border-synthrova-black/5">
                                {item.path}
                              </span>

                              <button
                                onClick={() => copyToClipboard(item.path)}
                                className="p-1.5 text-synthrova-black/40 hover:text-synthrova-black transition-colors"
                                title="Copy URL"
                              >
                                {isCopied ? (
                                  <Check className="w-3.5 h-3.5 text-green-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>

                              <Link
                                to={item.path}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-synthrova-black text-synthrova-white hover:bg-synthrova-blue hover:text-synthrova-black transition-colors text-xs uppercase tracking-wider"
                              >
                                <span>Go</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* Institutional Directory Support & Inquiries */}
        <section className="mt-24 pt-16 border-t border-synthrova-black/15">
          <div className="bg-synthrova-black text-synthrova-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-synthrova-blue/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl">
              <div className="font-mono text-[10px] tracking-widest text-synthrova-blue uppercase mb-4">
                DIRECTORY / ENTERPRISE GUIDANCE
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight mb-4">
                Institutional Navigation & Support
              </h2>
              <p className="text-sm sm:text-base text-synthrova-white/70 font-light leading-relaxed mb-8">
                Synthrova Technologies maintains a clear, unified structure across all digital properties, core architecture specifications, regulatory compliance resources, and leadership disclosures. If you require targeted technical documentation, statutory audit frameworks, or confidential enterprise briefing, please connect directly with our engineering and advisory team.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-synthrova-blue text-synthrova-black text-xs font-mono uppercase tracking-wider font-medium hover:bg-white transition-colors"
                >
                  <span>Connect with Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-synthrova-white/20 text-synthrova-white text-xs font-mono uppercase tracking-wider hover:bg-synthrova-white/10 transition-colors"
                >
                  <span>Platform Overview</span>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 mt-8 border-t border-synthrova-white/10 text-xs font-mono text-synthrova-white/50">
                <span>Synthrova Technologies — High-Assurance Enterprise Infrastructure</span>
                <span>Bengaluru & New Delhi, India</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
