import { put, takeEvery, call } from "redux-saga/effects";
import * as Books from "../../../services/productService";

// worker sagas
export function* doInitBooks(): IterableIterator<any> {
  yield takeEvery(`@@book/DATA_INIT`, function*(action: any) {
    try { 
      const fetchData = yield call(Books.getPaging, action.limit, action.page);
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
      const fetchData = yield call(Books.updateBook, action.book);
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
      const fetchData = yield call(Books.addBook, action.book);
      let data = fetchData.data
      console.log(JSON.stringify(data));
      yield put({
        type: `@@book/DATA_ADDED`,
        payload: {
          data: data.raw.ops[0]
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
      const fetchData = yield call(Books.deleteBook, action.id);
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

