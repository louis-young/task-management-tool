import React from "react";

import PropTypes from "prop-types";

import Task from "../Task/Task";

import "./List.scss";

const List = ({ tasks, dispatch }) => {
  if (!tasks) {
    return null;
  }

  return (
    <section>
      <ul className="list">
        {tasks.map((task) => (
          <Task task={task} dispatch={dispatch} key={task.id} />
        ))}
      </ul>
    </section>
  );
};

List.propTypes = {
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
};

export default List;
