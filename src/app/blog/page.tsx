import React from "react";

const BlogPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>This is the BlogPage</div>;
};

export default BlogPage;
