import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '{ name: "Company", path: "/company" },',
    '{ name: "Company", path: "/company" },\n  { name: "Leadership", path: "/leadership" },'
)

content = content.replace(
    '"/contact",',
    '"/contact",\n    "/leadership",'
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
