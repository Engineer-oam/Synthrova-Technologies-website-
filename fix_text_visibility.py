import os
import re

def fix_text_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We want to target text-synthrova-lightgrey and its opacity variants,
    # because lightgrey is #E7E7E4, which is nearly white.
    
    # Replace opacities
    content = content.replace('text-synthrova-lightgrey/80', 'text-synthrova-black/70')
    content = content.replace('text-synthrova-lightgrey/70', 'text-synthrova-black/60')
    content = content.replace('text-synthrova-lightgrey/60', 'text-synthrova-black/50')
    content = content.replace('text-synthrova-lightgrey/50', 'text-synthrova-black/40')
    content = content.replace('text-synthrova-lightgrey/40', 'text-synthrova-black/40')
    
    # Replace plain text-synthrova-lightgrey (but make sure not to match the above again, though we already did)
    # Using regex to ensure we don't match text-synthrova-lightgrey/something
    content = re.sub(r'text-synthrova-lightgrey(?!\/\d+)', 'text-synthrova-black/60', content)

    # Some dark sections might have used text-synthrova-lightgrey instead of text-synthrova-white/70.
    # If the section is dark, replacing it with black text would make it invisible!
    # However, checking the greps above, I mostly used it on light sections.
    # Wait! In Footer.tsx, I have `text-synthrova-lightgrey`! The footer is dark.
    # Let's check Footer.tsx
    
    with open(filepath, 'w') as f:
        f.write(content)

# We will apply this to all pages, but then we must check if any dark sections got messed up.
# Better to do it in two steps. First, let's check Footer.tsx
