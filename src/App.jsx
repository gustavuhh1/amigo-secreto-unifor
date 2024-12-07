import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./components/home.jsx";
import { StrictMode } from "react";
import { Main } from './components/main.jsx'
import { Secret } from "./components/Secret.jsx";

const router = createBrowserRouter([
  {
    path: "/amigo-secreto-unifor/",
    element: <Home />,
  },
  {
    path: "/amigo-secreto-unifor/amigos",
    element: <Main />,
  },
  {
    path: "/amigo-secreto-unifor/secret",
    element: <Secret />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
