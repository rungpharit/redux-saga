import { combineReducers } from 'redux';

import loadingReducer from './loading/loadingReducer';
import setTodosReducer from './setTodosReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  isLoading : loadingReducer,
  setTodos : setTodosReducer,
  todos : todosReducer
})

export default rootReducer;