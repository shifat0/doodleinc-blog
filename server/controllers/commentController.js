import Comment from "../models/comment.js";
import Blog from "../models/blog.js";

// post a comment
export const postComment = async (req, res) => {
  try {
    const blog = await Blog.findById(req.body.blogId);
    if (!blog) res.json({ message: "Couldn not find a blog" });

    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.json({ error });
  }
};

// get all Comments
export const getBlogsComments = async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.query.blogId });
    res.status(200).json(comments);
  } catch (error) {
    res.json({ error });
  }
};

// update a comment
export const updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.json({ message: error._message });
  }
};

// delete a comment
export const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(`${deletedComment.name} is deleted successfully`);
  } catch (error) {
    res.json({ message: error._message });
  }
};
