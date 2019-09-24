import { BaseState } from "../../types/baseState";
import { Product } from "../../types";


export enum CartActions {
  DATA_INIT = "DATA_INIT",
  DATA_UPDATE = "DATA_UPDATE",
  DATA_LOADED = "DATA_LOADED",
  DATA_LOAD_FAILED = "DATA_LOAD_FAILED"
}

export interface CartState extends BaseState {
  books: Product[]; 
  count: number;
}