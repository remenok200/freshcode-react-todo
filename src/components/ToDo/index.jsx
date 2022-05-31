import React, { useReducer } from "react";
import AddForm from "../AddForm";
import TaskList from "../TaskList";
import reducer from "./reducer/reducer";
import initialState from "./reducer/initialState";
import styles from "./ToDo.module.scss";

const ToDo = () => {
  const reducerData = useReducer(reducer, initialState);

  return (
    <>
      <AddForm reducerData={reducerData} />
      <TaskList reducerData={reducerData} />
    </>
  );
};

export default ToDo;
