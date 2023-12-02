import React from "react";

const Videocards = ({ cardInfo }) => {
  return (
    <div className="p-2 w-[16rem] m-2 shadow-lg h-[350px]">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={cardInfo.snippet.thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{cardInfo.snippet.title}</li>
        <li>{cardInfo.snippet.channelTitle}</li>
        <li>{cardInfo.statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ cardInfo }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <Videocards cardInfo={cardInfo} />
    </div>
  );
};

export default Videocards;
