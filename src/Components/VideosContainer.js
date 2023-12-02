import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Videocards, { AdVideoCard } from "./Videocards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.length === 0) return <Shimmer />;
  return (
    <div className="flex flex-wrap cursor-pointer">
      {videos[0] && <AdVideoCard cardInfo={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <Videocards key={video.id} cardInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
