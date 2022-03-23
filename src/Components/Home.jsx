import React from "react";
import data from "./data";

function Home() {
  const api_url = data.album;
  console.log(api_url.images[0]);
  console.log(api_url.artists[0].name);

  // var btnShow = document.getElementById("btnDisplay");

  // btnShow.onclick = function () {
  //   var ds = document.getElementById("Show");
  //   if (ds.style.display !== "none") {
  //     ds.style.display = "none";
  //   } else {
  //     ds.style.display = "block";
  //   }
  // };

  return (
    <div className="callDataPage ">
      {/* <div className="w-100 d-flex justify-content-center text-center mt-5">
        <button
          className="btn btn-lg btn-block text-center btn-success"
          id="btnDisplay"
        >
          Get Show
        </button>
      </div> */}

      <div className="w-100 d-flex justify-content-center mt-5 mb-5 ">
        <div className="row card col-11 mainCall Show " id="Show">
          <div className="col mt-5 mb-3">
            <div className="container ">
              <div className="w-100 d-flex justify-content-center  ">
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
              <h5>
                <b>{api_url.artists[0].name}</b>
              </h5>
              <h6>{api_url.release_date}</h6>
              <h6>
                {api_url.type} {api_url.total_tracks}
              </h6>
              <a href={api_url.uri}>
                <button className="btn btn-success    mt-3 shadow p-2 col-12 col-sm-2 ">
                  Select
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
