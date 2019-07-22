import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';



@NgModule({
  declarations: [RepositoryListComponent, RepositoryCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RepositoriesModule { }
