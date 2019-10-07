import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../stores/app.reducer";
import {Store} from "@ngrx/store";
import * as fromUserActions from "../../stores/actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {

userIdSubscription: Subscription = new Subscription();
userId= null;
  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
  this.userIdSubscription =  this.activatedRoute.params.subscribe( params => {
      this.userId = params['id'];
      this.store.dispatch(new fromUserActions.LoadOneUser(this.userId));
      // console.log('params : ',id);
    })
  }
  ngOnDestroy(): void {
    this.userIdSubscription.unsubscribe();
  }
}
