import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoriesService } from '../../services/repositories.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  private user: string = '';
  private currentPage: number = 0;
  private usersPerPage: number = 12;
  repositories: any = [];

  constructor(private route: ActivatedRoute, private reposService: RepositoriesService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
        this.user = params.get('login');
        this.currentPage = Number(params.get('page'));
        this.loadRepositories();
      });
  }

  loadRepositories() {
    this.reposService.getRepos(this.user, this.currentPage, this.usersPerPage)
      .subscribe((repos) => {
        Array.prototype.push.apply(this.repositories, repos);
        this.currentPage++;
      });
  }

}
