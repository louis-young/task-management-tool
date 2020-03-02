import React, { useState } from "react";

import "./stylesheets/main.scss";

import Form from "./components/Form/Form";

const App = () => {
  const [tasks, setTasks] = useState(null);

  const createTask = event => {
    event.preventDefault();

    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Form createTask={createTask} />
    </div>
  );
};

export default App;
