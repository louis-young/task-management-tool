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

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  return (
    <main className="application">
      <Form tasks={tasks} createTask={createTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
};

export default App;
