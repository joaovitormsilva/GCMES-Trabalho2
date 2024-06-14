import { LoginUtils } from "~/composables/LoginService";

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path.includes("/manage-content")) {
    const isAuthenticated = await LoginUtils.LoginService.validate(false);
    if (!isAuthenticated) {
      return navigateTo("/login");
    }
  }
});
