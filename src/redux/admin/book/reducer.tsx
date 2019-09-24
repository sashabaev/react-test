
import { BookState } from "./types";
import { RootState } from "../../rootReducer";

export const initialState: BookState = {
  error: "",
  isOpenModal: false,
  value: "",
  books: [],
};

export function bookReducer(state: BookState = initialState, action: any) {
  switch (action.type) {
    case `@@book/DATA_INIT`: {
      return initialState;
    }
    case `@@book/DATA_LOADED`: {
      return {
        ...state,
        books: action.payload.data
      };
    }
    case `@@book/DATA_ADD`: {
      return {
        ...state,
        book: JSON.parse(JSON.stringify(action.book))
      };
    }
    case `@@book/DATA_UPDATED`: {
      for (let item of state.books) {
        if (item.id === action.payload.data.id) {
          item = action.payload.data;
          break;
        }
      }
      let newList = state.books
      return {
        ...state,
        books: JSON.parse(JSON.stringify(newList))
      };
    }
    case `@@book/DATA_ADDED`: {
      let newList = state.books;
      newList.push(action.payload.data)
      return {
        ...state,
        books: JSON.parse(JSON.stringify(newList))
      };
    }
    case `@@book/DATA_REMOVE`: {
      return {
        ...state,
        id: action.id
      };
    }
    case `@@book/DATA_REMOVED`: {
      let index = 0;
      state.books = state.books.filter(function (item) {
        return item.id !== action.payload.data
      })
      return {
        ...state,
        books: JSON.parse(JSON.stringify(state.books))
      };
    }
    case `@@book/DATA_UPDATE`: {
      return {
        ...state,
        book: JSON.parse(JSON.stringify(action.book))
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

export const book = (state: RootState) => state.book;