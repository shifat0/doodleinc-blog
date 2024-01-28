import Blog from "../models/blog.js";

// Creating blog
export const createBlog = async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const saveBlog = await newBlog.save();
    res.status(200).json(saveBlog);
  } catch (error) {
    console.log(error);
    res.json({ message: error._message });
  }
};

// get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.json({ message: error._message });
  }
};

// update a blog
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.json({ message: error._message });
  }
};

// delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json(`${deletedBlog.name} is deleted successfully`);
  } catch (error) {
    res.json({ message: error._message });
  }
};
