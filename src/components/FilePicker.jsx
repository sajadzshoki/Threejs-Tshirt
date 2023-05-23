import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col ">
        <input
        className="filepicker-label"
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <lable htmlFor="file-upload" className="filepicker-label">
          Upload Image
        </lable>
        
        <p className="mt-2 text-gray-600 text-xs truncate">
          {file === "" ? "No File Selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <CustomButton
          type="outline"
          title="Logo"
          customStyles="text-xs"
          handleClick={() => readFile("logo")}
        />
        <CustomButton
          type="filled"
          title="Full"
          customStyles="text-xs"
          handleClick={() => readFile("full")}
        />
      </div>
    </div>
  );
};

export default FilePicker;
