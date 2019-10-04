import {User} from '../../models/user.modele';
import * as fromUsers from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducers(state = initState, action: fromUsers.usersActions): UsersState {
  switch (action.type) {
    case fromUsers.LOAD_USERS:
      return {
        ...state,
        loading: true
      };
    case fromUsers.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      };
    case fromUsers.LOAD_USERS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
