"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const autoLogoutIfTokenExpire = async () => {
    try {
      await api.get("/check-user");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    autoLogoutIfTokenExpire();
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
