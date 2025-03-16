import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToDoApp } from "./ToDoApp.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  </StrictMode>
);
