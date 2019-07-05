import { call, put, takeEvery, all } from 'redux-saga/effects';
import { signUpUser, signInUser } from '../api-client/main';
import { AsyncStorage } from 'react-native';

import * as types from '../action-types/userData';

export function* watchSignUp() {
	yield takeEvery(types.SIGN_UP_INIT, signUp);
}

export function* signUp({ payload }) {
	try {
		const result = yield signUpUser(payload);
		yield put({ type: types.SIGN_UP_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.SIGN_UP_FAILURE, payload: error });
	}
}

export function* watchSignIn() {
	yield takeEvery(types.SIGN_IN_INIT, signIn);
}

export function* signIn({ payload }) {
	try {

		const result = yield signInUser(payload);
		yield AsyncStorage.setItem('userData', JSON.stringify(payload));
		yield put({ type: types.SIGN_IN_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.SIGN_IN_FAILURE, payload: error });
	}
}

export function* watchGetUserData() {
	yield takeEvery(types.GET_USERDATA_INIT, getUserData);
}

export function* getUserData() {
	try {
		const result = yield AsyncStorage.getItem('userData');
		const parsedResult = yield JSON.parse(result);
		yield put({ type: types.GET_USERDATA_SUCCESS, payload: parsedResult, });
	} catch (error) {
		yield put({ type: types.GET_USERDATA_FAILURE, payload: error });
	}
}

export default function* userData() {
	yield all([
		watchSignUp(),
		watchSignIn(),
		watchGetUserData()
	])
}