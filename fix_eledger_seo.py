import re

with open('src/pages/ELedger.tsx', 'r') as f:
    content = f.read()

# Make sure SEO is imported
if 'import { SEO }' not in content:
    content = content.replace('import { useState } from "react";', 'import { useState } from "react";\nimport { SEO } from "../components/SEO";')

seo_component = """
  return (
    <div className="w-full bg-synthrova-white selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="E-Ledger | B2B Compliance Infrastructure & RegTech | Synthrova"
        description="E-Ledger is a B2B RegTech platform developed by Synthrova Technologies to create cryptographically verified records, automated reconciliation, and pharmaceutical supply chain traceability."
        canonical="/eledger"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "E-Ledger",
          "operatingSystem": "Web",
          "applicationCategory": "BusinessApplication",
          "provider": {
            "@type": "Organization",
            "name": "Synthrova Technologies"
          },
          "description": "E-Ledger creates a trusted transaction, compliance, reconciliation and interoperability layer for regulated supply chains."
        }}
      />
"""

content = content.replace('return (\n    <div className="w-full bg-synthrova-white selection:bg-synthrova-blue/30 selection:text-synthrova-black">', seo_component)

with open('src/pages/ELedger.tsx', 'w') as f:
    f.write(content)

