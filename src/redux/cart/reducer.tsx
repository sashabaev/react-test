import { RootState } from "../../redux/rootReducer";
import { CartState } from "./types";
import { string } from "prop-types";

export const initialState: CartState = {
  error: "",
  books: [],
  count: 0
};

export function cartReducer(state: CartState = initialState, action: any) {
  switch (action.type) {
    case `@@cart/DATA_INIT`: {
      let items = localStorage.getItem("cart");
      if (state.books.length > 0) {
        return {
          ...state,
          books: state.books
        };
      }
      return initialState;
    }
    case `@@cart/DATA_LOADED`: {
      return {
        ...state,
        books: action.payload.data
      };
    }
    case `@@cart/DATA_UPDATE`: {
      localStorage.setItem("cart",  JSON.stringify(action.books));
      return {
        ...state,
        books: JSON.parse(JSON.stringify(action.books))
      };
    }
    case `@@ERROR_OCCURED`: {
      const { error } = action.payload;

      return {
        ...state,
        error: error
      };
    }
    default:
      return state;
  }
}

export const home = (state: RootState) => state.home;