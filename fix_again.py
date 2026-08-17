import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'^import \{\s+q: "What is B2G2B technology\?",\s+a: "B2G2B \(Business-to-Government-to-Business\) technology refers to digital infrastructure that enables trusted data interoperability between regulatory agencies and private enterprises, streamlining compliance and reporting without compromising proprietary data\."\s+\},\s+\{ motion \} from "motion/react";',
    'import { motion } from "motion/react";',
    content,
    flags=re.MULTILINE
)

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)

