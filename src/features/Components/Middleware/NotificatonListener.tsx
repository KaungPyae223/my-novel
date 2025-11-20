"use client";
import { use, useEffect } from "react";
import useAccountStore from "@/store/useAccountStore";
import { getEchoClient } from "@/utils/echo";
import { useRouter } from "next/navigation";


const NotificatonListener = ({ children }: { children: React.ReactNode }) => {

  const userId = useAccountStore.getState().account.id;

  useEffect(() => {
    const echo = getEchoClient();

    echo
      .private(`App.Models.User.${userId}`)
      .notification((notification: any) => {
        console.log("New notification:", notification);

        const notify = new Notification(notification.title, {
          body: notification.message,
        });

        notify.onclick = () => {
          window.open( process.env.NEXT_PUBLIC_APP_URL + "notifications", "_blank");
        };

      });

    return () => {
      echo.leave(`App.Models.User.${userId}`);
    };
  }, [userId]);

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

  return children;

};

export default NotificatonListener;
