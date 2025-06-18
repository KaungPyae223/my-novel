import React from "react";
import NotificationCard from "../components/NotificationCard";

const NotificationPage = () => {
  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Notifications</p>
      <p className="text-gray-600 mt-3">2 unread notifications</p>
      <div className="mt-6 space-y-5">
       <NotificationCard newChapter={true} />
       <NotificationCard newChapter={false} />
      </div>
    </div>
  );
};

export default NotificationPage;
