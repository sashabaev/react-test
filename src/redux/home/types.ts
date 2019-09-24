import { BaseState } from "../../types/baseState";
import { Product } from "../../types";


export enum HomeActions {
  DATA_INIT = "DATA_INIT",
  DATA_UPDATE = "DATA_UPDATE",
  DATA_LOADED = "DATA_LOADED",
  DATA_LOAD_FAILED = "DATA_LOAD_FAILED"
}

export interface HomeState extends BaseState {
  books: Product[];
  enviroment: string;
}