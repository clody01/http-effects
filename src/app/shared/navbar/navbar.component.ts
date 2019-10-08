import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as fromUserActions from "../../stores/actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../stores/app.reducer";
import {LoadOneUser} from "../../stores/actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  getUser(id: string) {

    if (!id) {
      return;
    }
    this.store.dispatch(new LoadOneUser(id));
    this.router.navigate(['/user', id]);

  }

}
