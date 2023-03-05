import { Fragment, useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoController from "./TodoController";
import Todos from "./Todos";

export default function Todo() {
  const [allTodo, setAllTodo] = useState([]);
  const [filter, setFilter] = useState<string>("all");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    setAllTodo(existingTodos);
  }, []);

  return (
    <Fragment>
      <div className=" lg:w-[1100px] md:w-[700px] w-[90%]  mx-auto mt-[30px] p-[10px]">
        <div className="mb-8">
          <h2 className="text-center text-[2rem] font-semibold text-[#186BED] flex items-center justify-center">
            <i className="ri-todo-line mr-4"></i> My Todo-s{" "}
          </h2>
        </div>
        <div className="border-b-2 border-[#CECFD0] pb-7">
          <CreateTodo allTodo={allTodo} setAllTodo={setAllTodo} />
        </div>
        <div>
          <TodoController
            {...{ filter, setFilter, sort, setSort, allTodo, setAllTodo }}
          />
        </div>
        <div>
          <Todos
            {...{ filter, setFilter, sort, setSort, allTodo, setAllTodo }}
          />
        </div>
      </div>
    </Fragment>
  );
}
