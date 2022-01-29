import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from '../shared/shared.module';

//Module Routing
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';

//Components
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RoutingModule, SharedModule],
})
export class PagesModule {}
