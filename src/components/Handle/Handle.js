import React from "react";

import PropTypes from "prop-types";

import "./Handle.scss";

const Handle = ({ handle }) => {
  return (
    <div className="handle" {...handle}>
      <button className="handle__button">
        <span className="handle__line"></span>
      </button>
    </div>
  );
};

Handle.propTypes = {
  handle: PropTypes.object,
};

export default Handle;
