import React from "react";

import PropTypes from "prop-types";

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

List.propTypes = {
  pastes: PropTypes.array,
  dispatch: PropTypes.func,
};

export default List;
