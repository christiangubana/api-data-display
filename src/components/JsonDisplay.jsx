// src/components/JsonDisplay.js
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

const JsonDisplay = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const { isFetching, error, data } = useQuery({
    queryKey: ["arthufrostData", page],
    queryFn: () =>
      fetch(
        `https://arthurfrost.qflo.co.za/php/getTimeline.php?page=${page}`
      ).then((res) => res.json()),
  });

  if (isFetching) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  if (!data || !data.Timeline) {
    return "Data not available.";
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.Timeline.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const isNextDisabled = isFetching || endIndex >= data.Timeline.length;
  const isPrevDisabled = isFetching || page === 1;

  //Accessing Body data
  if (!data || !data.Body || data.Body.length === 0) {
    return "Data not available.";
  }

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: data.Body[0].About }}></div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedItems.map((item) => {
          const imageUrl = `https://arthurfrost.qflo.co.za/${item.Image}`;
          const audioUrl = `https://arthurfrost.qflo.co.za/${item.Audio}`;
          const iconUrl = `https://arthurfrost.qflo.co.za/${item.Icon}`;
          return (
            <div className="flex bg-purple-700 p-4 rounded-lg">
              <div className="flex flex-col w-2/3 pr-4 bg">
                <p className="text-md font-black mb-2 text-gray-50">
                  Title: {item.Title}
                </p>
                <p className="text-lg font-light leading-5 text-gray-300">
                  Category: {item.Category}
                </p>
                <p className="text-lg font-light leading-5 text-gray-300">
                  Create: {item.CreateDate}
                </p>
                <p className="text-lg font-light leading-5 text-gray-300">
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
        })}
      </div>
      <div className="mt-4">
        <button
          className="mx-2 bg-sky-500 disabled:opacity-20"
          tabIndex="-1"
          onClick={handlePrevPage}
          disabled={isPrevDisabled}
        >
          Previous
        </button>
        <button
          className="bg-sky-500 disabled:opacity-20"
          onClick={handleNextPage}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default JsonDisplay;
