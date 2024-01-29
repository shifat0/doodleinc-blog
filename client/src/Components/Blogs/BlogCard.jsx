import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-[20rem] bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{blog?.title}</h2>
      <Link to={`/${blog?._id}`} className="text-blue-500 hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
