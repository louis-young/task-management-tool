import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./Form.scss";

const Form = ({ tasks, createTask }) => {
  const [task, setTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();

    createTask({
      id: uuidv4(),
      text: task,
    });

    setTask("");
  };

  return (
    <form
      className="form"
      onSubmit={(event) => {
        addTask(event);
      }}
    >
      <input
        className="form__input"
        onChange={(event) => {
          setTask(event.target.value);
        }}
        value={task}
      />
      <button className="form__submit" type="submit">
        Save
      </button>
    </form>
  );
};

export default Form;
