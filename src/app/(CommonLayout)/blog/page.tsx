import React from "react";

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error("Ki jeno somossa hoise");
  return <div>This is the BlogPage</div>;
};

export default BlogPage;
