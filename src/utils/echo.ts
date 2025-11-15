"use client";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import useAccountStore from "@/store/useAccountStore";

let echoInstance: Echo | null = null;

export const getEchoClient = () => {
  if (typeof window === "undefined") {
    return null; // Don't run on the server
  }

  if (!echoInstance) {
    (window as any).Pusher = Pusher;

    echoInstance = new Echo({
      broadcaster: "reverb",
      key: process.env.NEXT_PUBLIC_REVERB_APP_KEY,
      wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
      wsPort: Number(process.env.NEXT_PUBLIC_REVERB_PORT ?? 80),
      wssPort: Number(process.env.NEXT_PUBLIC_REVERB_PORT ?? 443),
      forceTLS: process.env.NEXT_PUBLIC_REVERB_SCHEME === "https",
      enabledTransports: ["ws", "wss"],

      authorizer: (channel) => {
        return {
          authorize: (socketId, callback) => {
            const token = useAccountStore.getState().token;
            console.log(socketId);
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/broadcasting/auth`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                
              },
              body: JSON.stringify({
                channel_name: channel.name,
                socket_id: socketId,
              }),
            })
              .then((response) => response.json())
              .then((data) => callback(false, data))
              .catch((err) => callback(true, err));
          },
        };
      },
    });
  }

  return echoInstance;
};
