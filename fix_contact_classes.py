import re

with open('src/pages/Contact.tsx', 'r') as f:
    content = f.read()

# Remove duplicate imports
content = re.sub(r'import \{ useState \} from "react";\n', '', content, count=1)
content = re.sub(r"import \{ useState, useEffect \} from 'react';\n", '', content)

classes = """
const labelClass = "block text-sm font-medium text-synthrova-black/70 mb-2";
const inputClass = "w-full bg-transparent border-b border-synthrova-lightgrey/30 px-0 py-3 text-synthrova-black focus:outline-none focus:border-synthrova-blue transition-colors";

export function Contact() {
"""
content = content.replace('export function Contact() {', classes)

with open('src/pages/Contact.tsx', 'w') as f:
    f.write(content)
