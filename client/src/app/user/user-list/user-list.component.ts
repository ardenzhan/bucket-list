import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.getOtherUsers(
      (users) => { this.users = users; },
      (err) => { console.log(err); }
    );
  }

}
