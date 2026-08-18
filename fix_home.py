import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'Synthrova Technologies is a technology company building intelligent infrastructure and software for critical systems and regulated industries.',
    'Synthrova builds intelligent infrastructure for critical systems and regulated industries.'
)
content = content.replace(
    'Technology company building intelligent infrastructure and software for critical systems and regulated industries.',
    'Synthrova builds intelligent infrastructure for critical systems and regulated industries.'
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
