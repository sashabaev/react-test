import { put, takeEvery, call } from "redux-saga/effects";
import * as Products from "../../services/productService";
// worker sagas

export function* doInit(): IterableIterator<any> {
  yield takeEvery(`@@home/DATA_INIT`, function*(action: any) {
    try {
      let data = yield call(Products.getBooks);
    //   if(!action.books || action.books.length === 0){
    //   const fetchData = yield call(Products.getBooks);
    //    data = fetchData.data
    // } 
      console.log(JSON.stringify(data));
      yield put({
        type: `@@home/DATA_LOADED`,
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

