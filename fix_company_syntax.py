import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

# Replace the mangled top of the file
bad_header = """import {      q: "What is B2G2B technology?",      a: "B2G2B (Business-to-Government-to-Business) technology refers to digital infrastructure that enables trusted data interoperability between regulatory agencies and private enterprises, streamlining compliance and reporting without compromising proprietary data."    },    { motion } from "motion/react";"""
good_header = """import { motion } from "motion/react";"""

content = content.replace(bad_header, good_header)

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)

