import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'>\s*Technology for the systems that matter\.\s*</motion\.h1>',
    '>\n            Building Technology Infrastructure for What Comes Next.\n          </motion.h1>',
    content
)

content = re.sub(
    r'>\s*Synthrova builds infrastructure, intelligence and mission-critical technology across regulated industries and emerging strategic domains\.\s*</motion\.p>',
    '>\n            Synthrova Technologies builds technology infrastructure for regulated industries, connecting compliance, transactions, data and emerging technologies.\n          </motion.p>',
    content
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
