import React from "react";
import Card from "../../Components/Cover";
import Menu from "../../Components/Menu";
import Track from "../../Components/Track";
import data from "../../Data/single-sample";

function Home() {
  return (
    <div>
      <div className=" ">
        <Card
          title={data.album.name}
          artists={data.artists[0].name}
          images={data.album.images[0].url}
          url={data.album.external_urls.spotify}
          total_tracks={data.album.total_tracks}
        />
        <div className="">
          <Menu />
          <Track />
        </div>
      </div>
    </div>
  );
}

export default Home;
