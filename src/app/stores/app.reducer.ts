import * as reducers from './reducers';
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  users: reducers.UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducers
};
