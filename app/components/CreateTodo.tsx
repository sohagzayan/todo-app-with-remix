import { Fragment, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//@ts-ignore
import { useAlert } from "react-alert";
import TimeImage from "../../public/assets/116375-times-up.gif";

export default function CreateTodo({ allTodo, setAllTodo }: any) {
  const alert = useAlert();
  const modalRef = useRef(null);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [date, setDate] = useState<string>(
    new Date().toISOString().substr(0, 10)
  );
  const [selected, setSelected] = useState<Date>();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Todo text is required")
      .max(60, "Todo Text Maximum you  can add 60 characters"),
  });

  let initialValues = {
    title: "",
  };

  const addTodoHandler = (values: { title: string }) => {
    const existingTodosForId = JSON.parse(localStorage.getItem("todo") || "[]");
    addNewTodo({
      id: existingTodosForId.length + 1,
      status: "progress",
      date: date,
      title: values.title,
    });
    initialValues.title = "";
  };

  const addNewTodo = (newTodo: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const newTodos = [newTodo, ...existingTodos];
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setAllTodo(newTodos);
  };

  // Close modal when user click out site
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target;
      if (target instanceof HTMLDivElement && target.contains(target)) {
        // handle the contains method here
        setShowDate(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDate]);

  return (
    <Fragment>
      <div className="">
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              addTodoHandler(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Fragment>
                <Form
                  // onSubmit={addTodoHandler}
                  className="w-full rounded bg-[#fff] px-4 py-4 shadow-lg shadow-[ rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;] relative"
                >
                  <div className=" md:flex items-center justify-between ">
                    <div className="w-full ">
                      <Field
                        onFocus={() => setShowDate(false)}
                        type="text"
                        placeholder="Add New Todo"
                        className="w-full outline-none "
                        name="title"
                        required
                      />
                      <span className="text-[#FE2D55] absolute -bottom-[26px] left-2">
                        <ErrorMessage name="title" />
                      </span>
                    </div>
                    <div className="flex items-center md:mt-0 mt-5 md:border-t-0 border-t md:pt-0 pt-2">
                      <span className="relative mr-2">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                          className="outline-[#006BED] text-[#777]"
                        />
                      </span>
                      <button
                        type="submit"
                        className="uppercase bg-[#006BED] text-[#fff] py-[6px] rounded-md px-4 shadow-lg shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] text-[13px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      date
                        ? "absolute -top-[30px] left-0 transform scale-100 transition-all delay-200 ease-in"
                        : "absolute -top-[30px] left-0 transform scale-0 transition-all delay-200 ease-out"
                    }
                  >
                    <span className="bg-[#006BED] text-[#fff] px-4 py-1 rounded">
                      {date && date}
                    </span>
                  </div>
                </Form>
              </Fragment>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
}
