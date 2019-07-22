import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: String = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers(page: Number = 1) {
    return this.http
      .get(`${this.baseUrl}?page=${page}&per_page=30'`);
  }
}
