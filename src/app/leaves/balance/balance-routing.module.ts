import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: BalanceComponent,
    children: [
      { path: 'casual', component: CasualComponent },
      { path: 'earned', component: EarnedComponent },
      { path: '', redirectTo: 'causual', pathMatch: 'full' },
      { path: '**', component: Page404Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceRoutingModule {}
