import React from "react";
import CustomButton from "./CustomButton";
const TextGenerator = ({ text, setText, getText }) => {
  return (
    <div className="textgenerator-container">
      <div>
        <input
          className="aipicker-textarea"
          placeholder="Add Text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength="12"
        />
        <small className="text-gray-500 text-xs">limit: 12 chars</small>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <CustomButton
          type="outline"
          title="Logo"
          customStyles="text-xs"
          handleClick={() => getText("logo")}
          // handleClick={console.log(text)}
        />
        <CustomButton
          type="filled"
          title="Full"
          customStyles="text-xs"
          handleClick={() => getText("full")}
        />
      </div>
    </div>
  );
};

export default TextGenerator;
