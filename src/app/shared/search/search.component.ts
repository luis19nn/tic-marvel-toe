import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  public timer: any;

  constructor() {}

  ngOnInit(): void {}

  public search(value: string) {
    if (value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.emmitSearch.emit(value), 500);
    }
  }

  public onSubmit(value: any) {
    if (value.keyCode === 13) value.preventDefault();
  }
}
