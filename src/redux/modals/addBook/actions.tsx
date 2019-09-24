import { AddBookActions } from "./types";

const prefix = "@@addBook";

export function handleModal(val: boolean) {
  return { type: `${prefix}/${AddBookActions.DO_ADD_BOOK}`, val: val };
}