import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public player1: string = '';
  public player2: string = '';

  public character1: any;
  public character2: any;

  public selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public getCharacter(value: string, player: string) {
    if (player === '--player-1') {
      this.player1 = player;
      this.character1 = value;
    } else {
      this.player2 = player;
      this.character2 = value;
    }
  }

  public onSubmit() {
    this.selected = true;
  }

  public getWinner(winner: string) {
    console.log('HOME: ' + winner);
  }
}
