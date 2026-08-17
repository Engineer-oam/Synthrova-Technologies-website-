import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

# Add SEO import
content = content.replace('import { useEffect } from "react";', 'import { useEffect } from "react";\nimport { SEO } from "../components/SEO";')

seo_component = """
  return (
    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">
      <SEO 
        title="About Synthrova Technologies"
        description="Synthrova Technologies is a technology company developing intelligent infrastructure, enterprise software and emerging technology systems for critical industries."
        canonical="/company"
      />
"""
content = content.replace('return (\n    <div className="w-full selection:bg-synthrova-blue/30 selection:text-synthrova-black">', seo_component)

# We want to add WhatIsSection and FaqSection.

what_is_section = """
function WhatIsSection() {
  return (
    <section className="py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">What is Synthrova?</h2>
        <div className="space-y-8 text-xl font-light text-synthrova-black/80 leading-relaxed">
          <p>
            Synthrova Technologies is a technology company developing intelligent infrastructure, enterprise software and emerging technology systems for critical industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 border border-synthrova-lightgrey bg-synthrova-offwhite">
              <h3 className="font-mono text-sm tracking-widest text-synthrova-black/50 uppercase mb-4">Current Platform</h3>
              <p className="font-medium text-lg mb-2">E-Ledger</p>
              <p className="text-base text-synthrova-black/70">Trusted transaction and compliance infrastructure for regulated supply chains.</p>
            </div>
            <div className="p-8 border border-synthrova-lightgrey bg-synthrova-offwhite">
              <h3 className="font-mono text-sm tracking-widest text-synthrova-black/50 uppercase mb-4">Emerging Programs</h3>
              <ul className="space-y-3 text-base text-synthrova-black/70">
                <li><strong className="text-synthrova-black font-medium">Artificial Intelligence:</strong> Decision intelligence workflows</li>
                <li><strong className="text-synthrova-black font-medium">Energy:</strong> Industrial system monitoring</li>
                <li><strong className="text-synthrova-black font-medium">Defence & Security:</strong> Mission-critical environments</li>
                <li><strong className="text-synthrova-black font-medium">Other:</strong> Advanced technology initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      q: "What is Synthrova Technologies?",
      a: "Synthrova Technologies is a technology company building intelligent infrastructure and software for critical systems."
    },
    {
      q: "What does Synthrova Technologies build?",
      a: "Synthrova builds platforms that connect data, organizations, and machines to improve compliance, security, and interoperability."
    },
    {
      q: "What is E-Ledger?",
      a: "E-Ledger is a compliance and supply chain infrastructure platform developed by Synthrova to create cryptographically verified records across organizations."
    },
    {
      q: "Which industries does Synthrova serve?",
      a: "Synthrova currently focuses on regulated supply chains such as pharmaceuticals, and is exploring applications in energy, defence, and industrial manufacturing."
    },
    {
      q: "Is Synthrova an Indian technology company?",
      a: "Yes, Synthrova Technologies Private Limited is a registered Indian technology company recognized by DPIIT."
    },
    {
      q: "How can an enterprise work with Synthrova?",
      a: "Organizations can collaborate with Synthrova for technology partnerships, research, pilot programs, or enterprise infrastructure deployment."
    }
  ];

  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-synthrova-lightgrey pb-8">
              <h3 className="text-xl font-medium mb-4">{faq.q}</h3>
              <p className="text-lg font-light text-synthrova-black/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
"""

content = content.replace('const beliefs = [', what_is_section + '\n\nconst beliefs = [')
content = content.replace('<StorySection />', '<WhatIsSection />\n      <StorySection />')
content = content.replace('<InformationSection />', '<InformationSection />\n      <FaqSection />')

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)

