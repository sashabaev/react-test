import { HomeActions } from "./types";
import { Book } from "../../types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@home";

export function doInit(books: Book[]) {
  return { type: `${prefix}/${HomeActions.DATA_INIT}`, books: books };
}

export function updateStateHome(books: Book[]) {
  return { type: `${prefix}/${HomeActions.DATA_UPDATE}`, books: books };
}

export function updateStateCart(books: Book[]) {
  return { type: `@@cart/${HomeActions.DATA_UPDATE}`, books: books };
}

export function updateCount(count: number) {
  return { type: `@@counter/${HomeActions.DATA_UPDATE}`, count: count };
}
