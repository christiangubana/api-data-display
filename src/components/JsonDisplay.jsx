// src/components/JsonDisplay.js
import React from "react";
import { useQuery } from "@tanstack/react-query";

const JsonDisplay = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
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
  return (
    <div>
      {/* Render JSON data*/}
      <div dangerouslySetInnerHTML={{ __html: data.Body[0].About }}></div>
    </div>
  );
};

export default JsonDisplay;
