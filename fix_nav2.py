import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'const darkHeroRoutes = [',
    'const darkHeroRoutes = [\n    "/leadership",'
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
