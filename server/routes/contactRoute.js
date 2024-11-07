import express from "express";
import { getContact, saveContact } from "../controller/contactController.js";
const router = express.Router();

router.post("/saveContact", saveContact);
router.get("/saveContact", getContact);

export default router;
