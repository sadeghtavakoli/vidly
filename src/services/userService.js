import http from "./httpService";
import auth from "./authService";

const apiEndpoint = "/users";

export async function register(user) {
  const { data, headers } = await http.post(apiEndpoint, user);
  auth.loginWithJwt(headers["x-auth-token"]);
  return data;
}

export default {
  register,
};
