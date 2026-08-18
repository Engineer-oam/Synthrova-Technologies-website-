import re

with open('src/pages/ELedger.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'title="E-Ledger \| B2B Compliance Infrastructure & RegTech \| Synthrova"',
    'title="E-Ledger | Compliance Infrastructure for Regulated Supply Chains"',
    content
)
content = re.sub(
    r'description="E-Ledger is compliance and transaction infrastructure for regulated supply chains\. It connects organizations across existing systems to create a trusted shared layer\."',
    'description="E-Ledger is Synthrova Technologies\' compliance infrastructure platform for regulated supply chains, enabling shared transaction records, reconciliation, traceability and audit readiness."',
    content
)

old_schema = '''        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "E-Ledger",
          "operatingSystem": "Web",
          "applicationCategory": "BusinessApplication",
          "provider": {
            "@type": "Organization",
            "name": "Synthrova Technologies"
          },
          "description": "E-Ledger is compliance and transaction infrastructure for regulated supply chains, creating a shared layer for reconciliation and traceability."
        }}'''
        
new_schema = '''        schema={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "E-Ledger",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "provider": {
              "@type": "Organization",
              "name": "Synthrova Technologies Private Limited",
              "url": "https://synthrova.in/"
            },
            "description": "E-Ledger is Synthrova Technologies' compliance infrastructure platform for regulated supply chains, enabling shared transaction records, reconciliation, traceability and audit readiness."
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Synthrova Technologies Private Limited",
            "url": "https://synthrova.in/",
            "logo": "https://synthrova.in/logo.png"
          }
        ]}'''

content = content.replace(old_schema, new_schema)

# Ensure "ERP" is not used in the content
content = re.sub(r'(?i)ERP', 'enterprise systems', content)

with open('src/pages/ELedger.tsx', 'w') as f:
    f.write(content)
