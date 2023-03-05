import React from "react";
import { TodoType } from "./Todos";

export default function SingleTodo(props: { data: TodoType }) {
  const { id, title, status, date } = props.data;
  return (
    <div className="mb-5">
      <div className=" md:flex items-center justify-between ">
        <div className="flex w-[100%] md:max-w-[80%] items-center">
          <input
            id="title"
            type="checkbox"
            className="mr-4 min-w-[18px] min-h-[18px]"
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
            <span>
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
