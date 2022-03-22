import React from "react";
import data from "./data";

function Home() {
  const api_url = data.album;

  console.log(api_url.images[0]);

  return (
    <div className="  ">
      <div className="w-100 d-flex justify-content-center mt-5 mb-5">
        <div className="row card col-11 ">
          <div className="col mt-5 mb-3">
            <div className="container ">
              <div className="w-100 d-flex justify-content-center ">
                <img
                  className=" rounded-circle gambar"
                  src={api_url.images[0].url}
                  id="imge"
                  alt=""
                  width="30%"
                />
              </div>
            </div>
          </div>
          <div className="col  mb-5">
            <div className="container text-center">
              <h3>
                <b>{api_url.name}</b>
              </h3>
              <h5>{api_url.release_date}</h5>
              <h5>{api_url.release_date_precision}</h5>
              <h5>{api_url.total_tracks}</h5>
              <h5>{api_url.type}</h5>
              <h5>{api_url.uri}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
