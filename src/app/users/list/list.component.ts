import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.modele";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../stores/app.reducer";
import {LoadUsers} from "../../stores/actions";
import * as fromUsersActions from "../../stores/actions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading: boolean = false;
  error: any = null;
  userSubscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromUsersActions.LoadUsers());
    this.userSubscription = this.store.select('users').subscribe(usersAction => {
      this.users = usersAction.users;
      this.loading = usersAction.loading;
      this.error = usersAction.error;
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
