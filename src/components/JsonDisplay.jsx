// src/components/JsonDisplay.js
import React from "react";
import { useQuery } from "@tanstack/react-query";

const JsonDisplay = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["arthufrostData"],
    queryFn: () =>
      fetch("https://arthurfrost.qflo.co.za/php/getTimeline.php").then((res) =>
        res.json()
      ),
  });
  console.log(data);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data || !data.Body || data.Body.length === 0) {
    return "Data not available.";
  }

  if (!data || !data.Timeline || data.Timeline.length === 0) {
    return "Timeline data not available.";
  }

  // Accessing properties inside the "Timeline" array
  const timelineData = data.Timeline;

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: data.Body[0].About }}></div> */}
      {timelineData.map((item) => {
        // Construct the full URL for the image
        const imageUrl = `https://arthurfrost.qflo.co.za/${item.Image}`;
        const audioUrl = `https://arthurfrost.qflo.co.za/${item.Audio}`;
        return (
          <div
            key={item.Id}
            className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl px-4 mx-4 my-4"
          >
            {/* Display the image */}
            <img
              className="h-32 w-32 rounded-lg shadow-lg object-cover"
              src={imageUrl}
              alt="image"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {item.Title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                <p>{item.Episode}</p>
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                {item.Category}
              </p>
              {/* Display the audio element */}
              <audio controls>
                <source src={audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JsonDisplay;
