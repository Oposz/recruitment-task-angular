
import { OnChanges } from '@angular/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Repo } from 'src/app/shared/interfaces/repo.interface';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit, OnChanges {
  @Input() repos: Repo[] = [];
  @Input() isSearchDisabled: boolean;
  @Input() error: string;
  @Input() isLoading: boolean;
  @Output() searchDisabled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.isLoading)
  }
  onSearchDisabled(): void {
    this.searchDisabled.emit(this.isSearchDisabled)
  }
}
