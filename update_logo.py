with open('src/components/Logo.tsx', 'r') as f:
    content = f.read()

content = content.replace('export function SynthrovaLogo', 'import logoTransparent from "../assets/images/logo-transparent.png";\nimport logoDark from "../assets/images/logo-dark.png";\n\nexport function SynthrovaLogo')
content = content.replace('src="/images/logo-transparent.png"', 'src={logoTransparent}')
content = content.replace('src="/images/logo-dark.png"', 'src={logoDark}')

with open('src/components/Logo.tsx', 'w') as f:
    f.write(content)
