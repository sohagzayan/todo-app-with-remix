import React, { useState } from "react";
import Select from "react-select";

// interface FilterType {
//   value: string;
//   label: string;
// }

export default function TodoController() {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");
  const [selectedFilter, setSelectedFilter] = useState<any>(null);
  const [selectedSort, setSelectedSort] = useState<any>(null);

  const optionsFilter = [
    { value: "all todo", label: "All Todo" },
    { value: "completed", label: "Completed" },
    { value: "progress", label: "Progress" },
  ];

  const optionsSort = [
    { value: "default", label: "Default" },
    { value: "-1", label: "Newest" },
    { value: "1", label: "Oldest" },
  ];

  return (
    <div className="flex justify-end mt-5">
      <div className="flex items-center">
        <div className="flex mr-5  items-center text-[#4F4F4F] text-[14px]">
          <h4 className="mr-3">Filter</h4>
          <Select
            value={selectedFilter}
            onChange={setSelectedFilter}
            options={optionsFilter}
          />
        </div>
        <div className="flex  items-center text-[#4F4F4F] text-[14px]">
          <h4 className="mr-3">Sort</h4>
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
            options={optionsSort}
          />
          <span>
            <i className="ri-sort-desc text-[22px] text-[#186bed] ml-1"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
