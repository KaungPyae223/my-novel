import React from "react";
import {
  LucideFacebook,
  LucideInstagram,
  LucideTwitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const AuthorDetailsInfoCard = () => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 shadow rounded-lg mx-auto">
      <p className="text-xl font-semibold text-gray-800">About Jolley Roger </p>

      <p className="font-medium text-lg mt-7 text-gray-700">About</p>
      <p className="text-gray-600 mt-3 text-justify leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi magnam
        libero culpa assumenda soluta, maiores obcaecati tempora quo minima?
        Placeat nam numquam neque deleniti asperiores porro quae, modi ex
        voluptates quibusdam, obcaecati, quis quod saepe itaque corrupti
        distinctio amet illum.
      </p>

      <p className="font-medium text-lg mt-7 text-gray-700">Writing Genre</p>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <p className="border border-gray-300 px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-50">
          Sci-Fi
        </p>
        <p className="border border-gray-300 px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-50">
          Fantasy
        </p>
        <p className="border border-gray-300 px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-50">
          Thriller
        </p>
      </div>

      <p className="font-medium text-lg mt-7 text-gray-700">Info</p>
      <div className="flex flex-col gap-3 mt-3 text-gray-700 text-sm">
        <div className="flex flex-row items-center gap-3">
          <MapPin className="size-4 text-gray-500" />
          <p>No 123 Hello Road, Hello City, Hello Country</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Phone className="size-4 text-gray-500" />
          <p>+1234567890</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Mail className="size-4 text-gray-500" />
          <a
            href="mailto:hello@hello.com"
            className="text-blue-600 hover:underline"
          >
            hello@hello.com
          </a>
        </div>
      </div>

      <p className="font-medium text-lg mt-7 text-gray-700">Socials</p>
      <div className="flex flex-row items-center gap-5 mt-3">
        <div className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
          <LucideFacebook className="size-6 text-blue-700" />
        </div>
        <div className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
          <LucideInstagram className="size-6 text-pink-600" />
        </div>
        <div className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
          <LucideTwitter className="size-6 text-blue-600" />
        </div>
      </div>
      <div className="mt-7 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
        <p className="font-semibold mb-2">Important Notice:</p>
        <p className="text-justify">
          Please respect the author&apos;s privacy. Do not use their personal
          information for any unauthorized purposes, including contacting them
          outside of appropriate channels or engaging in any form of harassment
          or attack. Misuse of this information may result in legal action or
          prosecution.
        </p>
      </div>
    </div>
  );
};

export default AuthorDetailsInfoCard;
