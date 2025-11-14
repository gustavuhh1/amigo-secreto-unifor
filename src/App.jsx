import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./components/home.jsx";
import { StrictMode } from "react";
import { Main } from './components/main.jsx'
import { Secret } from "./components/Secret.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/amigos",
    element: <Main />,
  },
  {
    path: "/amigos/secret",
    element: <Secret />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
