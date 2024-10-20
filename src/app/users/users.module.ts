import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
  ],
  imports: [UsersRoutingModule],
})
export class UsersModule {}
