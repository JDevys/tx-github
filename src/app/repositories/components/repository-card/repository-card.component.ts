import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {

  @Input() repository:any;

  constructor() { }

  ngOnInit() {
  }

}
