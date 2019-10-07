import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../stores/app.reducer";
import {Store} from "@ngrx/store";
import * as fromUserActions from "../../stores/actions";
import {Subscription} from "rxjs";
import {User} from "../../models/user.modele";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {

  userSubscription: Subscription = new Subscription();
  userIdSubscription: Subscription = new Subscription();
  user: User;
  loading: boolean = true;
  error: any = null;
  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.userIdSubscription = this.activatedRoute.params.subscribe(params => {
      const userId = params['id'];
      this.store.dispatch(new fromUserActions.LoadOneUser(userId));
    });
    this.userSubscription = this.store.select("user").subscribe(userAction => {
      this.user = userAction.user;
      this.loading = userAction.loading;
      this.error = userAction.error;
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.userIdSubscription.unsubscribe();
  }
}
