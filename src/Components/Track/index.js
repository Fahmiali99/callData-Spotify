import React from "react";

const Track = ({ items }) => {
  return (
    <div>
      <div className="p-2">
        <div className="d-flex align-items-center w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="grid-column-song  ">{items}</div>
        </div>
      </div>
    </div>
  );
};

export default Track;
