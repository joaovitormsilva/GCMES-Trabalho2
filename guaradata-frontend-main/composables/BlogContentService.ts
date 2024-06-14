/* eslint-disable quotes */
class BlogContentService {
  static runtimeConfig() {
    return useRuntimeConfig();
  }

  static async getBlogContents() {
    try {
      const response = await fetch(
        `${this.runtimeConfig().public.NUXT_API_URL}/blogcontents`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Network response was not ok");
      }

      return {
        success: true,
        data: responseData,
      };
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return {
        success: false,
        message: error.message,
      };
    }
  }

  static async createBlogContent(blogContentData: any) {
    try {
      const response = await fetch(
        `${this.runtimeConfig().public.NUXT_API_URL}/blogcontents`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(blogContentData),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Network response was not ok");
      }

      return {
        success: true,
        data: responseData,
      };
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

export const BlogContent = {
  BlogContentService,
};
