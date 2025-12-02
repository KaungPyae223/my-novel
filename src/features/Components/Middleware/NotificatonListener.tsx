"use client";
import { useEffect } from "react";
import useAccountStore from "@/store/useAccountStore";
import { getEchoClient } from "@/utils/echo";
import { api } from "@/services/api";

const NotificatonListener = ({ children }: { children: React.ReactNode }) => {
  const userId = useAccountStore.getState().account.id;

  useEffect(() => {
    const echo = getEchoClient();

    echo
      .private(`App.Models.User.${userId}`)
      .notification((notification: any) => {
        const notify = new Notification(notification.title, {
          body: notification.message,
        });

        notify.onclick = () => {
          window.open(
            process.env.NEXT_PUBLIC_APP_URL + "notifications",
            "_blank"
          );
        };
      });

    return () => {
      echo.leave(`App.Models.User.${userId}`);
    };
  }, [userId]);

  useEffect(() => {
    // Register service worker once
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }

    async function setupPush() {

      if (!("Notification" in window)) return;

      if (Notification.permission === "default") {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          const registration = await navigator.serviceWorker.ready;

          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUBLIC_VAPID_KEY,
          });

          const sub = subscription.toJSON();

          await api.post("/save-subscription", sub);
        }
      }
    }

    setupPush();
  }, []);

  return children;
};

export default NotificatonListener;
