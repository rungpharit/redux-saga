import { load } from './loading/loadingTypes';

const initialState = {
  userId : 1
}

function todosReducer(state= initialState,action){
  switch(action.type){
    case load.LOADING_SUCCESS :
      return {
        ...state,
        ...{ userId : state.userId + 1 }
      }
      default : 
        return state
  }
}

export default todosReducer;