import React from "react";
import SingleTodo from "./SingleTodo";

export interface TodoType {
  id: number;
  title: string;
  status: string;
  date: string;
}

export default function Todos() {
  const todosData = [
    {
      id: 1,
      title: "Renew car insurance",
      status: "progress",
      date: "2022-03-06",
    },
    {
      id: 2,
      title:
        "Renew car insurance Renew car insurance Renew car insurance Renew car insurance Renew car insurance Renew car insurance Renew car insurance Renew car insurance",
      status: "progress",
      date: "2022-03-06",
    },
    {
      id: 3,
      title: "Renew car insurance",
      status: "progress",
      date: "2022-03-06",
    },
  ];
  return (
    <div className="mt-6">
      <div>
        {todosData.map((data) => (
          <SingleTodo key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
