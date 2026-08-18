import os
import re

def add_organization_schema(schema_str):
    org_schema = '''{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Synthrova Technologies Private Limited",
            "url": "https://synthrova.in/",
            "logo": "https://synthrova.in/logo.png"
          }'''
    return org_schema

titles = {
    'Home.tsx': 'Synthrova Technologies | Compliance Infrastructure for Regulated Industries',
    'Company.tsx': 'About Synthrova Technologies | Technology Infrastructure Company',
    'ELedger.tsx': 'E-Ledger | Compliance Infrastructure for Regulated Supply Chains',
    'Industries.tsx': 'Industries | Synthrova Technologies',
    'Pharmaceuticals.tsx': 'Pharmaceutical Compliance Technology | Synthrova',
    'Technology.tsx': 'Technology Infrastructure | Synthrova Technologies',
    'Insights.tsx': 'Insights | Synthrova Technologies',
    'Contact.tsx': 'Contact Synthrova Technologies',
    'Vision.tsx': 'Vision | Synthrova Technologies',
    'Programs.tsx': 'Programs | Synthrova Technologies',
    'Ecosystem.tsx': 'Ecosystem | Synthrova Technologies',
    'Platform.tsx': 'Platform | Synthrova Technologies',
    'Terms.tsx': 'Terms of Service | Synthrova Technologies',
    'Privacy.tsx': 'Privacy Policy | Synthrova Technologies',
    'Security.tsx': 'Security | Synthrova Technologies',
    'Careers.tsx': 'Careers | Synthrova Technologies'
}

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()

            # Ensure 'Synthrova Technologies Private Limited' is used instead of random variations
            content = re.sub(r'\bSynthrova Technologies(?! Private Limited)\b', 'Synthrova Technologies', content)

            if file in titles:
                new_title = titles[file]
                content = re.sub(r'title="[^"]+"', f'title="{new_title}"', content, count=1)
                
                # Replace 'ERP' with 'enterprise systems'
                content = re.sub(r'\bERP\b', 'enterprise systems', content)
                content = re.sub(r'\berp\b', 'enterprise systems', content)

            with open(path, 'w') as f:
                f.write(content)
