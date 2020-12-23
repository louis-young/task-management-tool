import React, { useState } from "react";

import PropTypes from "prop-types";

import { DELETE, UPDATE } from "../../actions/types";

import icon from "../../assets/delete.svg";

import "./Task.scss";

const Task = ({ task, dispatch }) => {
  const { id, text } = task;

  const [editing, setEditing] = useState(false);

  const [value, setValue] = useState(text);

  const deleteTask = () => {
    dispatch({ type: DELETE, id });
  };

  const updateTask = () => {
    const editedTask = {
      id,
      text: value,
    };

    dispatch({ type: UPDATE, editedTask });
  };

  const submit = (event) => {
    event.preventDefault();

    updateTask();

    setEditing(false);
  };

  return editing ? (
    <form className={editing ? "task task--editable" : "task"} onSubmit={submit} onBlur={submit}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="task__input"
        required
        autoFocus
      />
      <button className="task__delete">
        <img className="task__icon" src={icon} alt="Delete" />
      </button>
    </form>
  ) : (
    <li className="task" onClick={() => setEditing((editing) => !editing)}>
      <p className="task__text">{text}</p>
      <button onClick={deleteTask} className="task__delete">
        <img className="task__icon" src={icon} alt="Delete" />
      </button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
};

export default Task;
