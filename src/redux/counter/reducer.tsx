import { RootState } from "../../redux/rootReducer";
import { HomeState } from "../../redux/home/types";
import { string } from "prop-types";
import { CounterState } from "./types";

export const initialState: CounterState = {
  error: "",
  count: 0
};

export function counterReducer(state: CounterState = initialState, action: any) {  
  switch (action.type) {
    case `@@counter/DATA_INIT`: {
      return initialState;
    }
    case `@@counter/DATA_LOADED`: {
      return {
        ...state,
        books: action.payload.data
      };
    }
    case `@@counter/DATA_UPDATE`: {
      return {
        ...state,
        count: action.count
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