import re

with open('src/pages/Insights.tsx', 'r') as f:
    content = f.read()

glossary_section = """
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
"""

content = content.replace(
    'export function Insights() {',
    glossary_section + '\nexport function Insights() {'
)

content = content.replace(
    '<ResearchAndRegulatorySection />',
    '<GlossarySection />\n      <ResearchAndRegulatorySection />'
)

with open('src/pages/Insights.tsx', 'w') as f:
    f.write(content)

