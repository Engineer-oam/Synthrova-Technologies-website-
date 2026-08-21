with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('<img src="/images/logo-dark.png" alt="preload" />', '<img src="/images/logo-dark.png" alt="preload" referrerpolicy="no-referrer" />')
content = content.replace('<img src="/images/logo-transparent.png" alt="preload" />', '<img src="/images/logo-transparent.png" alt="preload" referrerpolicy="no-referrer" />')

with open('index.html', 'w') as f:
    f.write(content)
