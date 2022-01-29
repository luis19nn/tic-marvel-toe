import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PlayerSelectionComponent } from './player-selection/player-selection.component';

@NgModule({
  declarations: [PlayerSelectionComponent],
  exports: [PlayerSelectionComponent],
  imports: [CommonModule],
})
export class SharedModule {}
