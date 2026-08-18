import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Update SEO
content = re.sub(
    r'title="Synthrova Technologies \| Technology for Critical Systems"',
    'title="Synthrova Technologies | Compliance Infrastructure for Regulated Industries"',
    content
)
content = re.sub(
    r'description="Synthrova builds intelligent infrastructure for critical systems and regulated industries\."',
    'description="Synthrova Technologies builds compliance infrastructure and technology platforms for regulated industries, starting with E-Ledger for pharmaceutical supply chains, reconciliation, traceability and audit readiness."',
    content
)

# Update schema
old_schema = '''        schema={{
          "@context": "https://schema.org",
          "@type": ["Organization", "WebSite"],
          "name": "Synthrova Technologies",
          "legalName": "Synthrova Technologies Private Limited",
          "url": "https://synthrova.in",
          "description": "Synthrova builds intelligent infrastructure for critical systems and regulated industries.",
          "sameAs": [
            "https://www.linkedin.com/company/synthrova/",
            "https://x.com/Synthrova",
            "https://www.instagram.com/synthrova?igsh=MTVheXA5NmRydWdjcw=="
          ]
        }}'''

new_schema = '''        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Synthrova Technologies Private Limited",
            "url": "https://synthrova.in/",
            "logo": "https://synthrova.in/logo.png",
            "description": "Synthrova Technologies is a technology company building compliance infrastructure and technology platforms for regulated industries.",
            "sameAs": [
              "https://www.linkedin.com/company/synthrova/",
              "https://x.com/Synthrova",
              "https://www.instagram.com/synthrova?igsh=MTVheXA5NmRydWdjcw=="
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Synthrova Technologies",
            "alternateName": "Synthrova",
            "url": "https://synthrova.in/"
          }
        ]}'''

content = content.replace(old_schema, new_schema)

# Update H1 and supporting statement
content = re.sub(
    r'<h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 max-w-4xl leading-\[0\.9\]">.*?</h1>',
    '<h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 max-w-4xl leading-[0.9]">\n            Building Technology Infrastructure for What Comes Next.\n          </h1>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<p className="text-xl md:text-3xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed mb-12">.*?<\/p>',
    '<p className="text-xl md:text-3xl font-light text-synthrova-white/70 max-w-2xl leading-relaxed mb-12">\n            Synthrova Technologies builds technology infrastructure for regulated industries, connecting compliance, transactions, data and emerging technologies.\n          </p>',
    content,
    flags=re.DOTALL
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
