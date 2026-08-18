import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Add new lazy imports
lazy_imports = """
const Privacy = lazy(() => import("./pages/Privacy").then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then(m => ({ default: m.Terms })));
const Security = lazy(() => import("./pages/Security").then(m => ({ default: m.Security })));
"""

if 'Privacy = lazy' not in content:
    content = content.replace('const Contact = lazy', lazy_imports.strip() + '\nconst Contact = lazy')

# Add new routes
new_routes = """
        <Route path="privacy" element={<Suspense fallback={<LoadingFallback />}><Privacy /></Suspense>} />
        <Route path="terms" element={<Suspense fallback={<LoadingFallback />}><Terms /></Suspense>} />
        <Route path="security" element={<Suspense fallback={<LoadingFallback />}><Security /></Suspense>} />
"""

if 'path="privacy"' not in content:
    content = content.replace('<Route path="contact"', new_routes.strip() + '\n        <Route path="contact"')

with open('src/App.tsx', 'w') as f:
    f.write(content)
