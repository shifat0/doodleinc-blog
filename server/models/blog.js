import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  // _id generates automatically in mongodb but we can also generate manually
  // here i am using default id created by mongodb
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export default mongoose.model("Blog", BlogSchema);
