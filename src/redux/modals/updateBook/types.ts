import { BaseState } from "../../../types/baseState";
import { Book } from "../../../types";

export enum AddBookActions {
  DO_UPDATE_BOOK = "DO_UPDATE_BOOK"
}

export interface UpdateBookState extends BaseState {
  isOpenModal: boolean;
  book: Book,
  price: number,
  title: string,
  image: string,
  subtitle: string,
  author: string,
  published: Date,
  publisher: string,
  pages: number,
  description: string
}