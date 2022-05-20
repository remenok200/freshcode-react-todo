import React from "react";

const TaskList = (props) => {
  const { todos, setTodos } = props;

  const removeTodo = (id) => {
    const temp = todos;
    const newTodos = temp.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
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

  return (
    <>
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
              <span>{todo.text}</span>
              {todo.isDone && (
                <button onClick={() => removeTodo(todo.id)}>Remove task</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
