import React from "react";
import LetterList from "../Letters/LetterList";
import LetterSetting from "../Letters/LetterSetting";

const MyNovelDetailsLetterConatiner = () => {
  return (
    <div className="space-y-6">
      <LetterSetting />
      <LetterList />
    </div>
  );
};

export default MyNovelDetailsLetterConatiner;
