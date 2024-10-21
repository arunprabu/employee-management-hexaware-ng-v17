// user/users-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // registering the routes
  exports: [RouterModule],
})
export class UsersRoutingModule {}
