/* eslint-disable quotes */
class LoginService {
  static runtimeConfig() {
    return useRuntimeConfig();
  }

  static validate(getUserData: boolean = true): Promise<boolean | undefined> {
    return fetch(`${this.runtimeConfig().public.NUXT_API_URL}/user/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then(async function (response) {
        if ((await response.status) === 401) {
          return false;
        }
        if (await !response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        if ((await response.status) === 200) {
          if (getUserData) {
            return { userData: await response.json(), status: true };
          } else {
            return true;
          }
        }
      })
      .catch((error) => {
        console.error("Error: \n", error);
        return false;
      });
  }

  static async login(userAccess: object): Promise<boolean | undefined> {
    return await fetch(`${this.runtimeConfig().public.NUXT_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userAccess),
    })
      .then(function (response) {
        if (response.status === 401) {
          return false;
        }
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        if (response.status === 200) {
          localStorage.setItem("auth", "true");
          return true;
        }
      })
      .catch((error) => {
        console.error("Error: \n", error);
        return false;
      });
  }

  static async logout(): Promise<boolean | undefined> {
    return await fetch(`${this.runtimeConfig().public.NUXT_API_URL}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        if (response.status === 401) {
          return false;
        }
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        if (response.status === 200) {
          localStorage.removeItem("auth");
          return true;
        }
      })
      .catch((error) => {
        console.error("Error: \n", error);
        return false;
      });
  }
}

export const LoginUtils = {
  LoginService,
};
