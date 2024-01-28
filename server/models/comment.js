import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  // _id generates automatically in mongodb but we can also generate manually
  // here i am using default id created by mongodb
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  body: { type: String, required: true },
});

export default mongoose.model("Comment", CommentSchema);
