import { Fragment, Suspense } from "react";
import Todo from "~/components/Todo";
//@ts-ignore
import { transitions, positions, Provider as AlertProvider } from "react-alert";
//@ts-ignore
import AlertTemplate from "react-alert-template-basic";

export default function HomePage() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Todo />
        </AlertProvider>
      </Suspense>
    </Fragment>
  );
}
