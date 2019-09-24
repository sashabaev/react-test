import { put, takeEvery, call } from "redux-saga/effects";
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";
import * as Products from "../../services/productService";
import { Product } from "../../types";
// worker sagas
export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@cart/DATA_INIT`, function*(action: any) {
    try {
      const data = yield call(Products.getProducts);
      console.log(JSON.stringify(data));
      yield put({
        type: `@@cart/DATA_LOADED`,
        payload: {
          data: data.data
        }
      });
    } catch (error) {
      yield put({
        type: `@@ERROR_OCCURED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

