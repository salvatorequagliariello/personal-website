import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"

import ThemeContext from "./contexts/ThemeContext";
import AnimationBg from "./background-animation/animation-script"
import Home from "./components/Home";
import Work from "./components/Work";
import ProjectTest from "./components/projects/ProjectTest";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'));

    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    };
  }, []);

  return (
    <div className="app-wrapper" data-theme={theme}>
      <div className="bg-filler fill-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/instagram" element={<ProjectTest />} />
        </Routes>
      </div>
      <ThemeContext.Provider value={theme}>
        <AnimationBg />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
