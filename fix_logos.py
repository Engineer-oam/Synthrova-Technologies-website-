import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace the main navbar logo
old_logo = """<span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70">Synthrova</span>"""

new_logo = """<div className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70">
              <img 
                src="file_00000000ffe8821187a957148d1051de.png" 
                alt="Synthrova" 
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-contain object-left mix-blend-multiply transition-opacity duration-500 ${(scrolled || (!scrolled && !isDarkBg)) ? 'opacity-100' : 'opacity-0'}`} 
              />
              <img 
                src="file_00000000022c8211afe2abcfcbe8cd70.png" 
                alt="Synthrova" 
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-contain object-left mix-blend-screen transition-opacity duration-500 ${(scrolled || (!scrolled && !isDarkBg)) ? 'opacity-0' : 'opacity-100'}`} 
              />
            </div>"""

content = content.replace(old_logo, new_logo, 1)

# Replace the overlay header logo (always dark background, so always use dark logo)
new_overlay_logo = """<div className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70">
                <img 
                  src="file_00000000022c8211afe2abcfcbe8cd70.png" 
                  alt="Synthrova" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-contain object-left mix-blend-screen" 
                />
              </div>"""

content = content.replace(old_logo, new_overlay_logo, 1)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
