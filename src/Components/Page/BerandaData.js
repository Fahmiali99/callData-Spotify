import React from "react";
import data from "../Data/data";
import FileData from "../FileData";

function BerandaData() {
  // const DataAray = data.map(({ id, name, url, uri }) => ({
  //   [id]: name,
  //   [url]: uri,
  // }));

  // console.log(DataAray);

  return (
    <div className="color-album">
      <h3 className="text-center pt-3">
        <b>ALL ALBUM</b>
      </h3>
      {data.map((dataItem) => (
        <div key={dataItem.id} className=" row-cols-md-3 container-fluid">
          <div className="w-100 d-flex justify-content-center col-md-11 align-items-center">
            <FileData
              url={dataItem.album.images[0].url}
              title={dataItem.album.name}
              name={dataItem.album.artists[0].name}
              durasi={dataItem.duration_ms}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BerandaData;
