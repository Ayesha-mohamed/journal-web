import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Articles from "./pages/Articles"
import Dashboard from "./pages/Dashbord"


function App() {

  return (
  <>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/dashboard" element={<Dashboard />} />

</Routes>

  </>
  )
}

export default App
