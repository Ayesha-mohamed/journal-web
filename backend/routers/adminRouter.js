import express  from "express"
const router = express.Router()
import adminController  from"../controllers/adminController.js"

router.post("/create/admin", adminController.createAdmin)
router.post("/login/admin", adminController.adminlogin)
router.get("/total/admins",adminController.totalAdmins )



export default router