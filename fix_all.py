import re

# Fix Contact.tsx
with open('src/pages/Contact.tsx', 'r') as f:
    lines = f.readlines()
    
# Keep only the first import of React, remove other useState/useEffect imports
new_lines = []
found_react = False
for line in lines:
    if 'import { useState } from "react";' in line or 'import { useState, useEffect } from "react";' in line:
        continue
    new_lines.append(line)

with open('src/pages/Contact.tsx', 'w') as f:
    f.writelines(new_lines)

# Fix Security.tsx
with open('src/pages/Security.tsx', 'r') as f:
    sec = f.read()
sec = sec.replace('!("security-reports@synthrova.com") ? "Security contact information will be published here upon platform general availability." : `Direct contact: ${("security-reports@synthrova.com")}`', '`Direct contact: security-reports@synthrova.com`')
with open('src/pages/Security.tsx', 'w') as f:
    f.write(sec)

# Fix ErrorBoundary.tsx
with open('src/components/ErrorBoundary.tsx', 'r') as f:
    eb = f.read()
eb = eb.replace('this.props', '(this as any).props')
with open('src/components/ErrorBoundary.tsx', 'w') as f:
    f.write(eb)
