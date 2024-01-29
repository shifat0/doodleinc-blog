import React from "react";

const BlogComments = ({ comment }) => {
  return (
      <ul>
        <li className="flex items-center gap-2">
          <p className="font-semibold">{comment?.name}</p>
          <p className="italic text-gray-400">({comment?.email})</p>
        </li>
          <p className="mb-4 ">{comment?.body}</p>
      </ul>
  );
};

export default BlogComments;
