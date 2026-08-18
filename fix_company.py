import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'Synthrova Technologies is a technology company developing intelligent infrastructure, enterprise software and emerging technology systems for critical industries.',
    'Synthrova builds intelligent infrastructure for critical systems and regulated industries.'
)
content = content.replace(
    'Synthrova Technologies is a technology company building intelligent infrastructure and software for critical systems.',
    'Synthrova builds intelligent infrastructure for critical systems and regulated industries.'
)

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)
