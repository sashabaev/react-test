
export const initialState: any = {
  isOpenModal: false,
  sUpdateModal: false,
  error: ""
};

export function addBookReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case `@@addBook/DO_ADD_BOOK`: {
      return {
        ...state,
        isUpdateModal: false,
        isOpenModal: action.val
      };
    }      
    default:
      return state;
  }
}

export const addBook = (state: any) => state.addBook;