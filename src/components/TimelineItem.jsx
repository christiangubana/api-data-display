// src/components/TimelineItem.js
import React from "react";

const TimelineItem = ({ item }) => {
  const imageUrl = `https://arthurfrost.qflo.co.za/${item.Image}`;
  const audioUrl = `https://arthurfrost.qflo.co.za/${item.Audio}`;
  const iconUrl = `https://arthurfrost.qflo.co.za/${item.Icon}`;

  return (
    <div className="flex bg-gradient-to-r from-green-900 to-blue-500 p-4 rounded-lg">
      <div className="flex flex-col w-2/3 pr-4 bg">
        <p className="text-md font-black mb-2 text-gray-50">{item.Title}</p>
        <p className="text-sm font-light text-gray-300">
          Category: {item.Category}
        </p>
        <p className="text-sm font-light text-gray-300">
          Create: {item.CreateDate}
        </p>
        <p className="text-sm font-light text-gray-300">
          Episode: {item.Episode}
        </p>
        <div className="flex h-full items-end">
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="w-1/4">
        <img
          className="w-full hover:animate-bounce rounded-lg"
          src={imageUrl}
          alt="image"
        />
        <img
          className="w-full hover:animate-bounce rounded-lg my-2"
          src={iconUrl}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default TimelineItem;
