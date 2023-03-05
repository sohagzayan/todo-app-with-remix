import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

export interface TodoType {
  id: number;
  title: string;
  status: string;
  date: string;
}

export default function Todos({ allTodo, setAllTodo }: any) {
  return (
    <div className="mt-6">
      <div>
        {allTodo &&
          allTodo?.map((data: TodoType, index: number) => (
            <SingleTodo key={index} data={data} />
          ))}
      </div>
    </div>
  );
}
