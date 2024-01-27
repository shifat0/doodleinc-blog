import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  // _id generates automatically in mongodb but we can also generate manually
  // here i am using default id created by mongodb
  userId: { type: Number, require: true },
  title: { type: String, require: true },
  body: { type: String, require: true },
});

export default mongoose.model("Blog", BlogSchema);
