import React, { useReducer, useEffect } from "react";

import { CREATE, DELETE, UPDATE } from "./actions/types";

import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./stylesheets/main.scss";

const init = () => {
  const tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

  return tasks;
};

const reducer = (tasks, action) => {
  const { type, task, updatedTask, id } = action;

  switch (type) {
    case CREATE:
      return [...tasks, task];
    case DELETE:
      return tasks.filter((task) => task.id !== id);
    case UPDATE:
      return tasks.map((task) => {
        if (task.id !== updatedTask.id) {
          return task;
        }

        return { ...task, text: updatedTask.text };
      });
    default:
      throw new Error();
  }
};

const initialTasks = [];

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks, init);

  useEffect(() => {
    localStorage.tasks = JSON.stringify(tasks);
  }, [tasks]);

  return (
    <main className="application container container--extra-small">
      <Form dispatch={dispatch} />
      <List tasks={tasks} dispatch={dispatch} />
    </main>
  );
};

export default App;
