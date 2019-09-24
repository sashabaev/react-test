import { HomeActions } from "./types";
import { Product } from "../../types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@home";

export function doInit(books: Product[]) {
  return { type: `${prefix}/${HomeActions.DATA_INIT}`, books: books };
}

export function updateStateHome(books: Product[]) {
  return { type: `${prefix}/${HomeActions.DATA_UPDATE}`, books: books };
}

export function updateStateCart(books: Product[]) {
  return { type: `@@cart/${HomeActions.DATA_UPDATE}`, books: books };
}

export function updateCount(count: number) {
  return { type: `@@counter/${HomeActions.DATA_UPDATE}`, count: count };
}
