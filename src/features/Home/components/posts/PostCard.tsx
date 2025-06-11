import React from "react";
import PostLoveShare from "./PostLoveShare";
import PostCardHeader from "./PostCardHeader";
import PostNovelReference from "./PostNovelReference";
import PostView from "./PostView";

const PostCard = () => {
  return (
    <div>
      <div className="py-5 px-6 bg-white rounded-lg shadow">
        <PostCardHeader />
        <p className="text-justify text-gray-800 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus veritatis commodi qui voluptate vitae excepturi! Corrupti ut
          ipsa esse incidunt, impedit, repellat tempore molestias mollitia
          maiores quia animi modi aperiam deleniti aliquam inventore. Deleniti
          numquam illum omnis, porro esse sit velit ipsa natus odio non tempore
          quisquam architecto saepe.
        </p>
        <PostNovelReference />
        <PostView />    
        <hr className="border-gray-200 my-3" />
        <PostLoveShare />
      </div>
    </div>
  );
};

export default PostCard;
