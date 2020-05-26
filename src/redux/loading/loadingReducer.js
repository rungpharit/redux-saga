import { load } from './loadingTypes'

export const initialState = {
  visible : false
}

function loadingReducer(state = initialState , action) {
  switch(action.type) {
    case load.LOADING :
      return {
        ...state,
        ...{visible: true}
      };

    case load.LOADING_SUCCESS :
      return {
        ...state,
        ...{visible: false}
      };

    case load.LOADING_ERROR :
      return {
        ...state,
        ...{visible: false}
      };

    default :
      return state
  }
}

export default loadingReducer;