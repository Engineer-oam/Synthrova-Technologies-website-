import re

with open('src/pages/Technology.tsx', 'r') as f:
    content = f.read()

emerging_tech = '''
function EmergingTechSection() {
  const domains = [
    { title: "AI", desc: "Developing intelligent systems to analyze verified, tamper-proof datasets for anomalies, forecasting, and optimization in regulated environments." },
    { title: "Energy", desc: "Exploring decentralized energy grid management, trading verification, and infrastructure for transition technologies." },
    { title: "Defence", desc: "Researching secure, partitioned communication and logistics networks that require absolute operational integrity and supply chain provenance." },
    { title: "Advanced Digital Infrastructure", desc: "Next-generation data routing, processing, and storage paradigms designed for absolute sovereignty and high availability." }
  ];

  return (
    <section className="py-24 bg-synthrova-black text-synthrova-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16">What Comes Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {domains.map((domain) => (
            <div key={domain.title} className="p-8 border border-synthrova-white/20">
              <h3 className="text-2xl font-light mb-4">{domain.title}</h3>
              <p className="text-synthrova-white/70 leading-relaxed font-light">{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''

content = content.replace('function DomainsSection() {', emerging_tech + '\nfunction DomainsSection() {')
content = content.replace('<DomainsSection />', '<DomainsSection />\n      <EmergingTechSection />')

with open('src/pages/Technology.tsx', 'w') as f:
    f.write(content)
