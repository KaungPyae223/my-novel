import React from "react";
import ReviewList from "../Review/ReviewList";
import ReviewWrite from "../Review/ReviewWrite";

const ReviewContainer = ({id, title}: {id: string; title: string}) => {
  return (
    <div className="space-y-6 ">
      <ReviewWrite novelID={id} title={title} />
      <ReviewList novelID={id} />
    </div>
  );
};

export default ReviewContainer;
