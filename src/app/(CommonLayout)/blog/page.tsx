import BlogCard from "@/components/modules/homePage/blogCard";
import wait from "@/lib/wait";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import React from "react";

const BlogPage = async () => {
  const data = await blogService.getBlogPosts(
    {},
    {
      // cache: "no-store",
      revalidate: 10,
    },
  );
  const blogs = data?.data || [];
  return (
    <div className="container mx-auto py-16">
      <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {blogs.map((blog: BlogPost) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
