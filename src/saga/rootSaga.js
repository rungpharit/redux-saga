import { all } from 'redux-saga/effects';

import todosSaga from '../saga/todosSaga'

export default function* rootSaga(){
  yield all([todosSaga()])
}