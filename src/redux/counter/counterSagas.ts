import { put, takeEvery, call } from "redux-saga/effects";
import * as Products from "../../services/productService";
// worker sagas
export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@counter/DATA_INIT`, function*(action: any) {
    try {
      const data = yield call(Products.getBooks);
      console.log(JSON.stringify(data));
      yield put({
        type: `@@counter/DATA_LOADED`,
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
 

