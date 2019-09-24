import { CounterActions } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";

const prefix = "@@counter";

export function doInit() {
  return { type: `${prefix}/${CounterActions.DATA_INIT}` };
}

export function updateState() {
  return { type: `${prefix}/${CounterActions.DATA_UPDATE}` };
}