import { load } from './loading/loadingTypes';

let initialState = {
 todos : []
}

function setTodosReducer(state = initialState,action){
  switch(action.type){
    case load.LOADING_SUCCESS :
      return {
        ...state,
        ...{todos : [...state.todos,[...action.payload]]}
      }
    default :
      return state
  }
}

export default setTodosReducer;