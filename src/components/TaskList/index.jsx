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
        <table>
          <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <input
                  onChange={() => toggleTodoCompletion(todo.id)}
                  type="checkbox"
                  name="isDone"
                  id={todo.id}
                  checked={todo.isDone}
                />
              </td>
              <td>
                <span>{todo.text}</span>
              </td>
              <td>
                {todo.isDone && (
                  <button onClick={() => removeTodo(todo.id)}>
                    Remove task
                  </button>
                )}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
