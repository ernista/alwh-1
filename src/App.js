import { Route, Routes } from "react-router-dom"
import { Landing, Registration } from "./features"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="register" element={<Registration />} />
    </Routes>
  )
}

export default App