import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

export interface TodoType {
  id: number;
  title: string;
  status: string;
  date: string;
}

export default function Todos({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo,
}: any) {
  const [todo, setTodo] = useState([]);
  console.log("filter", todo);

  // useEffect(() => {
  //   // for Filter todo
  //   if (filter === "completed") {
  //     const todo = allTodo.filter((t: TodoType) => t.status === "completed");
  //     setTodo(todo);
  //   } else if (filter === "progress") {
  //     const todo = allTodo.filter((t: TodoType) => t.status === "progress");
  //     setTodo(todo);
  //   } else {
  //     setTodo(allTodo);
  //   }
  // }, [allTodo, filter]);

  // useEffect(() => {
  //   // for sort todo
  // if (sort === "-1") {
  //   const sorted = todo.sort((a: any, b: any) => a.date - b.date);
  //   setTodo(sorted);
  // } else if (sort === "1") {
  //   const sorted = todo.sort((a: any, b: any) => b.date - a.date);
  //   setTodo(sorted);
  // } else {
  //   setTodo(allTodo);
  // }
  // }, [allTodo, sort, todo]);

  return (
    <div className="mt-6">
      <div>
        {allTodo &&
          allTodo?.map((data: TodoType, index: number) => (
            <SingleTodo key={index} data={data} setAllTodo={setAllTodo} />
          ))}
      </div>
    </div>
  );
}
