import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {
  users: User[];
  item: Item;
  currentUser: User;
  taggedUser;

  constructor(
    private _userService: UserService,
    private _itemService: ItemService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentUser = this._userService.currentUser;
    
    this.item = new Item();

    this._userService.getOtherUsers(
      (users) => { this.users = users; },
      (err) => { console.log(err); }
    );
  }

  onSubmit(){
    this._itemService.createItem(this.item,
      (item) => {

        //ASK MATT ABOUT THIS, CAN'T NAVIGATE TO DASHBOARD?
        this._router.navigate(['/']);
        console.log("item-new added item:", item); },
      (err) => {
        console.log(err);
      }
    );
  }

}
