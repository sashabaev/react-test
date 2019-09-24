import { AddBookActions } from "./types";

const prefix = "@@confirm";

export function doConfirm(val: boolean) {
  return { type: `${prefix}/${AddBookActions.DO_REMOVE_BOOK}`, val: val };
}

export function updateState (value: boolean){
  return { type: `${prefix}/${AddBookActions.DO_UPDATE_STATE}`, value: value };
}