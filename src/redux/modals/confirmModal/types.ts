import { BaseState } from "../../../types/baseState";

export enum AddBookActions {
  DO_REMOVE_BOOK = "DO_REMOVE_BOOK",
  DO_UPDATE_STATE = "DO_UPDATE_STATE"
  }
  
  export interface ConfirmModalState extends BaseState {
    isOpenModal: boolean;
    action: string;
    value: string;
  }