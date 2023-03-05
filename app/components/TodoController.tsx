import React, { useState } from "react";
import Select from "react-select";
import { TodoType } from "./Todos";

export default function TodoController({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo,
}: any) {
  const handleFiltering = (e: any) => {
    // setFilter(e.target.value);
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    if (e.target.value === "completed") {
      const todo = existingTodos.filter(
        (t: TodoType) => t.status === "completed"
      );
      setAllTodo(todo);
    } else if (e.target.value === "progress") {
      const todo = existingTodos.filter(
        (t: TodoType) => t.status === "progress"
      );
      setAllTodo(todo);
    } else {
      setAllTodo(existingTodos);
    }
  };

  const handleSort = (e: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    if (e.target.value === "-1") {
      const sorted = existingTodos.sort((a: any, b: any) => {
        //@ts-ignore
        return new Date(a.date) - new Date(b.date);
      });
      setAllTodo(sorted);
    } else if (e.target.value === "1") {
      const sorted = existingTodos.sort((a: any, b: any) => {
        //@ts-ignore
        return new Date(b.date) - new Date(a.date);
      });
      setAllTodo(sorted);
    } else {
      setAllTodo(existingTodos);
    }
  };

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
              onChange={handleFiltering}
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
              onChange={handleSort}
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
