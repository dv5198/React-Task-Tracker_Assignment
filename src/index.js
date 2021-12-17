import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import { store } from "./store";

function App() {
  return (
    <div
      style={{
        margin: "30px",
        width: "500px"
      }}
    >
      <TaskForm />
      <Tasks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
