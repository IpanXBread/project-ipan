import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '../src/components/ThemeContext';
import { ViewportProvider } from "./components/ViewportContext";
import React, { createContext } from "react";

import HomePage from './screens/HomePage';
import WorkPage from './screens/WorkPage';
import ContactPage from './screens/ContactPage';
import NoPage from "./screens/NoPage";
import ParallaxPage from "./screens/ParallaxPage";
import ProjectPage from "./screens/ProjectPage";
import SkillsPage from "./screens/SkillsPage";

export const DrawerContext = createContext("");

export default function App() {
  return (
    <ThemeProvider> {/* Wrap your entire App with the ThemeProvider */}
      <div>
        <ViewportProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/parallax" element={<ParallaxPage />} />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </ViewportProvider>
      </div>
    </ThemeProvider>
  );
}

// portfolio