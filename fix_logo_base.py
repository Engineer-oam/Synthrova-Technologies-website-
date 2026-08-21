import re

with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

content = content.replace('src="/images/logo-transparent.png"', 'src={`${import.meta.env.BASE_URL}images/logo-transparent.png`}')
content = content.replace('src="/images/logo-dark.png"', 'src={`${import.meta.env.BASE_URL}images/logo-dark.png`}')

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
