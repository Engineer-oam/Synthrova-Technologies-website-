import re
with open('src/pages/Contact.tsx', 'r') as f:
    content = f.read()

content = 'import React, { useState, useEffect } from "react";\n' + content

with open('src/pages/Contact.tsx', 'w') as f:
    f.write(content)
