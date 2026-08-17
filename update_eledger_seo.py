import re

with open('src/pages/ELedger.tsx', 'r') as f:
    content = f.read()

# Add SEO import
content = content.replace('import { useState, useEffect } from "react";', 'import { useState, useEffect } from "react";\nimport { SEO } from "../components/SEO";')

seo_component = """
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="E-Ledger | Compliance & Supply Chain Infrastructure | Synthrova"
        description="E-Ledger is a compliance and supply chain infrastructure platform developed by Synthrova Technologies to create cryptographically verified records across organizations."
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
content = content.replace('return (\n    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">', seo_component)

with open('src/pages/ELedger.tsx', 'w') as f:
    f.write(content)

