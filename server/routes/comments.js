import express from "express";
import {
  deleteComment,
  getBlogsComments,
  postComment,
  updateComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/", postComment);
router.get("/", getBlogsComments);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
