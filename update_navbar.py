import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace the text logo with image
logo_block = """<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">
              Synthrova
            </span>"""
            
new_logo_block = """{isDarkBg || isOpen ? (
              <img src="/images/logo.png" alt="Synthrova" className="h-6 md:h-8 object-contain mix-blend-screen" />
            ) : (
              <img src="/images/logo-dark.jpg" alt="Synthrova" className="h-6 md:h-8 object-contain mix-blend-multiply" />
            )}"""

content = content.replace(logo_block, new_logo_block)

# For the overlay header logo (where isOpen is always true)
overlay_logo_block = """<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">
                  Synthrova
                </span>"""

new_overlay_logo_block = """<img src="/images/logo.png" alt="Synthrova" className="h-6 md:h-8 object-contain mix-blend-screen" />"""

content = content.replace(overlay_logo_block, new_overlay_logo_block)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
