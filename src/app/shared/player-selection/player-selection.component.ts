import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss'],
})
export class PlayerSelectionComponent implements OnInit {
  public character: any;
  public errorAPI: boolean = false;

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {}

  public getSearch(value: string) {
    this.marvelApiService.setName(value);

    this.marvelApiService.apiGetCharacter.subscribe({
      next: (res) => {
        if (res !== undefined) {
          this.character = res;
          this.errorAPI = false;
        } else {
          this.errorAPI = true;
        }
      },
    });
  }
}
