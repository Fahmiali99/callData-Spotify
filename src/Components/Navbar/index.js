import React from "react";

const Navbar = ({ menu }) => {
  return (
    <div className=" ">
      <div className="">
        <a href="/" className="text-dark text-decoration-none">
          Spotify
        </a>
      </div>
      <div>{menu}</div>
    </div>
  );
};

export default Navbar;
