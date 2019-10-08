import {Injectable} from "@angular/core";
import {Actions, ofType, Effect} from "@ngrx/effects";
import * as fromUserActions from "../actions";
import {catchError, exhaustMap, map, switchMap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import {EMPTY, of} from "rxjs";
import {oneUserActions} from "../actions";
import {LoadOneUser} from "../actions";

@Injectable()
export class UserEffects {


  constructor(private actions$: Actions, public userService: UserService) {
  }

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(fromUserActions.LOAD_ONE_USER),
    exhaustMap(action => {
      const userId = action['id'];
      return this.userService.getUserById(userId)
        .pipe(
          map(user => new fromUserActions.LoadOneUserSuccess(user)),
          catchError(err => {
            of(new fromUserActions.LoadOneUserFail({err}));
            return EMPTY;
          })
        );
    })
  );

}
