import re

with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

content = content.replace('style={{ opacity: isDarkTheme ? 0 : 1 }}', 'style={{ opacity: isDarkTheme ? 0 : 1 }}\n          onError={(e) => { e.currentTarget.style.display = "none"; }}')
content = content.replace('style={{ opacity: isDarkTheme ? 1 : 0 }}', 'style={{ opacity: isDarkTheme ? 1 : 0 }}\n          onError={(e) => { e.currentTarget.style.display = "none"; }}')

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
