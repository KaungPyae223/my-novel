import { api } from "./api";
import axios from "axios";

export const getCsrfCookie = () =>
  axios.get(process.env.NEXT_PUBLIC_API_URL + "/sanctum/csrf-cookie", {
    withCredentials: true,
  });

export const login = async (data: { email: string; password: string }) => {
  await getCsrfCookie();
  return await api.post("/login", data);
};

export const register = async (data: {
  full_name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  await getCsrfCookie();
  return await api.post("/register", data);
};

export const logout = () => {
  return api.post("/logout");
};
