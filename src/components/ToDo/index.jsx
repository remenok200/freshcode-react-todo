import React, { useState } from "react";
import AddForm from "../AddForm";
import TaskList from "../TaskList";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <AddForm todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default ToDo;
