import React from 'react';
import RenderedTodos from '../RenderedTodos';

const NotCompletedTodos = props => {
  const { state, text = 'not completed', ...rest } = props;

  const notCompletedTodos = state.todos.filter(todo => {
    return !todo.isDone;
  });

  return <RenderedTodos state={notCompletedTodos} text={text} {...rest} />;
};

export default NotCompletedTodos;
