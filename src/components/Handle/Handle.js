import React from "react";

import PropTypes from "prop-types";

import "./Handle.scss";

const Handle = ({ handle }) => {
  return (
    <button className="handle" {...handle}>
      <span className="handle__line"></span>
    </button>
  );
};

Handle.propTypes = {
  handle: PropTypes.object,
};

export default Handle;
