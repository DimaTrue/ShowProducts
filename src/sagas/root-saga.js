import { all } from 'redux-saga/effects';

import userData from './userData';


export default function* rootSaga() {
  yield all([
    userData(),
  ])
}