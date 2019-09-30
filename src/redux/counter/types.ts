import { BaseState } from "../../types/baseState";
import { Book } from "../../types";


export enum CounterActions {
  DATA_INIT = "DATA_INIT",
  DATA_UPDATE = "DATA_UPDATE",
}

export interface CounterState extends BaseState {
  count: number;
}