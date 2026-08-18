import re

with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

old_logo = """<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70 text-synthrova-white">Synthrova</span>"""
new_logo = """<div className="relative w-48 h-10 transition-opacity duration-300 group-hover:opacity-70">
            <img 
              src="file_00000000022c8211afe2abcfcbe8cd70.png" 
              alt="Synthrova" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-contain object-left mix-blend-screen" 
            />
          </div>"""

content = content.replace(old_logo, new_logo)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
