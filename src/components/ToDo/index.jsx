import React, { useReducer} from "react";
import AddForm from "../AddForm";
import TaskList from "../TaskList";
import reducer from "./reducer/reducer";
import initialState from './reducer/initialState'

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <AddForm state={state} dispatch={dispatch} />
      <TaskList state={state} dispatch={dispatch} />
    </>
  );
};

export default ToDo;
