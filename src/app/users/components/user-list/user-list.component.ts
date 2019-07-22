import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private currentPage: number = 1;
  private usersPerPage: number = 12;
  users: any = [];

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers(this.currentPage, this.usersPerPage)
      .subscribe((users) => {
        Array.prototype.push.apply(this.users, users);
        this.currentPage++;
      });
  }

}
