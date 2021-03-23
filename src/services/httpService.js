import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

export function setJwt(token) {
  axios.defaults.headers.common["x-auth-token"] = token;
}
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error accurred");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  setJwt,
};
