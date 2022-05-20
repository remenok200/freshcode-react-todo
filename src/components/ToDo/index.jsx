import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TODO_TASK_CHEMA } from "../../utils/validationSchemas";
import { ErrorMessage } from "formik";
import AddForm from "../AddForm";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <article>
      <AddForm todos={todos} setTodos={setTodos} />
      <div>
        <h2>Tasks:</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                // onChange={() => toggleTodoCompletion(todo.id)}
                type="checkbox"
                name="isDone"
                id={todo.id}
                checked={todo.isDone}
              />
              <span>{todo.text}</span>
              {/* {todo.isDone && (
                <button onClick={() => removeTodo(todo.id)}>Remove task</button>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ToDo;
