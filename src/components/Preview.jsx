import React from "react";
import "./css/Preview.css";

function Preview({ name, text}) {
  return (
    <>
      <div className="card">
        <div className="name">{name}</div>
        <div className="text">{text}</div>
      </div>
    </>
  );
}

export default Preview;
