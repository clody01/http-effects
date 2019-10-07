import * as reducers from './reducers';
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  users: reducers.UsersState;
  user: reducers.OneUserState
}

export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducers,
  user: reducers.oneUserReducers
};
