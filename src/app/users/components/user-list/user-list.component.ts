import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private currentPage = 1;
  users: any = [];

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.getUsers(this.currentPage)
    .subscribe((users) => {
      this.users = users;
    });
  }

}
