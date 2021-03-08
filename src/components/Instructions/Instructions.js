import React from "react";

const Instructions = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
      <p>{children}</p>
    </div>
  );
};

export default Instructions;
