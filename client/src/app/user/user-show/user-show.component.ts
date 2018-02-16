import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Item } from '../../item/item';
import { ItemService } from '../../item/item.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  otherUser: User;
  items: Item[];
  error;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _itemService: ItemService
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(
      (params) => {
        this._userService.getUserInfo(
          params.get('id'),
          (user) => {
            this.otherUser = user[0]; },
          (err) => { console.log(err); this.error.push(err); }
        );

        this._itemService.getUserItems(
          params.get('id'),
          (items) => {
            this.items = items;
          },
          (err) => { console.log(err); this.error.push(err); }
        );

      },
      (error) => { console.log("user-show error:", error); }
    );


  }

}
