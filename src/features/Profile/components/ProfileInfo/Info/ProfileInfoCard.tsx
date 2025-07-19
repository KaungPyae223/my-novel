import React from "react";
import {
  LucideFacebook,
  LucideInstagram,
  LucideTwitter,
  LucideYoutube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ProfileInfoCard = ({ data }: { data: any }) => {
  
  
  return (
    <div className="w-full p-6 bg-white border border-gray-200 shadow rounded-lg mx-auto">
      <p className="text-xl font-semibold text-gray-800">About {data?.full_name} </p>

      <p className="font-medium text-lg mt-7 text-gray-700">About</p>
      <p className="text-gray-600 mt-3 text-justify leading-relaxed">
        {data?.about || "N/A"}
      </p>

      <p className="font-medium text-lg mt-7 text-gray-700">Writing Genre</p>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        {
          data?.genres.length === 0 && (
            <p className="text-gray-600">N/A</p>
          )
        }
        {
          data?.genres.map((genre: string) => (
            <p key={genre} className="border border-gray-300 px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-50">
              {genre}
            </p>
          ))
        }
       
      </div>

      <p className="font-medium text-lg mt-7 text-gray-700">Info</p>
      <div className="flex flex-col gap-3 mt-3 text-gray-700 text-sm">
        <div className="flex flex-row items-center gap-3">
          <MapPin className="size-4 text-gray-500" />
          <p>{data?.address || "N/A"}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Phone className="size-4 text-gray-500" />
          <p>{data?.phone || "N/A"}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Mail className="size-4 text-gray-500" />
          <a
            href={`mailto:${data?.email}`}
            className="text-blue-600 hover:underline"
          >
            {data?.email}
          </a>
        </div>
      </div>

      <p className="font-medium text-lg mt-7 text-gray-700">Socials</p>
      <div className="flex flex-row items-center gap-5 mt-3">
        {data?.facebook && <a href={data?.facebook} className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
          <LucideFacebook className="size-6 text-blue-700" />
        </a>}
        {data?.instagram && <a href={data?.instagram} className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
          <LucideInstagram className="size-6 text-pink-600" />
        </a>}
        {data?.youtube && <a href={data?.youtube} className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
          <LucideYoutube className="size-6 text-red-600" />
        </a>}
        {data?.twitter && <a href={data?.twitter} className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
          <LucideTwitter className="size-6 text-blue-600" />
        </a>}
      </div>
    </div>
  );
};

export default ProfileInfoCard;
