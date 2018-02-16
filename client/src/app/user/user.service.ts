import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
  currentUser: User;
  users: User[];

  constructor(private _http: Http) {
  }

  createUser(user: User, callback, errorback) {
    this._http.post('/users', user).subscribe(
      (res) => {
        const user = res.json();
        this.currentUser = user;
        callback(this.currentUser);
      },
      (err) => { errorback(err); }
    )
  }

  getCurrentUser(callback, errorback) { 
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json();
        if (user) { this.currentUser = user; }
        callback(user);
      },
      (err) => { errorback(err); }
    )
  }

  getOtherUsers(callback, errorback) {
    this._http.get('/users').subscribe(
      (res) => {
        const users = res.json();
        this.users = users;
        callback(users);
      },
      (err) => { errorback(err.json()); }
    )
  }

  getUserInfo(userid, callback, errorback) {
    this._http.get(`/users/${userid}`).subscribe(
      (res) => {
        const user = res.json();
        callback(user);
      },
      (err) => { errorback(err.json()); }
    )
  }

  logout(callback, errorback) { 
    this._http.delete('/sessions').subscribe(
      (res) => {
        this.currentUser = null;
        callback(res.json());
      },
      (err) => { errorback(err); }
    );

  }

};
