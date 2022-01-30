import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss'],
})
export class PlayerSelectionComponent implements OnInit {
  @Output() public emmitCharacter: EventEmitter<string> = new EventEmitter();

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
          this.emmitCharacter.emit(this.character);

          this.errorAPI = false;
        } else {
          this.errorAPI = true;
        }
      },
    });
  }
}
