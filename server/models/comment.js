import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  // _id generates automatically in mongodb but we can also generate manually
  // here i am using default id created by mongodb
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", require: true },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  body: { type: String, require: true },
});

export default mongoose.model("Comment", CommentSchema);
