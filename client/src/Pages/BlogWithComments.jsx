import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BlogDetails from "../Components/BlogWIthComments/BlogDetails";

const BlogWithComments = () => {
  // getting the params
  const { id } = useParams();
  const { state } = useLocation();
  // fetching blogComments
  const { data } = useFetch(
    `https://doodleinc-blog.vercel.app/api/v1/comments?blogId=${id}`
  );

  console.log("triggered", data);
  return (
    <section className="mt-10 flex flex-col items-center justify-center overflow-hidden">
      <BlogDetails blog={state} comments={data} />
    </section>
  );
};

export default BlogWithComments;
