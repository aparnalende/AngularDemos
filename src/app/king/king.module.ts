import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KingRoutingModule } from './king-routing.module';
import { KingComponent } from './king/king.component';


@NgModule({
  declarations: [
    KingComponent
  ],
  imports: [
    CommonModule,
    KingRoutingModule
  ]
})
export class KingModule { }
