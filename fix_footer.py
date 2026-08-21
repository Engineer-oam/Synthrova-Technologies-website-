import re

with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'className="h-8 md:h-10 transition-opacity duration-300 group-hover:opacity-70"',
    'className="h-[32px] md:h-[40px] lg:h-[44px] transition-opacity duration-300 group-hover:opacity-70"'
)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
