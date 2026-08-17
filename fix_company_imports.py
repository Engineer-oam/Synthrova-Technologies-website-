import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

# Fix the broken import caused by the naive replace
content = content.replace(
'''import {      q: "What is B2G2B technology?",      a: "B2G2B (Business-to-Government-to-Business) technology refers to digital infrastructure that enables trusted data interoperability between regulatory agencies and private enterprises, streamlining compliance and reporting without compromising proprietary data."    },    { motion } from "motion/react";''',
'''import { motion } from "motion/react";'''
)

# Safely inject the FAQ into the FaqSection
faq_section_pattern = r'(const faqs = \[)'
new_faq = r'''\1
    {
      q: "What is B2G2B technology?",
      a: "B2G2B (Business-to-Government-to-Business) technology refers to digital infrastructure that enables trusted data interoperability between regulatory agencies and private enterprises, streamlining compliance and reporting without compromising proprietary data."
    },'''
content = re.sub(faq_section_pattern, new_faq, content)

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)

