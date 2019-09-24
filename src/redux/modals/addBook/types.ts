import { BaseState } from "../../../types/baseState";

export enum AddBookActions {
    DO_ADD_BOOK = "DO_ADD_BOOK"
  }
  
  export interface AddBookState extends BaseState {
    isOpenModal: boolean;
    price: number,
    title: string,
    subtitle: string,
    author: string,
    published: Date,
    publisher: string,
    pages: number,
    description: string
  }