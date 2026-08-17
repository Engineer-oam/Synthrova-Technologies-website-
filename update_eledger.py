import re

with open('src/pages/ELedger.tsx', 'r') as f:
    content = f.read()

# Update Hero SEO statement
content = content.replace(
    'E-Ledger creates a trusted transaction, compliance, reconciliation and interoperability layer for regulated supply chains.',
    'E-Ledger is a B2B regulatory technology (RegTech) platform providing trusted compliance infrastructure, transaction reconciliation, and supply chain traceability for regulated industries.'
)

content = content.replace(
    'E-Ledger eliminates the need to cross-reference disjointed database tables by enforcing a shared, cryptographically verified chain of events.',
    'As a comprehensive B2B compliance infrastructure and RegTech platform, E-Ledger eliminates the need to cross-reference disjointed database tables by enforcing a shared, cryptographically verified chain of events. It automates enterprise transaction reconciliation, replacing manual three-way and four-way matching with instant, mathematically proven consensus.'
)

content = content.replace(
    '{ title: "Audit / Compliance", desc: "Automated regulatory reporting and evidence extraction." }',
    '{ title: "Audit & Compliance Infrastructure", desc: "Continuous compliance monitoring, automated regulatory reporting, and an immutable compliance audit trail." }'
)

# Update traditional matching error to be more descriptive
content = content.replace(
    '<div className="mt-8 text-xs font-mono text-red-500 font-medium">ERROR: RECONCILIATION FAILED</div>',
    '<div className="mt-8 text-xs font-mono text-red-500 font-medium">ERROR: 3-WAY MATCHING FAILED</div>'
)

with open('src/pages/ELedger.tsx', 'w') as f:
    f.write(content)

