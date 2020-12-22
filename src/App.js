import React, { useReducer, useEffect } from "react";

import { CREATE, DELETE } from "./actions/types";

import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./stylesheets/main.scss";

const reducer = (tasks, action) => {
  const { type, task, id } = action;

  switch (type) {
    case CREATE:
      return [...tasks, task];
    case DELETE:
      return tasks.filter((task) => task.id !== id);
    default:
      throw new Error(`Unexpected action.`);
  }
};

const initialTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  useEffect(() => {
    localStorage.tasks = JSON.stringify(tasks);
  }, [tasks]);

  return (
    <main className="application">
      <Form dispatch={dispatch} />
      <List tasks={tasks} dispatch={dispatch} />
    </main>
  );
};

export default App;
