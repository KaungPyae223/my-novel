"use client";
import useAccountStore from "@/store/useAccountStore";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

const Middleware = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAccountStore();

  const router = useRouter();
  const autoLogoutIfTokenExpire = async () => {
    try {
      await api.get("/check-user");
    } catch (error) {
      router.push("/login");
    }
  };

  useEffect(() => {
    const currentToken = useAccountStore.getState().token;

    if (!currentToken) {
      router.push("/");
    } else {
      autoLogoutIfTokenExpire();
    }
  }, [token]);

  return <>{children}</>;
};

export default Middleware;
