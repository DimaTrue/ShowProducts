import { call, put, takeEvery, all } from 'redux-saga/effects';
import { SIGN_UP_INIT } from '../action-types/userData'
import {  signUpUser, } from '../api-client/main';

import * as types from '../action-types/userData';

export function* watchSignUp() {
	yield takeEvery(SIGN_UP_INIT, signUp);
}

export function* signUp({ payload }) {
	try {
		const result = yield signUpUser(payload);
		yield put({ type: types.SIGN_UP_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.SIGN_UP_FAILURE, payload: error });
	}
}

export default function* userData() {
	yield all([
		watchSignUp(),
	])
}