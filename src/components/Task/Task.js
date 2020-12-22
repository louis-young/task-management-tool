import React from "react";

import PropTypes from "prop-types";

import { DELETE } from "../../actions/types";

import icon from "../../assets/delete.svg";

import "./Task.scss";

const Task = ({ task, dispatch }) => {
  const { id, text } = task;

  const deleteTask = () => {
    dispatch({ type: DELETE, id });
  };

  return (
    <li className="task">
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
