import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(
    private _itemService: ItemService
  ) { }

  ngOnInit() {
    this._itemService.getItems(
      (items) => {
        this.items = items;
      },
      (err) => { console.log(err); }
    );
  }

  updateStatus(itemid) {
    this._itemService.update(itemid,
      (items) => {
        this.items = items;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
