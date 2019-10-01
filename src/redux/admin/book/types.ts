import { BaseState } from "../../../types/baseState";
import { Book } from "../../../types";


export enum BookActions {
  DATA_INIT = "DATA_INIT",
  DATA_UPDATE = "DATA_UPDATE",
  DATA_LOADED = "DATA_LOADED",
  DATA_REMOVE = "DATA_REMOVE",
  DATA_ADD = "DATA_ADD",
  DO_ADD_BOOK = "DO_ADD_BOOK",
  DO_UPDATE_BOOK = "DO_UPDATE_BOOK",
  DO_UPDATE_STATE = "DO_UPDATE_STATE"
}

export interface BookState extends BaseState {
  books: Book[];
  book?: Book;
  isOpenModal: boolean;
  value: string;
  total: number;
}