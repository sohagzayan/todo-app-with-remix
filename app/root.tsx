import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import "react-toastify/dist/ReactToastify.css";

import stylesheet from "./tailwind.css";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
  },
];
