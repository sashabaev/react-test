
export const initialState: any = {
  isOpenModal: false,
  error: ""
};

export function updateBookReducer(state: any = initialState, action: any) {
  switch (action.type) {    
    case `@@updateBook/DO_UPDATE_BOOK`: {
      return {
        ...state,
        book: action.book,
        isOpenModal: action.val
      };
    }   
    default:
      return state;
  }
}

export const addBook = (state: any) => state.updateBook;