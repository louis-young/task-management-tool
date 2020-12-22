import React from "react";

import types from "../../actions/types";

import "./Paste.scss";

const Paste = ({ paste, dispatch }) => {
  const { id, text } = paste;

  const deletePaste = () => {
    dispatch({ type: types.DELETE, id });
  };

  return <li onClick={deletePaste}>{text}</li>;
};

export default Paste;
