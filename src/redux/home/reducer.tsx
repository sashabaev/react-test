import { RootState } from "../../redux/rootReducer";
import { HomeState } from "./types";
import { string } from "prop-types";

export const initialState: HomeState = {
  error: "",
  books: [],
  enviroment: ""
};

export function homeReducer(state: HomeState = initialState, action: any) { 
  switch (action.type) {
    case `@@home/DATA_INIT`: {
      return initialState;
    }
    case `@@home/DATA_LOADED`: {
      return {
        ...state,
        books: action.payload.data
      };
    }
    case `@@home/DATA_UPDATE`: {
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