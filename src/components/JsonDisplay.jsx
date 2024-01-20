// src/components/JsonDisplay.js
import React from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import BodyDisplay from "./BodyDisplay";
import TimelineDisplay from "./TimelineDisplay";
import Pagination from "./Pagination";
import { API_BASE_URL } from "../api";

const JsonDisplay = ({ page, setPage }) => {
  const itemsPerPage = 6;

  const { isFetching, error, data } = useQuery({
    queryKey: ["arthufrostData", page],
    queryFn: () =>
      fetch(`${API_BASE_URL}?page=${page}`).then((res) => res.json()),
  });

  if (isFetching) return <LoadingSpinner />;
  if (error) return "An error has occurred: " + error.message;

  if (!data || !data.Timeline || !data.Body || data.Body.length === 0) {
    return "Data not available.";
  }

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
