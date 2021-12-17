import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";

const TaskForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h1>Task Tracker</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input.value);
          dispatch(addTask(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default connect()(TaskForm);
