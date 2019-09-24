import { CartActions } from "./types";
import { Product } from "../../types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@cart";

export function doInit() {
  return { type: `${prefix}/${CartActions.DATA_INIT}` };
}

export function updateStateCart(books: Product[]) {
  return { type: `${prefix}/${CartActions.DATA_UPDATE}`, books: books };
}

export function updateCount(count: number) {
  return { type: `@@counter/${CartActions.DATA_UPDATE}`, count: count };
}

export function updateStateHome(books: Product[]) {
  return { type: `@@home/${CartActions.DATA_UPDATE}`, books: books };
}
