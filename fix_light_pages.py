import os
import re

files_to_fix = [
    'src/pages/Company.tsx',
    'src/pages/Insights.tsx',
    'src/pages/Contact.tsx',
    'src/pages/Industries.tsx'
]

def replace_dark_with_light(filepath):
    if not os.path.exists(filepath):
        return
        
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace solid blue backgrounds
    content = content.replace('bg-synthrova-blue text-synthrova-black', 'bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey')
    content = content.replace('bg-synthrova-blue text-synthrova-white', 'bg-synthrova-offwhite text-synthrova-black border-y border-synthrova-lightgrey')
    
    # Replace black backgrounds with white/offwhite
    content = content.replace('bg-synthrova-black text-synthrova-white', 'bg-synthrova-white text-synthrova-black')
    
    # Replace white text variations that might have been left over
    content = content.replace('text-synthrova-white/70', 'text-synthrova-black/70')
    content = content.replace('text-synthrova-white/60', 'text-synthrova-black/60')
    content = content.replace('text-synthrova-white/80', 'text-synthrova-black/80')
    content = content.replace('border-synthrova-white/10', 'border-synthrova-lightgrey')
    content = content.replace('border-synthrova-white/20', 'border-synthrova-lightgrey')
    
    # Buttons inside light pages might need to be re-fixed
    # For now, let's just make sure backgrounds are fixed
    with open(filepath, 'w') as f:
        f.write(content)

for filepath in files_to_fix:
    replace_dark_with_light(filepath)

