import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
