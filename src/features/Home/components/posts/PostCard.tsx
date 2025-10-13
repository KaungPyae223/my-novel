import React from "react";
import PostLoveShare from "./PostLoveShare";
import PostCardHeader from "./PostCardHeader";
import PostNovelReference from "./PostNovelReference";
import PostView from "./PostView";
import Image from "next/image";

const PostCard = ({ post, setOpenComments }: { post: any, setOpenComments: React.Dispatch<React.SetStateAction<string>> }) => {

  const [loveCount, setLoveCount] = React.useState<number>(post.love_count);

 
  return (
    <div>
      <div className="py-5 px-6 bg-white rounded-lg shadow">
        <PostCardHeader post={post} />
        <p className="text-justify text-gray-800 my-5">{post.content}</p>
        {post.image && (
          <Image
            src={post.image}
            alt={"post image"}
            width={500}
            height={500}
            className="w-full h-auto mb-5 rounded-lg object-cover"
          />
        )}
        <PostNovelReference novel={post.novel} />
        <PostView comment_count={post.comment_count} loveCount={loveCount} />
        <hr className="border-gray-200 my-3" />
        <PostLoveShare
          id={post.id}
          setLoveCount={setLoveCount}
          already_loved={post.already_loved}
          setOpenComments={setOpenComments}
        />
      </div>
    </div>
  );
};

export default PostCard;
