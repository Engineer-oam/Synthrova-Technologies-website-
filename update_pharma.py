import re

with open('src/pages/Pharmaceuticals.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'The pharmaceutical supply chain is one of the most critical networks on earth. It requires absolute visibility.',
    'The pharmaceutical supply chain requires absolute visibility. Our pharmaceutical compliance software and traceability infrastructure ensure that every node—from manufacturer to patient—operates on a verified foundation of truth.'
)

content = content.replace(
    'We provide the verifiable infrastructure required to track production batches from the factory floor to the point of dispensation.',
    'We provide the B2B RegTech platform required to track production batches, automate pharmaceutical regulatory compliance, and guarantee drug traceability across complex distribution networks.'
)

with open('src/pages/Pharmaceuticals.tsx', 'w') as f:
    f.write(content)

