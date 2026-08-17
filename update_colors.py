import os

mapping = {
    'bg-synthrova-darknavy': 'bg-synthrova-black',
    'text-synthrova-darknavy': 'text-synthrova-black',
    'border-synthrova-darknavy': 'border-synthrova-black',
    'synthrova-darktext': 'synthrova-black',
    'synthrova-bordergrey': 'synthrova-lightgrey',
    'synthrova-mediumgrey': 'synthrova-lightgrey',
    'synthrova-deepnavy': 'synthrova-black',
}

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in mapping.items():
        new_content = new_content.replace(old, new)
        
    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')):
            replace_in_file(os.path.join(root, file))
