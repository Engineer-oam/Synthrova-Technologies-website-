import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'Synthrova Technologies is a deep-technology engineering company.',
    'Synthrova Technologies Private Limited is a deep tech engineering company based in India. We build enterprise technology infrastructure for critical systems.'
)

content = content.replace(
    'We do not build incremental SaaS applications. We engineer core infrastructure capable of operating under strict constraints, coordinating distributed counterparties, and proving compliance mathematically.',
    'We do not build incremental SaaS applications. We engineer mission-critical B2B, B2G, and B2G2B (government-to-business) digital infrastructure capable of operating under strict constraints and proving compliance mathematically.'
)

# Add B2G2B FAQ
faq_b2g2b = """{
      q: "What is B2G2B technology?",
      a: "B2G2B (Business-to-Government-to-Business) technology refers to digital infrastructure that enables trusted data interoperability between regulatory agencies and private enterprises, streamlining compliance and reporting without compromising proprietary data."
    },"""

content = content.replace(
    '{',
    faq_b2g2b + '\n    {',
    1 # We only want to replace the first brace inside the faqs array, let's use a better replace string.
)

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)

