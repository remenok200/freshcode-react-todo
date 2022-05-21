import React from 'react';

const RenderedTodos = (props) => {
    const {
        editTodo,
        setEditID,
        toggleTodoCompletion,
        editID,
        editTodoHandler,
        removeTodo,
        state,
      } = props;

      console.log(state)
    
      return (
        <>
          {state.map((todo) => (
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
                {editID === todo.id ? (
                  <input
                    onChange={editTodoHandler}
                    type="text"
                    placeholder={todo.text}
                  />
                ) : (
                  <span>{todo.text}</span>
                )}
              </td>
              <td>
                {editID === todo.id ? (
                  <button onClick={() => editTodo(todo.id)}>Save task!</button>
                ) : (
                  <button onClick={() => setEditID(todo.id)}>Edit task</button>
                )}
              </td>
              <td>
                {todo.isDone && (
                  <button onClick={() => removeTodo(todo.id)}>Remove task</button>
                )}
              </td>
            </tr>
          ))}
        </>
      );
}

export default RenderedTodos;
