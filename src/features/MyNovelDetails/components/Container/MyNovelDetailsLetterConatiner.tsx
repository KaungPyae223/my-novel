import React from "react";
import LetterList from "../Letters/LetterList";
import LetterSetting from "../Letters/LetterSetting";

const MyNovelDetailsLetterConatiner = ({id}:{id:string}) => {
  return (
    <div className="space-y-6">
      <LetterSetting novelID={id} />
      <LetterList novelID={id} />
    </div>
  );
};

export default MyNovelDetailsLetterConatiner;
