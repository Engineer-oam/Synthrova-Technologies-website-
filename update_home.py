import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'E-Ledger creates a trusted transaction, compliance, reconciliation and interoperability layer for regulated supply chains.',
    'E-Ledger is a B2B RegTech platform that creates a trusted transaction, compliance reconciliation, and interoperability layer for regulated supply chains.'
)

content = content.replace(
    'We are building technology across regulated industries and emerging strategic domains. We deploy infrastructure where precision, security, and interoperability are non-negotiable.',
    'We are building deep technology across regulated industries and emerging strategic domains. We deploy intelligent enterprise infrastructure where precision, security, and interoperability are non-negotiable.'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

