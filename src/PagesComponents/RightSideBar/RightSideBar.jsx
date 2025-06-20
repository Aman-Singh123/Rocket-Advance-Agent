import React from "react";
import "./RightSideBar.scss";

export default function RightSideBar({ heading, textData }) {
  return (
    <div className="rightSideBar whiteCard">
      {heading && <h1>{heading}</h1>}
      {textData.map((ele, index) => (
        <div key={index}>{ele.text}</div>
      ))}
    </div>
  );
}
