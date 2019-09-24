import { AddBookActions } from "./types";

const prefix = "@@update";

export function handleModal(val: boolean) {
  return { type: `${prefix}/${AddBookActions.DO_UPDATE_BOOK}`, val: val };
}