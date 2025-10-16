import React from "react";
import ReviewList from "../Review/ReviewList";
import ReviewWrite from "../Review/ReviewWrite";

const ReviewContainer = ({id}: {id: string}) => {
  return (
    <div className="space-y-6 ">
      <ReviewWrite novelID={id} />
      <ReviewList novelID={id} />
    </div>
  );
};

export default ReviewContainer;
