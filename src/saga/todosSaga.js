import { takeEvery , put ,call ,select } from 'redux-saga/effects';

import { load } from '../redux/loading/loadingTypes';
import { loadingSuccess,loadingError } from '../redux/loading/loadingActions';
import { getTodos } from '../api'

const userId = state => state.todos.userId;

export function* handleTodosLoad(){

  try{

    const id = yield select(userId);
    const todos = yield call(getTodos,id)
    yield put(loadingSuccess(todos))

  }catch(error){

    yield put(loadingError(error.toString()));

  }
}

export default function* watchTodosLoad(){
  yield takeEvery(load.LOADING, handleTodosLoad)
}