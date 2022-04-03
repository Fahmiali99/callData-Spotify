import React from "react";

const Cover = ({ title, artists, images, total_tracks }) => {
  return (
    <div className="">
      <div className=" ">
        <div>
          <img
            className="max-w-[250px] drop-shadow-2xl"
            src={images}
            alt="Album Cover"
          />
        </div>
        <div>
          <h1 className="font-bold ">PLAYLIST</h1>
          <h1 className="">{title}</h1>
          <div className="">
            <p className="font-bold">{artists}</p>
            <span>&#8226;</span>
            <p className="font-thin">{total_tracks} songs</p>
            <span>&#8226;</span>
            <p className="font-thin">1 hr 19 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
