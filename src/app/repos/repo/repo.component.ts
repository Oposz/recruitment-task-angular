import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Repo } from 'src/app/shared/interfaces/repo.interface';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit, OnChanges {
  @Input() repo: Repo;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }
}
