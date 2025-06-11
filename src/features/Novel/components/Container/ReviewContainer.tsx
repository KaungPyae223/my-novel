import React from "react";
import ReviewList from "../Review/ReviewList";
import ReviewWrite from "../Review/ReviewWrite";

const ReviewContainer = () => {
  return (
    <div className="space-y-6">
      <ReviewWrite />
      <ReviewList />
    </div>
  );
};

export default ReviewContainer;
