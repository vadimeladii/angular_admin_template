import {Component, OnInit} from '@angular/core';
import {getStyle} from '@coreui/coreui/js/src/utilities/';
import {Http} from '@angular/http';
import {UserService} from './user.service';
import {User} from '../../model/user';

@Component({
  templateUrl: 'user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: Array<User>;

  constructor(private http: Http, private userService: UserService) {
    this.userService.getAll().subscribe(
      users => {
        this.users = users;
        console.log(users);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }
}
