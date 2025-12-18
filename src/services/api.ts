import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/v1",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const formApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/v1",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

const handleResponseError = (error: any) => {
  if (error.response?.status === 401) {
    if (typeof window !== "undefined") {
      // window.location.href = "/login";
    }
  }

  if (error.response?.status === 403) {
    if (typeof window !== "undefined") {
      window.location.href = "/send-verification-mail";
    }
  }

  return Promise.reject(error);
};

api.interceptors.response.use((res) => res, handleResponseError);
formApi.interceptors.response.use((res) => res, handleResponseError);

export { api, formApi, baseApi };
