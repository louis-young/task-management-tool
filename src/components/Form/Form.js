import React, { useState } from "react";

import "./Form.scss";

const Form = ({ createTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    createTask(task);
  };

  const handleChange = event => {
    setTask(event.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={event => {
        handleSubmit(event);
      }}
    >
      <input
        className="form__input"
        onChange={event => {
          handleChange(event);
        }}
      />
      <button className="form__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
