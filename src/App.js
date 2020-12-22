import React, { useReducer, useEffect } from "react";

import types from "./actions/types";

import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./stylesheets/main.scss";

const App = () => {
  const reducer = (pastes, action) => {
    const { type, paste, id } = action;

    switch (type) {
      case types.CREATE:
        return [...pastes, paste];
      case types.DELETE:
        return pastes.filter((paste) => paste.id !== id);
      default:
        throw new Error(`Unexpected action.`);
    }
  };

  const initialPastes = localStorage.pastes ? JSON.parse(localStorage.pastes) : [];

  const [pastes, dispatch] = useReducer(reducer, initialPastes);

  useEffect(() => {
    localStorage.pastes = JSON.stringify(pastes);
  }, [pastes]);

  return (
    <main className="application">
      <Form dispatch={dispatch} />
      <List pastes={pastes} dispatch={dispatch} />
    </main>
  );
};

export default App;
