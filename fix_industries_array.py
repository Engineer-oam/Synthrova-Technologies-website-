import re

with open('src/pages/Industries.tsx', 'r') as f:
    content = f.read()

new_industries = '''const industries = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals & Healthcare",
    desc: "Trusted transaction and compliance infrastructure for pharmaceutical supply chains, serialization, and regulatory reporting.",
    status: "Current",
    icon: Beaker,
    link: "/pharmaceuticals",
    cta: "Explore Pharmaceuticals"
  },
  {
    id: "energy",
    title: "Energy Technology",
    desc: "Decentralized energy grid management, trading verification, and infrastructure for transition technologies.",
    status: "Research / Exploration",
    icon: Zap
  },
  {
    id: "defence",
    title: "Defence Technology",
    desc: "Secure, partitioned communication and logistics networks that require absolute operational integrity.",
    status: "In Development",
    icon: Shield
  },
  {
    id: "government",
    title: "Government & Regulated Supply Chains",
    desc: "Technology connecting regulated entities, evidence and oversight for excise and controlled goods.",
    status: "Future",
    icon: Building2
  },
];'''

content = re.sub(
    r'const industries = \[.*?\];',
    new_industries,
    content,
    flags=re.DOTALL
)

with open('src/pages/Industries.tsx', 'w') as f:
    f.write(content)
