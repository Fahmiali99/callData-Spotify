import React from "react";
import { Image } from "react-bootstrap";

const Navbar = ({ menu }: any) => {
  return (
    <div className=" d-flex justify-content-center">
      <div className="col-md-11 col-12">
        <div className="w-100 d-flex justify-content-end pt-4 pb-4 p-2">
          <a
            href="/"
            className="w-100 d-flex justify-content-start align-items-center text-white text-decoration-none"
          >
            <Image
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-simple-green-logo-icon-24.png"
              style={{ width: "50px" }} // className="logo-spotify"
            />

            <h3 className=" fw-bold px-2">Spotify</h3>
          </a>
          {menu}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
