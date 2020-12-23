import React, { useState } from "react";

import PropTypes from "prop-types";

import { v4 as uuidv4 } from "uuid";

import { CREATE } from "../../actions/types";

import "./Form.scss";

const initialValue = "";

const Form = ({ dispatch }) => {
  const [value, setValue] = useState(initialValue);

  const createTask = () => {
    const id = uuidv4();

    dispatch({
      type: CREATE,
      task: {
        id,
        text: value,
      },
    });
  };

  const submit = (event) => {
    event.preventDefault();

    createTask();

    setValue(initialValue);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="form__input"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        autoFocus
        required
      />
      <button className="form__submit button" type="submit">
        Add
      </button>
    </form>
  );
};

Form.propTypes = {
  dispatch: PropTypes.func,
};

export default Form;
