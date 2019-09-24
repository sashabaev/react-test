import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { doLogin } from "./login/sagasLogin";
import { doInit } from "./home/homeSagas";
import { doInitBooks, updateBook, removeBook, addBook } from "./admin/book/bookSagas";
import { onError } from "./common/errorSagas";
import { all } from "redux-saga/effects";
import rootReducer, { RootState } from "./rootReducer";


export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState!, enhancer);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(function*() {
    yield all([doLogin(), doInit(), onError(), doInitBooks(), updateBook(), addBook(), removeBook() ]);
  });

  return store;
}