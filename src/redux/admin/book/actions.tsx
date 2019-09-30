import { BookActions } from "./types";
import { Book } from "../../../types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@book";

export function handleModal(val: boolean) {
  return { type: `@@addBook/${BookActions.DO_ADD_BOOK}`, val: val };
}

export function handleUpdateModal(val: boolean, book: Book) {
  return { type: `@@updateBook/${BookActions.DO_UPDATE_BOOK}`, val: val, book: book };
}

export function doInitBooks(limit: number, page: number) {
  return { type: `${prefix}/${BookActions.DATA_INIT}`, limit, page };
}

export function updateBook(book: Book) {
  debugger
  return { type: `${prefix}/${BookActions.DATA_UPDATE}`, book: book };
}

export function createBook(book: Book) {
  return { type: `${prefix}/${BookActions.DATA_ADD}`, book: book };
}

export function doConfirm(value: string, action: string) {
  return { type: action, value: value };
}

export function updateState(isOpenModal: boolean, value: string, action: string) {
  return { type: `@@confirm/${BookActions.DO_UPDATE_STATE}`, isOpenModal: isOpenModal, value: value, action: action };
}
