import express from "express";
import { createGroup, fetchAllGroup } from "../controllers/groupControllers.js";


const router = express.Router();

router.route("/create").post(createGroup);
router.route("/fetchAllGroup").get(fetchAllGroup);

export default router;