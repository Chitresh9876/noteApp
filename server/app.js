import express from "express";
import cors from "cors";
import { config } from "dotenv";
import groupRoutes from "./routes/groupRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";



config({ path: "./config/config.env" });

export const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/group", groupRoutes);
app.use("/notes", notesRoutes);