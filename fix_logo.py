import re

with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

# Remove the onError handlers
content = re.sub(r'\s*onError=\{\(e\) => \{ e\.currentTarget\.style\.display = "none"; \}\}', '', content)

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
