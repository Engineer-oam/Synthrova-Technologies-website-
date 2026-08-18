import re

with open('src/pages/ELedger.tsx', 'r') as f:
    content = f.read()

# Update SEO Description
content = re.sub(
    r'description="[^"]+"',
    'description="E-Ledger is compliance and transaction infrastructure for regulated supply chains. It connects organizations across existing systems to create a trusted shared layer."',
    content
)

# Update Schema Description
content = re.sub(
    r'"description":\s*"[^"]+"',
    '"description": "E-Ledger is compliance and transaction infrastructure for regulated supply chains, creating a shared layer for reconciliation and traceability."',
    content
)

# Update Hero Paragraph
content = re.sub(
    r'Connect organizations, transactions and compliance records without replacing the systems you already use\.',
    'It connects organizations, transactions and compliance workflows across existing systems to create a trusted shared layer for reconciliation, traceability and auditability.',
    content
)

# Rewrite ArchitectureSection to match requested flow exactly
old_arch = r'function ArchitectureSection\(\) \{.*?return \(.*?</section>\s*\)\s*\}'

new_arch = """function ArchitectureSection() {
  const stack = [
    { title: "Existing Enterprise Systems", desc: "Your ERP, Accounting, WMS, Procurement, Laboratory, and Manufacturing systems remain the operational source of truth inside your organization.", highlight: false },
    { title: "Integration Layer", desc: "Standardized REST/GraphQL APIs and secure gateways connect your internal systems to the external network.", highlight: false },
    { title: "E-Ledger", desc: "The shared compliance and transaction infrastructure.", highlight: true },
    { title: "Shared Compliance + Transaction Layer", desc: "An independent, cryptographically verified infrastructure layer that maintains a unified state of transactions across organizational boundaries.", highlight: false },
    { title: "Network Participants", desc: "Enterprises, Auditors, Regulators, and Supply Chain Partners interact with a synchronized, trusted record.", highlight: false }
  ];

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight text-center">Infrastructure Architecture</h2>
        <div className="max-w-4xl mx-auto relative">
          
          <div className="absolute left-6 md:left-[30%] top-12 bottom-12 w-[1px] bg-synthrova-white/10 hidden md:block">
            <div className="w-full h-1/4 bg-synthrova-blue/50 absolute top-[40%] animate-[pulse_4s_ease-in-out_infinite]"></div>
          </div>

          {stack.map((layer, i) => (
            <div key={i} className={`relative p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between border-b ${layer.highlight ? 'border-synthrova-blue bg-synthrova-blue/5' : 'border-synthrova-white/10'}`}>
              
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-synthrova-white/20 hidden md:block">
                {i < stack.length - 1 && <ArrowRight className="w-5 h-5 rotate-90" />}
              </div>

              <div className={`font-medium text-lg md:text-xl md:w-1/3 pr-8 ${layer.highlight ? 'text-synthrova-blue' : 'text-synthrova-white'}`}>
                {layer.title}
              </div>
              <div className="md:w-2/3 text-synthrova-white/70 font-light mt-4 md:mt-0 leading-relaxed text-lg">
                {layer.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}"""

content = re.sub(old_arch, new_arch, content, flags=re.DOTALL)

with open('src/pages/ELedger.tsx', 'w') as f:
    f.write(content)
