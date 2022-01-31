import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { SearchComponent } from './search/search.component';
import { PlayerSelectedComponent } from './player-selected/player-selected.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@NgModule({
  declarations: [
    PlayerSelectionComponent,
    SearchComponent,
    PlayerSelectedComponent,
    TicTacToeComponent,
  ],
  exports: [
    PlayerSelectionComponent,
    PlayerSelectedComponent,
    TicTacToeComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
