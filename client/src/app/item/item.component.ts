import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  user: User;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user = this._userService.currentUser;
  }

}
