
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  @Input() userName: string = '';
  @Output() searchDisabled = new EventEmitter<boolean>();
  error: string = '';
  isLoading: boolean = false;
  repos: [] = [];
  isSearchDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
    }

  onSearchDisabled():void{
    this.searchDisabled.emit(this.isSearchDisabled)
  }
}
