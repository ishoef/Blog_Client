import wait from "@/lib/wait";
import React from "react";

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  await wait(500);
  // throw new Error("Ki jeno somossa hoise");
  return <div>This is the BlogPage</div>;
};

export default BlogPage;
