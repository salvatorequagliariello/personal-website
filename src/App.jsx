import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import AnimationBg from "./background-animation/animation-script"

function App() {

  return (
    <div className="app-wrapper">
      <AnimationBg />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
