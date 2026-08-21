import re

with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

content = content.replace('src="/images/Logo-transparent.png"', 'src="/images/logo-transparent.png"')

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
