export const login = (data: { email: string; password: string }) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const register = (data: {
  full_name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
