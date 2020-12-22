import React from "react";

import PropTypes from "prop-types";

import { DELETE } from "../../actions/types";

import "./Task.scss";

const Task = ({ task, dispatch }) => {
  const { id, text } = task;

  const deleteTask = () => {
    dispatch({ type: DELETE, id });
  };

  return <li onClick={deleteTask}>{text}</li>;
};

Task.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
};

export default Task;
