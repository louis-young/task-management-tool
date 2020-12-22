import React, { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { CREATE } from "../../actions/types";

import "./Form.scss";

const Form = ({ dispatch }) => {
  const initialValue = "";

  const [value, setValue] = useState(initialValue);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const createPaste = () => {
    const id = uuidv4();

    dispatch({
      type: CREATE,
      paste: {
        id,
        text: value,
      },
    });
  };

  const submit = (event) => {
    event.preventDefault();

    createPaste();

    setValue(initialValue);

    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="form__input"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        ref={inputRef}
      />
      <button className="form__submit" type="submit">
        Save
      </button>
    </form>
  );
};

Form.propTypes = {
  dispatch: PropTypes.func,
};

export default Form;
