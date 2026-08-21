with open('index.html', 'r') as f:
    content = f.read()

head_addition = """
    <link rel="icon" type="image/png" href="/images/logo-dark.png" />
    <link rel="preload" href="/images/logo-dark.png" as="image" type="image/png" />
    <link rel="preload" href="/images/logo-transparent.png" as="image" type="image/png" />
"""

body_addition = """
    <!-- Preload for strict deployment environments -->
    <div style="display: none;" aria-hidden="true">
      <img src="/images/logo-dark.png" alt="preload" />
      <img src="/images/logo-transparent.png" alt="preload" />
    </div>
"""

content = content.replace('</head>', head_addition + '</head>')
content = content.replace('<div id="root"></div>', body_addition + '<div id="root"></div>')

with open('index.html', 'w') as f:
    f.write(content)
