// src/components/BodyDisplay.js
import React from "react";

const BodyDisplay = ({ body }) => {
  return (
    <div
      className="p-4 text-slate-600 text-sm"
      dangerouslySetInnerHTML={{ __html: body }}
    ></div>
  );
};

export default BodyDisplay;
