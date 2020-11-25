import React, { useState } from "react";

import "./Form.scss";

const Form = ({ createTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    createTask(task);

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
