import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./common/reducer";
import { HomeState } from "./home/types";
import { CartState } from "./cart/types";
import { cartReducer } from "./cart/reducer";
import { CounterState } from "./counter/types";
import { counterReducer } from "./counter/reducer";
import { BookState } from "./admin/book/types";
import { bookReducer } from "./admin/book/reducer";
import { UpdateBookState } from "./modals/updateBook/types";
import { AddBookState } from "./modals/addBook/types";
import { addBookReducer } from "./modals/addBook/reducer";
import { updateBookReducer } from "./modals/updateBook/reducer";
import { ConfirmModalState } from "./modals/confirmModal/types";
import { confirmModalReducer } from "./modals/confirmModal/reducer";

export interface RootState {
  error: string;
  login: LoginState;
  home: HomeState;
  cart: CartState;
  count: CounterState;
  book: BookState;
  createBook: AddBookState;
  updateBook: UpdateBookState;
  confirmModal: ConfirmModalState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  home: homeReducer,
  cart: cartReducer,
  count: counterReducer,
  book: bookReducer,
  createBook: addBookReducer,
  updateBook: updateBookReducer,
  confirmModal: confirmModalReducer
});

export default rootReducer;