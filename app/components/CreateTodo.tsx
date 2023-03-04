import { Fragment, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

export default function CreateTodo() {
  const [showDate, setShowDate] = useState<boolean>(false);
  const [selected, setSelected] = useState<Date>();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <Fragment>
      <div>
        <div>
          <form className="w-full bg-[#fff] px-4 py-4 shadow-lg shadow-[ rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;]">
            <div className="flex items-center justify-between ">
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="Add new"
                  className="w-full outline-none border-none"
                />
              </div>
              <div className="flex items-center">
                <span className="relative mr-2">
                  {" "}
                  <i
                    onClick={() => setShowDate((prev) => !prev)}
                    className="ri-calendar-2-line cursor-pointer text-[22px] text-[#006BED]"
                  ></i>
                  <div
                    className={
                      showDate
                        ? "absolute w-[250px] top-[25px]  right-0 p-3  bg-white shadow-lg  transform translate-y-[0px] opacity-1  pointer-events-auto transition-all delay-200 ease-in"
                        : "absolute w-[250px] top-[25px]  right-0 p-3  bg-white shadow-lg pointer-events-auto  transform translate-y-[30px] opacity-0  transition-all delay-200 ease-out"
                    }
                  >
                    <DayPicker
                      className=""
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      footer={footer}
                    />
                  </div>
                  {/* <input type="date" /> */}
                </span>
                <button className="uppercase bg-[#006BED] text-[#fff] py-[6px] rounded-md px-4 shadow-lg shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] text-[13px]">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
