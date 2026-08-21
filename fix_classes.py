import re

for filename in ['src/components/Navbar.tsx', 'src/components/Footer.tsx']:
    with open(filename, 'r') as f:
        content = f.read()
        
    content = content.replace('className="h-[32px] md:h-[40px] lg:h-[44px] transition-opacity duration-300 group-hover:opacity-70"', 'className="transition-opacity duration-300 group-hover:opacity-70"')
    
    with open(filename, 'w') as f:
        f.write(content)
