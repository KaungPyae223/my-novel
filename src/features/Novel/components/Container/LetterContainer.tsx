import React from "react";
import LetterAlert from "../Letter/LetterAlert";
import WriteFanLetter from "../Letter/WriteFanLetter";
import LetterHistory from "../Letter/LetterHistory";

const LetterContainer = ({ id, title }: { id: string; title: string }) => {
  return (
    <div className="space-y-6 ">
      <LetterAlert  />
      <WriteFanLetter novelID={id} title={title} />
      <LetterHistory />
    </div>
  );
};

export default LetterContainer;
