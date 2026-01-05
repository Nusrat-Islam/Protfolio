import { Routes, Route } from "react-router"
import Home from "./Pages/Home"
import ProjectDetail from "./Pages/projectDetail"




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App

