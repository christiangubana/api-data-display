// src/components/JsonDisplay.js
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import BodyDisplay from "./BodyDisplay";
import TimelineDisplay from "./TimelineDisplay";
import Pagination from "./Pagination";
import { API_BASE_URL } from "../api";

const JsonDisplay = () => {
  const itemsPerPage = 6;

  // Use local state to manage the current page
  const [page, setPage] = useState(1);

  const { isFetching, error, data } = useQuery({
    queryKey: ["arthufrostData", page, itemsPerPage],
    queryFn: () =>
      fetch(`${API_BASE_URL}?page=${page}&itemsPerPage=${itemsPerPage}`).then(
        (res) => res.json()
      ),
    staleTime: 60000, //Control how long the data can remain before a new fetch is triggered. (60 seconds)
  });

  if (isFetching) return <LoadingSpinner />;
  if (error) return "An error has occurred: " + error.message;

  if (!data || !data.Timeline || !data.Body || data.Body.length === 0) {
    return "Data not available.";
  }
  console.log(itemsPerPage);
  return (
    <div className="container">
      <BodyDisplay body={data.Body[0].About} />
      <TimelineDisplay
        data={data.Timeline}
        itemsPerPage={itemsPerPage}
        page={page}
      />
      <Pagination
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        isPrevDisabled={isFetching || page === 1}
        isNextDisabled={
          isFetching ||
          (page - 1) * itemsPerPage + itemsPerPage >= data.Timeline.length
        }
      />
    </div>
  );
};

export default JsonDisplay;
