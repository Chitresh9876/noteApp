import express from "express";
import { createNote, fetchAllNotes } from "../controllers/notesControllers.js";


const router = express.Router();

router.route("/create").post(createNote);
router.route("/fetchAllNotes/:groupId").get(fetchAllNotes);

export default router;