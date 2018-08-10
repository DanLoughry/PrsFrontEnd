import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { UserListComponent } from './User/user-list/user-list.component';




const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'users/list', component: UserListComponent },
{ path: 'users/detail/:id', component: UserDetailComponent },
{ path: 'users/edit/:id', component: UserEditComponent}, 
{ path: '**', component: UserListComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

