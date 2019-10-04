import {Action} from "@ngrx/store";
import {User} from "../../models/user.modele";

export const LOAD_USERS = '[USERS]  LOAD USERS';
export const LOAD_USERS_FAIL = '[USERS]  LOAD USERS FAIL';
export const LOAD_USERS_SUCCESS = '[USERS]  LOAD USERS SUCCESS';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}
export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public users: User[]) {}
}

export type usersActions = LoadUsers | LoadUsersFail | LoadUsersSuccess ;
