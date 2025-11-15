"use client";
import { useEffect } from "react";
import useAccountStore from "@/store/useAccountStore";
import { getEchoClient } from "@/utils/echo";

const NotificatonListener = ({ children }: { children: React.ReactNode }) => {
  const userId = useAccountStore.getState().account.id;
  useEffect(() => {
    const echo = getEchoClient();

    echo
      .private(`App.Models.User.${userId}`)
      .notification((notification: any) => {
        console.log("New notification:", notification);
      });

    return () => {
      echo.leave(`App.Models.User.${userId}`);
    };
  }, [userId]);

  return children;
};

export default NotificatonListener;
