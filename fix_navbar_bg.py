import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '"bg-synthrova-white/90 backdrop-blur-md border-b border-synthrova-lightgrey/10 text-synthrova-black"',
    '"bg-[#FFFFFF]/90 backdrop-blur-md border-b border-synthrova-lightgrey/20 text-synthrova-black"'
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
