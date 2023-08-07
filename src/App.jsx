import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"

function App() {

  return (
    <div  className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
