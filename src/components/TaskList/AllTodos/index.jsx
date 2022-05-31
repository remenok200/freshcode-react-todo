import React from 'react';
import RenderedTodos from '../RenderedTodos';

const AllTodos = props => {
  const { state, text = '', ...rest } = props;
  return <RenderedTodos state={state.todos} text={text} {...rest} />;
};

export default AllTodos;
