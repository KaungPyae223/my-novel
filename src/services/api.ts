import axios from "axios";
import useAccountStore from "@/store/useAccountStore";

// JSON API instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Form API instance
const formApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json", 
  },
});

// Auth token injector
const injectToken = (config: any) => {
  const token = useAccountStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// Handle 401 error
const handleResponseError = (error: any) => {
  if (error.response?.status === 401) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }
  return Promise.reject(error);
};

// Apply interceptors to both instances
api.interceptors.request.use(injectToken, Promise.reject);
formApi.interceptors.request.use(injectToken, Promise.reject);

api.interceptors.response.use((res) => res, handleResponseError);
formApi.interceptors.response.use((res) => res, handleResponseError);

export { api, formApi };
