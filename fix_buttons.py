import os
import re

def fix_buttons_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Dark Section Primary Button
    content = re.sub(
        r'bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-lightgrey transition-colors flex items-center group',
        'bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 flex items-center group',
        content
    )
    content = re.sub(
        r'bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-lightgrey transition-colors disabled:opacity-50 disabled:cursor-not-allowed group',
        'bg-synthrova-white text-synthrova-black font-medium hover:bg-synthrova-blue hover:text-synthrova-white transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center group',
        content
    )
    
    # Light Section Primary Button
    content = re.sub(
        r'bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-lightgrey transition-colors',
        'bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors duration-500',
        content
    )
    content = re.sub(
        r'bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-lightgrey transition-colors group',
        'bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors duration-500 flex items-center group',
        content
    )

    # Dark Section Secondary Button
    content = re.sub(
        r'bg-transparent border border-synthrova-white/20 text-synthrova-white font-medium hover:bg-synthrova-white/5 transition-colors flex items-center group',
        'bg-transparent border border-synthrova-lightgrey/30 text-synthrova-white font-medium hover:border-synthrova-blue transition-colors duration-500 flex items-center group',
        content
    )
    
    # Light Section Secondary Button
    content = re.sub(
        r'border border-synthrova-black text-synthrova-black font-medium hover:bg-synthrova-black hover:text-synthrova-white transition-colors group',
        'bg-transparent border border-synthrova-lightgrey text-synthrova-black font-medium hover:border-synthrova-blue hover:text-synthrova-blue transition-colors duration-500 flex items-center group',
        content
    )
    content = re.sub(
        r'border-synthrova-black text-synthrova-black font-medium hover:bg-synthrova-black hover:text-synthrova-white',
        'bg-transparent border-synthrova-lightgrey text-synthrova-black font-medium hover:border-synthrova-blue hover:text-synthrova-blue transition-colors duration-500',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            fix_buttons_in_file(os.path.join(root, file))
