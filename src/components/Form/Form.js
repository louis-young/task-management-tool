import React, { useState } from "react";

import "./Form.scss";

const Form = ({ tasks, createTask }) => {
  const [task, setTask] = useState("");

  const generateRandomNumber = () => {
    const range = {
      start: 1,
      end: 1000000,
    };

    const id = Math.floor(Math.random() * range.end) + range.start;

    const duplicate = tasks.some((task) => task.id === id);

    if (duplicate) {
      return generateRandomNumber();
    }

    return id;
  };

  const addTask = (event) => {
    event.preventDefault();

    createTask({
      id: generateRandomNumber(),
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
