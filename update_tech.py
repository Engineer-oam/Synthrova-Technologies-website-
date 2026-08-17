import re

with open('src/pages/Technology.tsx', 'r') as f:
    content = f.read()

# Update Hero Section
hero_pattern = r'<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">\s*Engineered for strict<br/>operational constraints.\s*</h1>'
hero_replacement = r"""<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">
          Intelligent infrastructure for critical systems.
        </h1>"""
content = re.sub(hero_pattern, hero_replacement, content, flags=re.DOTALL)

# Let's fix domains via robust Python replacement
content = content.replace(
    '{ name: "Data Architecture", desc: "We design resilient data pipelines that can ingest, process, and synchronize massive volumes of structured and unstructured information across disparate enterprise boundaries without compromising integrity.", icon: Database }',
    '{ name: "Trusted Data Infrastructure", desc: "We design secure enterprise data infrastructure and transaction provenance systems that ensure data integrity and trusted business transactions across organizational boundaries.", icon: Database }'
)

content = content.replace(
    '{ name: "Interoperability", desc: "Systems must communicate without friction. We build translation layers and API gateways that allow legacy mainframe systems to speak the same language as modern cloud infrastructure.", icon: Link2 }',
    '{ name: "Enterprise Interoperability", desc: "We build B2B and government-business (B2G) data interoperability layers, enabling cross-enterprise systems integration without compromising security.", icon: Link2 }'
)

content = content.replace(
    '{ name: "Cryptography", desc: "Applied cryptography to guarantee provenance. We utilize PKI frameworks, zero-knowledge proofs, and distributed ledgers to ensure data is mathematically irrefutable.", icon: Lock }',
    '{ name: "Compliance Infrastructure", desc: "Applied cryptography and distributed ledger technology to build automated regulatory compliance infrastructure, verifiable audit systems, and B2B transaction reconciliation software.", icon: Lock }'
)

content = content.replace(
    '{ name: "Intelligence", desc: "Context-aware systems that process real-time events to flag anomalies, predict disruption, and recommend immediate corrective action based on verified state changes.", icon: Workflow }',
    '{ name: "Systems Intelligence", desc: "Enterprise AI, decision intelligence, and automated analytics infrastructure for mission-critical operations and regulatory compliance monitoring.", icon: Workflow }'
)

with open('src/pages/Technology.tsx', 'w') as f:
    f.write(content)

