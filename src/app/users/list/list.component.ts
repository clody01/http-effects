import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.modele";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit, OnDestroy {
users: User[] = [];
userSubscription: Subscription = new Subscription();
  constructor(public userService: UserService) {
  }

  ngOnInit() {
  this.userSubscription =  this.userService.getUsers()
      .subscribe(userList => {
        this.users = userList;
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
