import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private baseUrl: String = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getRepos(user: string, page: number = 0, perPage: number = 10) {
    return this.http
      .get(`${this.baseUrl}/${user}/repos?page=${page}&per_page=${perPage}`);
  }
}
