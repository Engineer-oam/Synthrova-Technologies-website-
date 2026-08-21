import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'const Careers = lazy(() => import("./pages/Careers").then(m => ({ default: m.Careers })));',
    'const Careers = lazy(() => import("./pages/Careers").then(m => ({ default: m.Careers })));\nconst Leadership = lazy(() => import("./pages/Leadership").then(m => ({ default: m.Leadership })));'
)

content = content.replace(
    '<Route path="company" element={<Suspense fallback={<LoadingFallback />}><Company /></Suspense>} />',
    '<Route path="company" element={<Suspense fallback={<LoadingFallback />}><Company /></Suspense>} />\n        <Route path="leadership" element={<Suspense fallback={<LoadingFallback />}><Leadership /></Suspense>} />'
)

with open('src/App.tsx', 'w') as f:
    f.write(content)
