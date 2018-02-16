import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { UserShowComponent } from './user/user-show/user-show.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent, children: [
    { path: '', pathMatch: 'full', component: UserNewComponent }
  ]},
  
  { path: 'user', component: UserComponent, children: [
    { path: 'new', component: UserNewComponent },
    { path: ':id', component: UserShowComponent }
  ]},

  { path: 'status', component: UserComponent, children: [
    { path: ':id', redirectTo: 'dashboard' }
  ]},

  { path: 'dashboard', pathMatch: 'full', component: ItemComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
