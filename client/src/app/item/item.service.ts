import { Injectable } from '@angular/core';
import { Item } from './item';
import { Http } from '@angular/http';

@Injectable()
export class ItemService {
  items: Item[];

  constructor(private _http: Http) {
    this.items = [];
  }

  getItems(callback, errorback){
    this._http.get('/items').subscribe(
      (res) => {
        const items = res.json();
        this.items = items;
        callback(items);
      },
      (err) => { errorback(err.json()); }
    )
  }

  update(itemid, callback, errorback){
    this._http.get(`/status/${itemid}`).subscribe(
      (res) => {
        const items = res.json();
        console.log("item service items:", items);
        callback(items);
      },
      (err) => { errorback(err.json()); }
    )
  }

  getUserItems(userid, callback, errorback){
    this._http.get(`/items/${userid}`).subscribe(
      (res) => {
        const items = res.json();
        console.log("item service items:", items);
        callback(items);
      },
      (err) => { errorback(err.json()); }
    )
  }

  createItem(item, callback, errorback) {
    this._http.post('/items', item).subscribe(
      (res) => {
        const item = res.json();
        this.items.push(item);
        callback(item);
      },
      (err) => { errorback(err.json()); }
    );
  }

}
