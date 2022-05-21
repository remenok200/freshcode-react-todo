import ACTION_TYPES from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newTodo = {
        text: action.text,
        isDone: false,
        id: Date.now(),
      };
      return {
        todos: [...state.todos, newTodo],
      };
    }
    case ACTION_TYPES.REMOVE: {
      const temp = state.todos;
      const newTodos = temp.filter((todo) => {
        return todo.id !== action.id;
      });
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
      return { todos: newTodos };
    }
    default:
      return { ...state };
  }
}
