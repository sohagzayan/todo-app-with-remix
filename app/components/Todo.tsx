import { Fragment } from "react";
import CreateTodo from "./CreateTodo";
import TodoController from "./TodoController";
import Todos from "./Todos";

export default function Todo() {
  return (
    <Fragment>
      <div className=" lg:w-[1000px] md:w-[700px] w-[90%]  mx-auto mt-[30px] p-[10px]">
        <div className="mb-6">
          <h2 className="text-center text-[2rem] font-semibold text-[#186BED] flex items-center justify-center">
            <i className="ri-todo-line mr-4"></i> My Todo-s{" "}
          </h2>
        </div>
        <div className="border-b-2 border-[#CECFD0] pb-7">
          <CreateTodo />
        </div>
        <div>
          <TodoController />
        </div>
        <div>
          <Todos />
        </div>
      </div>
    </Fragment>
  );
}
