with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

logo_block = """<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-synthrova-white transition-opacity duration-300 group-hover:opacity-70">
              Synthrova
            </span>"""
            
new_logo_block = """<img src="/images/logo.png" alt="Synthrova" className="h-6 md:h-8 object-contain mix-blend-screen" />"""

content = content.replace(logo_block, new_logo_block)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
