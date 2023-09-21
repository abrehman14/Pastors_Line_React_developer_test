// import apiClient from "./Evn"
import apiClient from "./Env";

export default {
  get: async (url, data) => {
    return await apiClient.get(url, data);
  },
};
