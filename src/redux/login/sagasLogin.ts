import { put, takeEvery } from "redux-saga/effects";
//import { delay } from "redux-saga";
//import { DoLoginProps } from "./types";

// worker sagas
export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    try {
      // if (needDelay) {
      //   yield call(delay, 500);
      // }

      //const docs = yield call(Api.fetchData, url);
      const {
        data: { email, password }
      } = action;

      console.log(email + password);

      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: "token"
        }
      });
    } catch (error) {
      yield put({
        type: `@@login/LOGIN_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}