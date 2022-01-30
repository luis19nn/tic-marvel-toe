import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-selected',
  templateUrl: './player-selected.component.html',
  styleUrls: ['./player-selected.component.scss'],
})
export class PlayerSelectedComponent implements OnInit {
  @Input() player: any;

  constructor() {}

  ngOnInit(): void {}
}
