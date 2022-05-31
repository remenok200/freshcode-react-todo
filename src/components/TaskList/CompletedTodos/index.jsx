import React from 'react';
import RenderedTodos from '../RenderedTodos';

const CompletedTodos = props => {
  const { text = 'completed', state, ...rest } = props;

  const completedTodos = state.todos.filter(todo => {
    return todo.isDone;
  });

  return <RenderedTodos state={completedTodos} text={text} {...rest} />;
};

export default CompletedTodos;
