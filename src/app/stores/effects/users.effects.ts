import {Injectable} from "@angular/core";
import {Actions, ofType, Effect} from "@ngrx/effects";
import * as fromUsersActions from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import {of} from "rxjs";

@Injectable()
export class UsersEffects {


  constructor(private actions$: Actions, public userService: UserService) {
  }

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(fromUsersActions.LOAD_USERS),
    switchMap(() => {
      return this.userService.getUsers()
        .pipe(
          map(users => new fromUsersActions.LoadUsersSuccess(users)),
          catchError(err => of(new fromUsersActions.LoadUsersFail(err)))
        );
    })
  );
}
