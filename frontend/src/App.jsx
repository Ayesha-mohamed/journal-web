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
import UpdateArticle from "./dashboard/updateArticle"
import Protect from "./pages/protected-routes"


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

  <Route 
  path="/admin/article" 
  element={
    <Protect>
  <Adminarticle />
    </Protect>   

} 
  />

  <Route
   path="/admin/messages" 
   element={
    <Protect>
   <Messages />
    </Protect>
   
   } />

  <Route path="/admin/register" 
  element={
    <Protect>
  <AdminRegister />
    </Protect>
  } />
  <Route path="/add/article" 
  element={
  <Protect>
    <AddArticle />
  </Protect>

  } />
  <Route path="/admin/dashboard" 
  element={
    <Protect>
      <Report />
    </Protect>

  } />
  <Route path="/update/article/:id" 
  element={
    <Protect>
      <UpdateArticle />
    </Protect>

  } />
  


</Routes>

  </>
  )
}

export default App
