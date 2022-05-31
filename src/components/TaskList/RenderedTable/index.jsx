import React from 'react';
import AllTodos from '../AllTodos';
import CompletedTodos from '../CompletedTodos';
import NotCompletedTodos from '../NotCompletedTodos';

const RenderedTable = props => {
  const {
    mode,
    ...rest
    
  } = props;

  if (mode === 'All') {
    return <AllTodos {...rest} />;
  } else if (mode === 'Completed') {
    return <CompletedTodos {...rest} />;
  }

  return <NotCompletedTodos {...rest} />;
};

export default RenderedTable;
