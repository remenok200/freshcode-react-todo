import rewriteLocalStorage from "../../../utils/rewriteLocalStorage";
import writeLocalStorage from "../../../utils/writeLocalStorage";
import ACTION_TYPES from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newTodo = {
        text: action.text,
        isDone: false,
        id: Date.now(),
      };

      writeLocalStorage(newTodo);

      return {
        todos: [...state.todos, newTodo],
      };
    }
    case ACTION_TYPES.REMOVE: {
      const temp = state.todos;
      const newTodos = temp.filter((todo) => {
        return todo.id !== action.id;
      });

      rewriteLocalStorage(newTodos);

      return { todos: newTodos };
    }
    case ACTION_TYPES.TOGGLE: {
      const temp = state.todos;
      const newTodos = temp.map((todo) => {
        if (todo.id === action.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });

      rewriteLocalStorage(newTodos);

      return { todos: newTodos };
    }
    case ACTION_TYPES.EDIT: {
      const temp = state.todos;
      const newTodos = temp.map((todo) => {
        if (todo.id === action.id) {
          todo.text = action.text;
        }
        return todo;
      });

      rewriteLocalStorage(newTodos);

      return { todos: newTodos };
    }
    default:
      return { ...state };
  }
}
