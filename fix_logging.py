import re

with open('server.ts', 'r') as f:
    content = f.read()

old_log_condition = "if (!req.url.includes('hmr') && !req.url.includes('.css') && !req.url.includes('.js')) {"
new_log_condition = """if (
        !req.url.includes('hmr') && 
        !req.url.match(/\.(css|js|ts|tsx|json|ico|png|jpg|svg|woff2?)$/) &&
        !req.url.startsWith('/@') &&
        !req.url.startsWith('/src/') &&
        !req.url.startsWith('/node_modules/')
      ) {"""

content = content.replace(old_log_condition, new_log_condition)

with open('server.ts', 'w') as f:
    f.write(content)

