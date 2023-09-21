import axios from "axios";
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

const getBearerToken = () => {
  const token = import.meta.env.VITE_APP_BEARER_TOKEN;
  if (!token) {
    throw new Error("Bearer token not found in environment variables.");
  }
  return token;
};

apiClient.interceptors.request.use(
  (config) => {
    const token = getBearerToken();
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
