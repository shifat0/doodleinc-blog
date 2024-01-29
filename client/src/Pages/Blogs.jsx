import React from "react";
import BlogCard from "../Components/Blogs/BlogCard";
import useFetch from "../hooks/useFetch";

const Blogs = () => {
  const { data, loading } = useFetch("http://localhost:5000/api/v1/blogs");
  return (
    <section className="mt-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 items-center justify-center">
        {data.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
