import { put, takeEvery, call } from "redux-saga/effects";
import * as Products from "../../../services/productService";

// worker sagas
export function* doInitBooks(): IterableIterator<any> {
  yield takeEvery(`@@book/DATA_INIT`, function*(action: any) {
    try { 
      const fetchData = yield call(Products.getProducts);
      let data = fetchData.data
      console.log(JSON.stringify(data));
      yield put({
        type: `@@book/DATA_LOADED`,
        payload: {
          data: data
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
export function* updateBook(): IterableIterator<any> {
  yield takeEvery(`@@book/DATA_UPDATE`, function*(action: any) {
    try { 
      const fetchData = yield call(Products.updateProduct, action.book);
      let data = fetchData.data
      console.log(JSON.stringify(data));
      yield put({
        type: `@@book/DATA_UPDATED`,
        payload: {
          data: data
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
export function* addBook(): IterableIterator<any> {
  yield takeEvery(`@@book/DATA_ADD`, function*(action: any) {
    try { 
      debugger
      const fetchData = yield call(Products.addProduct, action.book);
      let data = fetchData.data
      console.log(JSON.stringify(data));
      yield put({
        type: `@@book/DATA_ADDED`,
        payload: {
          data: data
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

export function* removeBook(): IterableIterator<any> {
  yield takeEvery(`@@book/DATA_REMOVE`, function*(action: any) {
    try { 
      const fetchData = yield call(Products.deleteProduct, action.id);
      let data = fetchData.data
      console.log(JSON.stringify(data));
      yield put({
        type: `@@book/DATA_REMOVED`,
        payload: {
          data: action.id
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

