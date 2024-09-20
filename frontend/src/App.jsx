import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Router />
    <Toaster />
  </>
  // </React.StrictMode>
);
