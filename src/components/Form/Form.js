import React, { useState } from "react";

import "./Form.scss";

const Form = ({ createTask }) => {
  const [task, setTask] = useState("");

  const generateRandomNumber = () => {
    const range = {
      start: 1000,
      end: 1000000000,
    };

    const id = Math.floor(Math.random() * range.end) + range.start;

    return id;
  };

  const handleSubmit = (event) => {
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
        handleSubmit(event);
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
