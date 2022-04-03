import React, { useState } from "react";

const List = ({
  index,
  id,
  title,
  artists,
  album,
  duration,
  image,
  buttonSelect,
  textSelect,
}) => {
  const setSelect = () => {
    buttonSelect();
  };

  return (
    <tr key={id} className=" ">
      <td className="px-2">{index}</td>
      <td className="">
        <img className="" src={image} />
        <div className="">
          <h3 className="text-dark">{title}</h3>
          <p>{artists}</p>
        </div>
      </td>
      <td className="truncate px-5">{album}</td>
      <td>{duration}</td>
      <td>
        {textSelect ? (
          <button className="" onClick={setSelect}>
            Selected
          </button>
        ) : (
          <button className="" onClick={setSelect}>
            Select
          </button>
        )}
      </td>
    </tr>
  );
};

export default List;
