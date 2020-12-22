import React from "react";

import Paste from "../Paste/Paste";

import "./List.scss";

const List = ({ pastes, dispatch }) => {
  if (!pastes) {
    return null;
  }

  return (
    <section>
      {pastes.map((paste) => (
        <Paste paste={paste} dispatch={dispatch} key={paste.id} />
      ))}
    </section>
  );
};

export default List;
