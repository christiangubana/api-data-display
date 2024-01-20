// src/components/Pagination.js
import React from "react";

const Pagination = ({ page, onPageChange, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="mt-4">
      <button
        className="mx-2 bg-sky-500 disabled:opacity-20"
        tabIndex="-1"
        onClick={() => onPageChange(page - 1)}
        disabled={isPrevDisabled}
      >
        Previous
      </button>
      <button
        className="bg-sky-500 disabled:opacity-20"
        onClick={() => onPageChange(page + 1)}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
