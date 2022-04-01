import React, { useState } from "react";

const FileData = ({ id, url, name, uri, title, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-md-4 mb-md-4 mt-2 mb-2">
      <div className=" card col-md-4  mainCall Show  " id="Show">
        <div className="col mt-5 ">
          <div className="container d-flex justify-content-center text-center">
            <div className="w-100 justify-content-center rounded-circle ">
              <img src={url} className="gambar" width="80%" />
              <div className="col  mb-5 pt-4">
                <div className="container text-center"></div>
                <h3>
                  <b>{title}</b>
                </h3>
                <h5>
                  <b>{name}</b>
                </h5>

                <button
                  className="btn btn-success    mt-3 shadow p-2 col-12 col-sm-3  "
                  onClick={handleToggleSelect}
                >
                  <span>{isSelected}</span>
                  {isSelected ? "Deselect" : "Select"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileData;
