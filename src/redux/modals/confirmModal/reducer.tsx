import { ConfirmModalState } from "./types";

export const initialState: ConfirmModalState = {
  isOpenModal: false,
  action: "",
  value: "",
  error: ""
};

export function confirmModalReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case `@@confirm/DO_REMOVE_BOOK`: {
      return {
        ...state,
        isOpenModal: action.value
      };
    }      
    case `@@confirm/DO_UPDATE_STATE`: {
      return {
        ...state,
        isOpenModal: action.isOpenModal,
        value: action.value,
        action: action.action
      };
    }      
    default:
      return state;
  }
}

export const addBook = (state: any) => state.addBook;