import os
import re

seo_configs = {
    'Platform.tsx': {
        'title': 'Synthrova Platform | Intelligent Technology Infrastructure',
        'desc': 'Explore Synthrova\'s technology platforms across data infrastructure, artificial intelligence, and automated decision-making for regulated industries.',
        'canonical': '/platform'
    },
    'Industries.tsx': {
        'title': 'Industries | Synthrova Technologies',
        'desc': 'Synthrova Technologies serves critical industries including Pharmaceuticals, Energy, Defence & Security, and Government supply chains.',
        'canonical': '/industries'
    },
    'Technology.tsx': {
        'title': 'Technology | AI, Data & Systems Infrastructure | Synthrova',
        'desc': 'Synthrova develops technology across data integration, interoperability, distributed systems, artificial intelligence, and automated analytics.',
        'canonical': '/technology'
    },
    'Programs.tsx': {
        'title': 'Programs & Initiatives | Synthrova Technologies',
        'desc': 'Explore Synthrova Technologies\' emerging programs in Artificial Intelligence, Energy systems, and Defence & Security infrastructure.',
        'canonical': '/programs'
    },
    'Insights.tsx': {
        'title': 'Insights | Synthrova Technologies',
        'desc': 'Research, analysis, and perspectives on technology, regulated industries, infrastructure, and emerging systems from Synthrova Technologies.',
        'canonical': '/insights'
    },
    'Careers.tsx': {
        'title': 'Careers | Synthrova Technologies',
        'desc': 'Work with Synthrova Technologies on difficult engineering problems across infrastructure, intelligence, regulated industries, and emerging technology.',
        'canonical': '/careers'
    },
    'Contact.tsx': {
        'title': 'Contact Synthrova Technologies',
        'desc': 'Contact Synthrova Technologies to discuss technology partnerships, infrastructure projects, research, and enterprise pilots.',
        'canonical': '/contact'
    },
    'Vision.tsx': {
        'title': 'Vision | Synthrova Technologies',
        'desc': 'The boundaries between software, physical systems, data, and decision-making are disappearing. Read the Synthrova Technologies vision for the future.',
        'canonical': '/vision'
    },
    'Ecosystem.tsx': {
        'title': 'Ecosystem | Synthrova Technologies',
        'desc': 'Synthrova Technologies builds interoperable technology ecosystems that align incentives across complex, multi-stakeholder supply chains.',
        'canonical': '/ecosystem'
    },
    'Pharmaceuticals.tsx': {
        'title': 'Pharmaceutical Traceability & Compliance | Synthrova Technologies',
        'desc': 'Synthrova Technologies provides E-Ledger infrastructure for the pharmaceutical industry to ensure traceability, provenance, and regulatory compliance.',
        'canonical': '/industries/pharmaceuticals'
    }
}

for page, config in seo_configs.items():
    filepath = os.path.join('src', 'pages', page)
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()

    # Check if SEO already imported
    if 'import { SEO }' not in content:
        # Add import at the top
        # Find first import or add at beginning
        if 'import' in content:
            content = re.sub(r'^(import .*?;)', r'\1\nimport { SEO } from "../components/SEO";', content, 1)
        else:
            content = 'import { SEO } from "../components/SEO";\n' + content
            
    # Inject SEO component
    seo_str = f"""<SEO 
        title="{config['title']}"
        description="{config['desc']}"
        canonical="{config['canonical']}"
      />"""
      
    # For all standard pages
    pattern = r'(return \(\s*<div.*?className="w-full.*?>)'
    if re.search(pattern, content):
        content = re.sub(pattern, r'\1\n      ' + seo_str, content)
    elif 'return (' in content:
        # If it doesn't match the specific div pattern, inject right after the main container
        # Find the main export function's return statement. It's usually the last return in the file.
        # This is a bit tricky, let's just do it for the specific known pattern.
        pass

    with open(filepath, 'w') as f:
        f.write(content)

