import { load } from './loading/loadingTypes';

export const initialState = {
  error : null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case load.LOADING_ERROR:
            return  {
              ...state,
              ...{error: action.payload}
            };
        case load.LOADING_SUCCESS:
            return {
              ...state,
              ...{error: null}
            };
        default:
            return state;
    }
};

export default errorReducer;
