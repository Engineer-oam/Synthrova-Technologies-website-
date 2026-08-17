import re

# Update Navbar
with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

navbar_pattern_1 = r'\{isDarkBg \|\| isOpen \? \(\s*<img src="/images/logo\.png".*?\/>\s*\) : \(\s*<img src="/images/logo-dark\.jpg".*?\/>\s*\)\}'
navbar_replace_1 = '<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">Synthrova</span>'

content = re.sub(navbar_pattern_1, navbar_replace_1, content, flags=re.DOTALL)

navbar_pattern_2 = r'<img src="/images/logo\.png" alt="Synthrova" className="h-6 md:h-8 object-contain mix-blend-screen" />'
navbar_replace_2 = '<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">Synthrova</span>'

content = re.sub(navbar_pattern_2, navbar_replace_2, content)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)

# Update Footer
with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

footer_pattern = r'<img src="/images/logo\.png" alt="Synthrova" className="h-6 md:h-8 object-contain mix-blend-screen" />'
footer_replace = '<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70 text-synthrova-white">Synthrova</span>'

content = re.sub(footer_pattern, footer_replace, content)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)

