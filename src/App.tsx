/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

// Eager load critical components
import { Home } from "./pages/Home";

// Code splitting (lazy load) non-critical components for performance
const Platform = lazy(() => import("./pages/Platform").then(m => ({ default: m.Platform })));
const ELedger = lazy(() => import("./pages/ELedger").then(m => ({ default: m.ELedger })));
const Pharmaceuticals = lazy(() => import("./pages/Pharmaceuticals").then(m => ({ default: m.Pharmaceuticals })));
const Ecosystem = lazy(() => import("./pages/Ecosystem").then(m => ({ default: m.Ecosystem })));
const Industries = lazy(() => import("./pages/Industries").then(m => ({ default: m.Industries })));
const Technology = lazy(() => import("./pages/Technology").then(m => ({ default: m.Technology })));
const Programs = lazy(() => import("./pages/Programs").then(m => ({ default: m.Programs })));
const Insights = lazy(() => import("./pages/Insights").then(m => ({ default: m.Insights })));
const Vision = lazy(() => import("./pages/Vision").then(m => ({ default: m.Vision })));
const Careers = lazy(() => import("./pages/Careers").then(m => ({ default: m.Careers })));
const Company = lazy(() => import("./pages/Company").then(m => ({ default: m.Company })));
const Privacy = lazy(() => import("./pages/Privacy").then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then(m => ({ default: m.Terms })));
const Security = lazy(() => import("./pages/Security").then(m => ({ default: m.Security })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));

function LoadingFallback() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-synthrova-white">
      <div className="w-12 h-12 border-t-2 border-r-2 border-synthrova-blue rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Critical path route eagerly loaded */}
        <Route index element={<Home />} />
        
        {/* Lazy loaded routes */}
        <Route path="platform" element={<Suspense fallback={<LoadingFallback />}><Platform /></Suspense>} />
        <Route path="eledger" element={<Suspense fallback={<LoadingFallback />}><ELedger /></Suspense>} />
        <Route path="pharmaceuticals" element={<Suspense fallback={<LoadingFallback />}><Pharmaceuticals /></Suspense>} />
        <Route path="ecosystem" element={<Suspense fallback={<LoadingFallback />}><Ecosystem /></Suspense>} />
        <Route path="industries" element={<Suspense fallback={<LoadingFallback />}><Industries /></Suspense>} />
        <Route path="technology" element={<Suspense fallback={<LoadingFallback />}><Technology /></Suspense>} />
        <Route path="programs" element={<Suspense fallback={<LoadingFallback />}><Programs /></Suspense>} />
        <Route path="insights" element={<Suspense fallback={<LoadingFallback />}><Insights /></Suspense>} />
        <Route path="vision" element={<Suspense fallback={<LoadingFallback />}><Vision /></Suspense>} />
        <Route path="careers" element={<Suspense fallback={<LoadingFallback />}><Careers /></Suspense>} />
        <Route path="company" element={<Suspense fallback={<LoadingFallback />}><Company /></Suspense>} />
        <Route path="privacy" element={<Suspense fallback={<LoadingFallback />}><Privacy /></Suspense>} />
        <Route path="terms" element={<Suspense fallback={<LoadingFallback />}><Terms /></Suspense>} />
        <Route path="security" element={<Suspense fallback={<LoadingFallback />}><Security /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
      </Route>    
    </Routes>
  );
}
