import React from "react";

const BlogCard = () => {
  return (
    <div class="max-w-md bg-white p-6 rounded-md shadow-md">
      <h2 class="text-xl font-semibold mb-2">Blog Title</h2>
      <p class="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" class="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};

export default BlogCard;
