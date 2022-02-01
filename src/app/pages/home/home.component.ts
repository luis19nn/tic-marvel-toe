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

      this.character1.pontuation = {
        victories: 0,
        defeats: 0,
        draws: 0,
      };
    } else {
      this.player2 = player;
      this.character2 = value;

      this.character2.pontuation = {
        victories: 0,
        defeats: 0,
        draws: 0,
      };
    }
  }

  public getRandomInt(a: number = 1, b: number = 2): number {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  public onSubmit() {
    this.selected = true;

    const randomPlayer = this.getRandomInt();

    //True means that Player1 is X
    if (randomPlayer === 1) {
      this.character1.initialPlayer = true;
      this.character2.initialPlayer = false;
    } else {
      this.character1.initialPlayer = false;
      this.character2.initialPlayer = true;
    }
  }

  public getWinner(winner: string) {
    if (this.character1.initialPlayer && winner === 'x') {
      this.character1.pontuation.victories++;
      this.character2.pontuation.defeats++;
    }

    if (!this.character1.initialPlayer && winner === 'o') {
      this.character1.pontuation.victories++;
      this.character2.pontuation.defeats++;
    }

    if (this.character2.initialPlayer && winner === 'x') {
      this.character2.pontuation.victories++;
      this.character1.pontuation.defeats++;
    }

    if (!this.character2.initialPlayer && winner === 'o') {
      this.character2.pontuation.victories++;
      this.character1.pontuation.defeats++;
    }

    if (winner === 'draw') {
      this.character1.pontuation.draws++;
      this.character2.pontuation.draws++;
    }
  }
}
