import React from "react";

const NavCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex cursor-pointer flex-row text-gray-600 p-2 justify-between rounded-lg items-center gap-3">
      <div className="flex flex-row items-center gap-3">
        {icon}
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
};

export default NavCard;
