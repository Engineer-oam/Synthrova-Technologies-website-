import json

with open('package.json', 'r') as f:
    pkg = json.load(f)

pkg['scripts']['dev'] = "vite"
pkg['scripts']['build'] = "vite build"
if 'start' in pkg['scripts']:
    del pkg['scripts']['start']

deps_to_remove = ["compression", "cors", "express", "express-rate-limit", "helmet"]
dev_deps_to_remove = ["@types/compression", "@types/cors", "@types/express", "esbuild", "tsx"]

for dep in deps_to_remove:
    if dep in pkg['dependencies']:
        del pkg['dependencies'][dep]

for dep in dev_deps_to_remove:
    if dep in pkg['devDependencies']:
        del pkg['devDependencies'][dep]

with open('package.json', 'w') as f:
    json.dump(pkg, f, indent=2)
