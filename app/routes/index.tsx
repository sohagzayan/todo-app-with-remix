import { Fragment, Suspense } from "react";
import Todo from "~/components/Todo";

export default function HomePage() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Todo />
      </Suspense>
    </Fragment>
  );
}
