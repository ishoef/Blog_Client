import { CreateBlogFormClient } from "@/components/modules/dashboard/CreateBlog/CreateBlogFormClient";
import CreateBlogFormServer from "@/components/modules/dashboard/CreateBlog/CreateBlogFormServer";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import React from "react";

export default async function CreatePageBlog() {
  const { data } = await blogService.getBlogPosts();
  // console.log("blogpage", data);

  return (
    <>
      <CreateBlogFormClient />
      {/* <CreateBlogFormServer /> */}
      {data.data?.map((item: BlogPost) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}
