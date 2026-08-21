import re

with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

content = content.replace('src="/images/logo-transparent.png"\n          alt=""', 'src="/images/logo-transparent.png"\n          alt=""\n          onError={(e) => { e.currentTarget.style.display = "none"; }}')
content = content.replace('src="/images/logo-dark.png"\n          alt="Synthrova Technologies"', 'src="/images/logo-dark.png"\n          alt="Synthrova Technologies"\n          onError={(e) => { e.currentTarget.style.display = "none"; }}')

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
