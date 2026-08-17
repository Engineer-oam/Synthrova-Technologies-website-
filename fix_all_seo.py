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

    # Clean up duplicate SEOs if any
    content = re.sub(r'<SEO\s+title="[^"]+"\s+description="[^"]+"\s+canonical="[^"]+"\s+/>', '', content)
    
    # Import
    if 'import { SEO }' not in content:
        if 'import ' in content:
            content = re.sub(r'^(import .*?;)', r'\1\nimport { SEO } from "../components/SEO";', content, 1)
        else:
            content = 'import { SEO } from "../components/SEO";\n' + content
            
    # Inject SEO component exactly into the main component export
    # Search for export function Name() { return ( <div ...>
    page_name = page.replace('.tsx', '')
    pattern = rf'(export function {page_name}\(\) {{\s*return \(\s*<div[^>]*>)'
    
    seo_str = f"""\n      <SEO 
        title="{config['title']}"
        description="{config['desc']}"
        canonical="{config['canonical']}"
      />"""
      
    if re.search(pattern, content):
        content = re.sub(pattern, r'\1' + seo_str, content)
    else:
        # Fallback for pages that might have slightly different structure, e.g. Vision uses hooks before return
        pattern2 = rf'(export function {page_name}\(.*?\).*?return \(\s*<div[^>]*>)'
        if re.search(pattern2, content, re.DOTALL):
            content = re.sub(pattern2, r'\1' + seo_str, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(content)

