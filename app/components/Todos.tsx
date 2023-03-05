import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import NotFoundImage from "../../public/assets/notfound.gif";

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
  return (
    <div className="mt-10">
      <div>
        {allTodo.length ? (
          allTodo &&
          allTodo?.map((data: TodoType, index: number) => (
            <SingleTodo key={index} data={data} setAllTodo={setAllTodo} />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center pt-8">
            <img
              width={200}
              height={200}
              src={NotFoundImage}
              className="rounded-full"
              alt="not found images"
            />
            <h2 className="mt-2 text-[22px]">Don't Create Yet Any Todo </h2>
          </div>
        )}
      </div>
    </div>
  );
}
