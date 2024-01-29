import React from "react";
import BlogComments from "./BlogComments";

const BlogDetails = ({ blog, comments }) => {
  return (
    <div className="w-full mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
      <p className="text-gray-600 mb-8">{blog?.body}</p>

      <hr />
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments.map((comment) => (
        <BlogComments key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default BlogDetails;
