'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavCard = ({ icon, href, title }: { icon: React.ReactNode; href: string; title: string }) => {
  
  const pathName = usePathname();

  return (
    <Link href={href} className={` ${(href !== "/" && pathName.startsWith(href)) || (href === "/" && pathName == "/") ? "bg-blue-100 text-blue-800 font-medium" : "text-gray-600"} flex cursor-pointer flex-row  p-2 justify-between rounded-lg items-center gap-3`}>
      <div className="flex flex-row items-center gap-3">
        {icon}
        <p className="font-medium">{title}</p>
      </div>
    </Link>
  );
};

export default NavCard;
