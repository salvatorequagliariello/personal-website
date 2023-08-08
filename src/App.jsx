import { Route, Routes } from "react-router-dom"

import AnimationBg from "./background-animation/animation-script"
import Home from "./components/Home";
import Work from "./components/Work";
import ProjectTest from "./components/projects/ProjectTest";
import About from "./components/About";

function App() {

  return (
    <div className="app-wrapper">
      <div className="bg-filler fill-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/instagram" element={<ProjectTest />} />
        </Routes>
      </div>
      <AnimationBg />
    </div>
  )
}

export default App
