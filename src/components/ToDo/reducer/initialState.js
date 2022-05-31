import getLocalStorage from '../../../utils/getLocalStorage'

const initialState = {
  todos: getLocalStorage(),
};

export default initialState;
