import re

def fix_paths(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    content = content.replace(
        'src="file_',
        'src="/file_'
    )
    
    with open(filename, 'w') as f:
        f.write(content)

fix_paths('src/components/Navbar.tsx')
fix_paths('src/components/Footer.tsx')
