import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Articles from "./pages/Articles"

import Dashboard from "./dashboard/Dashbord"

import Readmore from "./pages/Readmore"
import AdminLogin from "./pages/Login"
import Adminarticle from "./dashboard/articleDash"
import Messages from "./dashboard/messages"
import AdminRegister from "./dashboard/Register"
import AddArticle from "./dashboard/Addarticle"
import Report from "./dashboard/report"


function App() {

  return (
  <>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/articles" element={<Articles />} />
  {/* <Route path="/dashboard" element={<Dashboard />} /> */}
  <Route path="/readmore/:id" element={<Readmore />} />
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/admin/article" element={<Adminarticle />} />
  <Route path="/admin/messages" element={<Messages />} />
  <Route path="/admin/register" element={<AdminRegister />} />
  <Route path="/add/article" element={<AddArticle />} />
  <Route path="/admin/dashboard" element={<Report />} />
  


</Routes>

  </>
  )
}

export default App
