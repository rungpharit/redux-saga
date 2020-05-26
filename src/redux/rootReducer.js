import { combineReducers } from 'redux';

import loadingReducer from './loading/loadingReducer';
import setTodosReducer from './setTodosReducer';
import todosReducer from './todosReducer';
import errTodosReducer from './errTodosReducer'

const rootReducer = combineReducers({
  isLoading : loadingReducer,
  setTodos : setTodosReducer,
  todos : todosReducer,
  err : errTodosReducer,
})

export default rootReducer;