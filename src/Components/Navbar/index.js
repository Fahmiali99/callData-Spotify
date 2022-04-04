import React from "react";

const Navbar = ({ menu }) => {
  return (
    <div className=" d-flex justify-content-center">
      <div className="col-md-11 col-12">
        <div className="w-100 d-flex justify-content-end ">
          <a
            href="/"
            className="w-100 d-flex justify-content-start text-white text-decoration-none"
          >
            <h3 className=" fw-bold">Spotify</h3>
          </a>
          {menu}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
