import re

with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '<li><Link to="/company" className="hover:text-synthrova-white transition-colors">Company</Link></li>',
    '<li><Link to="/company" className="hover:text-synthrova-white transition-colors">Company</Link></li>\n            <li><Link to="/leadership" className="hover:text-synthrova-white transition-colors">Leadership</Link></li>'
)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
