import express from "express";
// import Post from "../models/post.model.js"
import { getPosts, getPost, createPost, deletePost, uploadAuth } from "../controllers/post.controller.js";


const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

router.get("/", (req, res) => {
    res.status(200).send("Hello postman")
})

export default router;
