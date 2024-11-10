import express from "express";
import { getPosts, savePost } from "../controller/postsController.js";

const router = express.Router();

router.get("/getposts", getPosts);
router.post("/saveposts", savePost);

export default router;
