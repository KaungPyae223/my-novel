import React from "react";
import AuthorPostCardHeader from "./AuthorPostCardHeader";
import Image from "next/image";
import AuthorPostCardLoveShare from "./AuthorPostCardLoveShare";

const AuthorPostCard = ({post}: {post: any}) => {
  return (
    <div className="py-5  px-6 border border-gray-200 bg-white rounded-lg shadow">
      <AuthorPostCardHeader post={post} />
      <p className="text-justify mt-5 text-gray-800">
        {post.content}
      </p>
      {
        post.image && (
          <Image
            src={post.image}
            alt="post image"
            width={500}
            height={500}
            className="w-full h-auto mb-5 rounded-lg object-cover"
          />
        )
      }
      <hr className="border-gray-200 my-3" />
      <AuthorPostCardLoveShare post={post} />
    </div>
  );
};

export default AuthorPostCard;
