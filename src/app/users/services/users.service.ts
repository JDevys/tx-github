import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: String = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers(page: number = 0, perPage: number = 10) {
    let since: number = page * perPage;
    return this.http
      .get(`${this.baseUrl}?since=${since}&per_page=${perPage}`);
  }
}
