import { BookActions } from "./types";
import { Product } from "../../../types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@book";

export function handleModal(val: boolean) {
  return { type: `@@addBook/${BookActions.DO_ADD_BOOK}`, val: val };
}

export function handleUpdateModal(val: boolean, book: Product) {
  return { type: `@@updateBook/${BookActions.DO_UPDATE_BOOK}`, val: val, book: book };
}

export function doInitBooks() {
  return { type: `${prefix}/${BookActions.DATA_INIT}` };
}

export function updateBook(book: Product) {
  return { type: `${prefix}/${BookActions.DATA_UPDATE}`, book: book };
}

export function createBook(book: Product) {
  return { type: `${prefix}/${BookActions.DATA_ADD}`, book: book };
}

export function doConfirm(value: string, action: string) {
  return { type: action, value: value };
}

export function updateState (isOpenModal: boolean, value: string, action: string){
  return { type: `@@confirm/${BookActions.DO_UPDATE_STATE}`, isOpenModal: isOpenModal, value: value, action: action};
}
