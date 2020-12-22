import React from "react";

import PropTypes from "prop-types";

import { DELETE } from "../../actions/types";

import "./Paste.scss";

const Paste = ({ paste, dispatch }) => {
  const { id, text } = paste;

  const deletePaste = () => {
    dispatch({ type: DELETE, id });
  };

  return <li onClick={deletePaste}>{text}</li>;
};

Paste.propTypes = {
  paste: PropTypes.object,
  dispatch: PropTypes.func,
};

export default Paste;
