import BlogCard from "@/components/modules/homePage/blogCard";
import wait from "@/lib/wait";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import React from "react";

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  const data = await blogService.getBlogPosts();
  const blogs = data?.data;

  console.log(blogs);

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog: BlogPost) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
