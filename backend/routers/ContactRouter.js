import contactController from"../controllers/ContactController.js"
import express  from"express"   


const router = express.Router()


router.post("/create/contact" ,contactController.createContact)
router.get("/read/contact", contactController.readContact)
router.get("/total/contact", contactController.totalMessages)
router.delete("/delete/message", contactController.deleteMessage)

export default  router
