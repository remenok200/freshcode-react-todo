import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
const ToDo = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      isDone: false,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    // filter
  };

  const toggleTodoCompletion = (id) => {
    const temp = todos;
    const newTodos = temp.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onSubmit = (values, formikBag) => {
    // todo
    addTodo(values.text);
    formikBag.resetForm();
  };
  return (
    <article>
      <div>
        <Formik initialValues={{ text: "" }} onSubmit={onSubmit}>
          <Form>
            <Field name="text" placeholder="todo text" />
            <button type="submit">Add task</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Tasks:</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                onChange={() => toggleTodoCompletion(todo.id)}
                type="checkbox"
                name="isDone"
                id={todo.id}
                checked={todo.isDone}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ToDo;
