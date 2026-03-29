import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

//* No Dynamic and No {cache: no-store}: SSG => Static Page
//* {cache: no-store}: SSR => Dynamic Page
//* next: {revalidate: 10} : ISR => Mix between static and dynamic

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
  status?: string;
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export interface BlogData {
  title: string;
  content: string;
  tags?: string[];
}

export const blogService = {
  getBlogPosts: async function (
    params?: GetBlogsParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);

      // console.log(Object.entries(params));

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["blogPosts"] };

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      // if (!response.success) {
      //   return {
      //     data: [],
      //     error: {
      //       message: "Failed to fetch blogs from blogService.getBlogPosts",
      //     },
      //   };
      // }

      return { data: data, error: null };
    } catch (err) {
      return {
        data: null,
        error: {
          message: "Somthing Went Wrong from 'blogService.getBlogPosts'",
        },
      };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return {
        data: null,
        error: { message: "Something went wrong fro getBlogById" },
      };
    }
  },

  // Create Post
  createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: {
            messae: data.error || "Error: Post not Created",
          },
        };
      }

      return { data: data.data, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          message:
            "Somthing went wrong and coming from blogService.crateBlogPost",
        },
      };
    }
  },
};
