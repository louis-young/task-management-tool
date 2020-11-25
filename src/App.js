import React, { useState, useEffect } from "react";

import "./stylesheets/main.scss";

import Form from "./components/Form/Form";
import List from "./components/List/List";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!localStorage.tasks) {
      return;
    }

    const savedTasks = JSON.parse(localStorage.tasks);

    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.tasks = JSON.stringify(tasks);
  }, [tasks]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Form createTask={createTask} />
      <List tasks={tasks} />
    </div>
  );
};

export default App;
