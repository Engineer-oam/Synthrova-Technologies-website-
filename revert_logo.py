import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Restore Navbar container
content = content.replace(
    'className="relative w-8 h-8 md:w-10 md:h-10 transition-opacity duration-300 group-hover:opacity-70 overflow-hidden"',
    'className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70"'
)

# Restore Navbar images
content = content.replace(
    'className={`absolute top-0 left-0 h-full w-auto max-w-none mix-blend-multiply transition-opacity duration-500 ${(scrolled || (!scrolled && !isDarkBg)) ? \'opacity-100\' : \'opacity-0\'}`} ',
    'className={`absolute inset-0 w-full h-full object-contain object-left mix-blend-multiply transition-opacity duration-500 ${(scrolled || (!scrolled && !isDarkBg)) ? \'opacity-100\' : \'opacity-0\'}`} '
)

content = content.replace(
    'className={`absolute top-0 left-0 h-full w-auto max-w-none mix-blend-screen transition-opacity duration-500 ${(scrolled || (!scrolled && !isDarkBg)) ? \'opacity-0\' : \'opacity-100\'}`} ',
    'className={`absolute inset-0 w-full h-full object-contain object-left mix-blend-screen transition-opacity duration-500 ${(scrolled || (!scrolled && !isDarkBg)) ? \'opacity-0\' : \'opacity-100\'}`} '
)

# Restore Overlay Image
content = content.replace(
    'className="absolute top-0 left-0 h-full w-auto max-w-none mix-blend-screen"',
    'className="absolute inset-0 w-full h-full object-contain object-left mix-blend-screen"'
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)

# Footer
with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'className="relative w-10 h-10 transition-opacity duration-300 group-hover:opacity-70 overflow-hidden"',
    'className="relative w-40 h-8 md:w-48 md:h-10 transition-opacity duration-300 group-hover:opacity-70"'
)

content = content.replace(
    'className="absolute top-0 left-0 h-full w-auto max-w-none mix-blend-screen"',
    'className="absolute inset-0 w-full h-full object-contain object-left mix-blend-screen"'
)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)

