import express from "express";
import { addPatient } from "../controllers/patients.js";

const router = express.Router();

router.get("/test", addPatient);

export default router;