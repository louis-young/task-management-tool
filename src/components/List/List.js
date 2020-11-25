import React from "react";

import "./List.scss";

const List = ({ tasks }) => {
  console.log(tasks);

  return <section>{tasks ? tasks.map((task) => <li key={task}>{task}</li>) : null}</section>;
};

export default List;
