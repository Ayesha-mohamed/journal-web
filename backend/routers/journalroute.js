import express from "express";
import { createJournal, deleteJournal, getJournals, getSingleJournal, searchJournal, updateJournal, } from "../controllers/journalsController.js";
import uploadimages from '../middleware/uploadImge.js'


const router = express.Router()

router.post("/api/journal",uploadimages.single("image"), createJournal)
router.get("/api/get", getJournals)
router.get("/single/journal/:id", getSingleJournal)
router.put("/update/journal/:id", uploadimages.single("image"), updateJournal)
router.get("/search/journal/:key", searchJournal)
router.delete("/delete/journal/:id", deleteJournal)



export default router