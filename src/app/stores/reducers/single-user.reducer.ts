import {User} from '../../models/user.modele';
import * as fromOneUser from '../actions';

export interface OneUserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: OneUserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function oneUserReducers(state = initState, action: fromOneUser.oneUserActions): OneUserState {
  switch (action.type) {
    case fromOneUser.LOAD_ONE_USER:
      return {
        ...state,
        loading: true
      };
    case fromOneUser.LOAD_ONE_USER_SUCCESS :
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.user
      };
    case fromOneUser.LOAD_ONE_USER_FAIL:
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
