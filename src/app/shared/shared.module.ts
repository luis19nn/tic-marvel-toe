import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [PlayerSelectionComponent, SearchComponent],
  exports: [PlayerSelectionComponent],
  imports: [CommonModule],
})
export class SharedModule {}
