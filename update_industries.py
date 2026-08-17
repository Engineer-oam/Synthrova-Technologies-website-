import re

with open('src/pages/Industries.tsx', 'r') as f:
    content = f.read()

# Update the Pharma industry description
content = content.replace(
    'desc: "Ensuring traceability, compliance, and end-to-end visibility for critical pharmaceutical supply chains."',
    'desc: "B2B compliance infrastructure ensuring pharmaceutical traceability, regulatory compliance, and end-to-end visibility for critical supply chains."'
)

# Update the Government industry description
content = content.replace(
    'desc: "Secure infrastructure for regulatory oversight and government-business data sharing."',
    'desc: "Secure GovTech infrastructure for regulatory oversight and B2G2B (government-to-business) data interoperability."'
)

# Update Pharma featured section text
content = content.replace(
    'Our flagship application of E-Ledger creates a continuous, unbroken chain of custody for pharmaceutical products. We connect disparate actors onto a single, trusted transaction layer.',
    'Our flagship application of E-Ledger creates a continuous, unbroken chain of custody for pharmaceutical products. Operating as a B2B RegTech platform, we connect disparate actors onto a single, trusted transaction layer for automated compliance reconciliation.'
)

with open('src/pages/Industries.tsx', 'w') as f:
    f.write(content)

