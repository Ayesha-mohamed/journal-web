import { Navigate } from "react-router-dom"

const Protect = ({children})=>{
    const admin = localStorage.getItem("adminToken")
    if (!admin){
        return <Navigate to='/admin/login' />
    }
    return children


    return  <>
    </>
}

export default Protect