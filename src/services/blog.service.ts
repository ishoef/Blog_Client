import { env } from "@/env";

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

      const res = await fetch(url.toString(), config);
      const response = await res.json();

      // if (!response.success) {
      //   return {
      //     data: [],
      //     error: {
      //       message: "Failed to fetch blogs from blogService.getBlogPosts",
      //     },
      //   };
      // }

      return response;
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
};
