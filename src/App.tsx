/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import { Industries } from "./pages/Industries";
import { Technology } from "./pages/Technology";
import { Programs } from "./pages/Programs";
import { Insights } from "./pages/Insights";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="platform" element={<Platform />} />
        <Route path="industries" element={<Industries />} />
        <Route path="technology" element={<Technology />} />
        <Route path="programs" element={<Programs />} />
        <Route path="insights" element={<Insights />} />
        <Route path="company" element={<Company />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
