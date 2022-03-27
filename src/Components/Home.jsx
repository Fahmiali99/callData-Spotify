import React from "react";
import { MyComponentFunc } from "./Page/MyComponentFunc";

function Home() {
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
      <MyComponentFunc />
      {/* <div className="w-100 d-flex justify-content-center text-center mt-5">
        <button
          className="btn btn-lg btn-block text-center btn-success"
          id="btnDisplay"
        >
          Get Show
        </button>
      </div> */}
    </div>
  );
}

export default Home;
