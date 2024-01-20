// src/components/TimelineDisplay.js
import React from "react";
import TimelineItem from "./TimelineItem";

const TimelineDisplay = ({ data, itemsPerPage, page }) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedItems.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TimelineDisplay;
