import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';

import { BalanceComponent } from './balance.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    Page404Component,
  ],
  imports: [CommonModule, BalanceRoutingModule],
})
export class BalanceModule {}
