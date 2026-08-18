import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace main nav logo
content = re.sub(
    r'<div className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70">.*?<img.*?src="/file_00000000ffe8821187a957148d1051de\.png".*?/>.*?<img.*?src="/file_00000000022c8211afe2abcfcbe8cd70\.png".*?/>.*?</div>',
    '<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">Synthrova</span>',
    content,
    flags=re.DOTALL
)

# Replace overlay nav logo
content = re.sub(
    r'<div className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70">\s*<img.*?src="/file_00000000022c8211afe2abcfcbe8cd70\.png".*?/>\s*</div>',
    '<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">Synthrova</span>',
    content,
    flags=re.DOTALL
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)


with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

# Replace footer logo
content = re.sub(
    r'<div className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70">\s*<img.*?src="/file_00000000022c8211afe2abcfcbe8cd70\.png".*?/>\s*</div>',
    '<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70 text-synthrova-white">Synthrova</span>',
    content,
    flags=re.DOTALL
)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)

