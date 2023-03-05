import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { TodoType } from "./Todos";
//@ts-ignore
import { useAlert } from "react-alert";

export default function SingleTodo(props: {
  data: TodoType;
  setAllTodo: React.Dispatch<React.SetStateAction<never[]>>;
}) {
  const [check, setCheck] = useState(false);
  const { id, title, status, date } = props.data;
  const { setAllTodo } = props;
  const alert = useAlert();

  const handleDeleteTodo = (id: number) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const exit = existingTodos.filter((t: TodoType) => t.id !== id);
    localStorage.setItem("todo", JSON.stringify(exit));
    setAllTodo(exit);
    alert.success("Delete Todo Successfully complete");
  };

  useEffect(() => {
    if (status === "progress") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [status]);

  const handleTodoUpdate = (updatedTodo: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const index = existingTodos.findIndex(
      (todo: any) => todo.id === updatedTodo.id
    );
    if (index === -1) {
      alert.error("Not Found Todo ");
      return;
    }
    const newTodos = [
      ...existingTodos.slice(0, index),
      updatedTodo,
      ...existingTodos.slice(index + 1),
    ];
    // Update the todos in localStorage
    localStorage.setItem("todo", JSON.stringify(newTodos));
    //@ts-ignore
    setAllTodo(newTodos);
  };

  const handleCheckboxChange = (e: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const exits = existingTodos.find((t: any) => t.id === id);
    const updatedTodo = {
      ...exits,
      status: status === "completed" ? "progress" : "completed",
    };
    handleTodoUpdate(updatedTodo);
  };

  return (
    <div className="mb-5">
      <div className=" md:flex items-center justify-between ">
        <div className="flex w-[100%] md:max-w-[80%] items-center">
          <input
            id="title"
            title="Update Status"
            type="checkbox"
            checked={check}
            className="mr-4 min-w-[18px] min-h-[18px] cursor-pointer"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="title" className="text-[18px] text-[#4F4F4F]  ">
            {title}
          </label>
        </div>
        <div className="flex  items-end flex-col">
          <div>
            <span>
              <i className="ri-pencil-line text-[20px] text-[#1EC1EB] mr-3"></i>
            </span>
            <span onClick={() => handleDeleteTodo(id)}>
              <i className="ri-delete-bin-line text-[20px] text-[#FE2D55]"></i>
            </span>
          </div>
          <div className="flex items-center text-[13px] ">
            <span>
              <i className="ri-information-line"></i>
            </span>
            <span>28th Jun 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
