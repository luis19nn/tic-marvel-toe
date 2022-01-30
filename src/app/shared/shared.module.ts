import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { SearchComponent } from './search/search.component';
import { PlayerSelectedComponent } from './player-selected/player-selected.component';

@NgModule({
  declarations: [
    PlayerSelectionComponent,
    SearchComponent,
    PlayerSelectedComponent,
  ],
  exports: [PlayerSelectionComponent, PlayerSelectedComponent],
  imports: [CommonModule],
})
export class SharedModule {}
