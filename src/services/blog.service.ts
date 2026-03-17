import { env } from "@/env";

const API_URL = env.API_URL;

export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 10 } });
      const response = await res.json();

      if (response.success === false) {
        return;
      }

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
};
