import re

with open('src/pages/Programs.tsx', 'r') as f:
    content = f.read()

# Artificial Intelligence
content = content.replace(
    'Moving beyond generative novelties to verifiable intelligence.',
    'Our Artificial Intelligence program focuses on enterprise AI and decision intelligence for critical systems. We are researching mission-critical AI infrastructure designed to operate on trusted data, enabling autonomous enterprise systems and intelligent automation in regulated environments.'
)

# Energy
content = content.replace(
    'Software infrastructure for the modern grid.',
    'We are exploring intelligent energy systems and digital energy infrastructure. Our research focuses on energy data infrastructure, monitoring, and optimization software for distributed energy systems.'
)

# Defence
content = content.replace(
    'High-assurance technology for critical operations.',
    'Developing defence technology and secure enterprise infrastructure for mission-critical environments. Our focus is on secure communications infrastructure, defence data interoperability, and operational intelligence systems.'
)

with open('src/pages/Programs.tsx', 'w') as f:
    f.write(content)

