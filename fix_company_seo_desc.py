import re

with open('src/pages/Company.tsx', 'r') as f:
    content = f.read()

# Fix the duplicate SEO tag inside the original replace
content = content.replace(
'''import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { SEO } from "../components/SEO";''',
'''import { useEffect } from "react";
import { SEO } from "../components/SEO";'''
)

with open('src/pages/Company.tsx', 'w') as f:
    f.write(content)

