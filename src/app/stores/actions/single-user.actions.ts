import {Action} from "@ngrx/store";
import {User} from "../../models/user.modele";

export const LOAD_ONE_USER = '[USER]  LOAD ONE USER';
export const LOAD_ONE_USER_FAIL = '[USER]  LOAD ONE USER FAIL';
export const LOAD_ONE_USER_SUCCESS = '[USER]  LOAD ONE USER SUCCESS';

export class LoadOneUser implements Action {
  readonly type = LOAD_ONE_USER;
  constructor(public id: string) {}
}

export class LoadOneUserFail implements Action {
  readonly type = LOAD_ONE_USER_FAIL;
  constructor(public payload: any) {}
}
export class LoadOneUserSuccess implements Action {
  readonly type = LOAD_ONE_USER_SUCCESS;
  constructor(public user: User) {}
}

export type oneUserActions = LoadOneUser | LoadOneUserFail | LoadOneUserSuccess ;
