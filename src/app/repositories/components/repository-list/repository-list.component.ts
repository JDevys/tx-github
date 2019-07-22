import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  private user: string = '';
  private currentPage: string = '';
  repositories: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
        this.user = params.get('login');
        this.currentPage = params.get('page');
        this.loadRepositories();
      });
  }

  loadRepositories() {
    this.repositories.push(this.user);
    this.repositories.push(this.currentPage);
  }

}
