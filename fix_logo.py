import re

with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

# 1. Update gap (10% tighter)
content = content.replace('gap-[12px] md:gap-[14px]', 'gap-[11px] md:gap-[13px]')

# 2. Update Icon height (15% larger) and add vertical alignment nudge (icon centered to cap height)
content = content.replace(
    'h-[36px] md:h-[42px] lg:h-[48px]', 
    'h-[41px] md:h-[48px] lg:h-[55px] -translate-y-[2px] md:-translate-y-[3px]'
)

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
