import os
import re

def fix_text_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace opacities
    content = content.replace('text-synthrova-lightgrey/90', 'text-synthrova-black/80')
    content = content.replace('text-synthrova-lightgrey/80', 'text-synthrova-black/70')
    content = content.replace('text-synthrova-lightgrey/70', 'text-synthrova-black/60')
    content = content.replace('text-synthrova-lightgrey/60', 'text-synthrova-black/50')
    content = content.replace('text-synthrova-lightgrey/50', 'text-synthrova-black/40')
    content = content.replace('text-synthrova-lightgrey/40', 'text-synthrova-black/40')
    
    # Replace plain text-synthrova-lightgrey
    # We use a regex that matches text-synthrova-lightgrey but not followed by a slash and digit
    content = re.sub(r'text-synthrova-lightgrey(?!\/\d)', 'text-synthrova-black/60', content)

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            # Vision.tsx is fully dark and was recently rewritten, skip it just in case
            if file == 'Vision.tsx':
                continue
            fix_text_in_file(os.path.join(root, file))

