import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getProductsData } from '../api-client/main';

import * as types from '../action-types/products';

export function* watchGetProducts() {
	yield takeEvery(types.GET_PRODUCTS_INIT, getProducts);
}

export function* getProducts() {
	try {
    const result = yield call(getProductsData);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: result });
	} catch (error) {
		yield put({ type: types.GET_PRODUCTS_FAILURE, payload: error });
	}
}

export default function* products() {
	yield all([
		watchGetProducts(),
	])
}