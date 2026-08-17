import os

files_to_fix = [
    'src/pages/Careers.tsx',
    'src/pages/Pharmaceuticals.tsx'
]

def replace_dark_with_light(filepath):
    if not os.path.exists(filepath):
        return
        
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace solid blue backgrounds
    content = content.replace('bg-synthrova-blue text-synthrova-black', 'bg-synthrova-black text-synthrova-white')
    content = content.replace('bg-[radial-gradient(circle_at_bottom_left,#1a1a1a_0%,transparent_60%)]', 'bg-[radial-gradient(circle_at_bottom_left,rgba(22,143,234,0.05)_0%,transparent_60%)]')

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in files_to_fix:
    replace_dark_with_light(filepath)

