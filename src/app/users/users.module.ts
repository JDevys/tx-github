import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
