import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss'],
})
export class PlayerSelectionComponent implements OnInit {
  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {}

  public getSearch(value: string) {
    this.marvelApiService.setName(value);
  }
}
