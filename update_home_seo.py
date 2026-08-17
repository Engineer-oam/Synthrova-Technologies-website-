import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Add SEO import
content = content.replace('import { useEffect, useState } from "react";', 'import { useEffect, useState } from "react";\nimport { SEO } from "../components/SEO";')

# Inject SEO component and Entity Intro
seo_component = """
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="Synthrova Technologies | Technology for Critical Systems"
        description="Synthrova Technologies is a technology company building intelligent infrastructure and software for critical systems, including E-Ledger, AI, Energy, and Defence."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": ["Organization", "WebSite"],
          "name": "Synthrova Technologies",
          "legalName": "Synthrova Technologies Private Limited",
          "url": "https://synthrova.com",
          "description": "A technology company building intelligent infrastructure and software for critical systems.",
          "logo": "https://synthrova.com/images/logo.png"
        }}
      />
"""

content = content.replace('return (\n    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">', seo_component)

# Update Hero H1 and add the text
hero_pattern = r'<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">.*?</h1>'
new_h1 = '<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-tight">\n            Technology for the systems that matter.\n          </h1>'
content = re.sub(hero_pattern, new_h1, content, flags=re.DOTALL)

# Find the first major content section and add the statement
# We'll put it right after the Hero, or in SECTION 2
section2_pattern = r'({/\* SECTION 2: THE PROBLEM \*/}.*?<p className="text-xl md:text-2xl font-light text-synthrova-black/70 leading-relaxed text-balance">.*?</p>)'
new_section2 = r'\1\n            <p className="text-lg mt-6 font-medium text-synthrova-black">\n              Synthrova Technologies is a technology company building intelligent infrastructure and software for critical systems.\n            </p>'
content = re.sub(section2_pattern, new_section2, content, flags=re.DOTALL)


with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

