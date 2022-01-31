import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  @Output() public emmitWinner: EventEmitter<string> = new EventEmitter();

  public Xturn: boolean = true;
  public Oturn: boolean = false;

  public classTurn: string = 'x';
  public hasWinner: boolean = false;

  public winningValues: any = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor() {}

  ngOnInit(): void {
    const container: any = document.querySelectorAll('.row');

    container.forEach((row: any) => {
      row.addEventListener('click', (event: any) => {
        const clicked = event.target.closest('.row');

        if (
          !clicked.classList.contains('x') &&
          !clicked.classList.contains('o') &&
          !this.hasWinner
        ) {
          if (this.Xturn) {
            clicked.classList.add('x');

            this.Xturn = false;
            this.Oturn = true;

            this.classTurn = 'x';
          } else {
            clicked.classList.add('o');

            this.Xturn = true;
            this.Oturn = false;

            this.classTurn = 'o';
          }

          if (this.checkWinner(container, this.classTurn)) {
            this.gameEnd(false);
          } else if (this.isDraw(container)) {
            this.gameEnd(true);
          }
        }
      });
    });
  }

  public checkWinner(container: any, classTurn: string): boolean {
    //The some() method tests whether at least one element in the array passes the test implemented by the provided function
    return this.winningValues.some((value: any) => {
      //The every() method tests whether all elements in the array pass the test implemented by the provided function.
      return value.every((index: any) => {
        return container[index].classList.contains(classTurn);
      });
    });
  }

  public isDraw(container: any): boolean {
    return [...container].every((row: any) => {
      return row.classList.contains('x') || row.classList.contains('o');
    });
  }

  public gameEnd(draw: boolean): void {
    this.hasWinner = true;

    const pWinner: any = document.querySelector('.winner');

    if (draw) {
      this.emmitWinner.emit('draw');

      pWinner.textContent = 'IS DRAW';
    } else {
      this.emmitWinner.emit(this.classTurn);

      this.classTurn === 'x'
        ? (pWinner.textContent = 'X WINS!')
        : (pWinner.textContent = 'CIRCLE WINS!');
    }
  }

  public restart() {
    const container: any = document.querySelectorAll('.row');

    container.forEach((row: any) => {
      row.classList.contains('x')
        ? row.classList.remove('x')
        : row.classList.remove('o');
    });

    this.Xturn = true;
    this.Oturn = false;

    this.hasWinner = false;

    const pWinner: any = document.querySelector('.winner');
    pWinner.textContent = '';
  }
}
