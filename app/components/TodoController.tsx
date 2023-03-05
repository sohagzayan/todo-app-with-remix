import React, { useState } from "react";
import Select from "react-select";

// interface FilterType {
//   value: string;
//   label: string;
// }

export default function TodoController() {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");
  const [sort, setSort] = useState<string>("");

  return (
    <div className="flex justify-end mt-5">
      <div className="flex items-center">
        <div className="flex mr-5  items-center text-[#4F4F4F] text-[14px]">
          <h4 className="mr-3">Filter</h4>
          <div>
            <select
              className="w-[100px] md:w-[150px] p-1 rounded border border-[#BDBDBD] outline-[#006BED]"
              name="filter"
              id=""
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Todo</option>
              <option value="completed">Completed</option>
              <option value="progress">Progress</option>
            </select>
          </div>
        </div>
        <div className="flex  items-center text-[#4F4F4F] text-[14px]">
          <h4 className="mr-3">Sort</h4>
          <div>
            <select
              className=" w-[100px] md:w-[150px] p-1 rounded border border-[#BDBDBD] outline-[#006BED]"
              name="filter"
              id=""
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="-1">Newest</option>
              <option value="1">Oldest</option>
            </select>
          </div>
          <span>
            <i className="ri-sort-desc text-[22px] text-[#186bed] ml-1"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
