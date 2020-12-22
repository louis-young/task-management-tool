import React from "react";

import { DELETE } from "../../actions/types";

import "./Paste.scss";

const Paste = ({ paste, dispatch }) => {
  const { id, text } = paste;

  const deletePaste = () => {
    dispatch({ type: DELETE, id });
  };

  return <li onClick={deletePaste}>{text}</li>;
};

export default Paste;
