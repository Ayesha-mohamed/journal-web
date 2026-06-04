import contactController from"../controllers/ContactController.js"
import express  from"express"   
import verifyToken from "../middleware/Auth.js"


const router = express.Router()


router.post("/create/contact" ,contactController.createContact)
router.get("/read/contact", contactController.readContact)
router.get("/total/contact", contactController.totalMessages)
router.delete("/delete/message/:id", verifyToken, contactController.deleteMessage)

export default  router
