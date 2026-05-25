import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Articles from "./pages/Articles"
import Readmore from "./pages/Readmore"
import AdminLogin from "./pages/Login"


function App() {

  return (
  <>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/readmore/:id" element={<Readmore />} />
  <Route path="/admin/login" element={<AdminLogin />} />

</Routes>

  </>
  )
}

export default App
