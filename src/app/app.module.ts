import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
// import { ApplyComponent } from './leaves/apply/apply.component';
// import { BalanceComponent } from './leaves/balance/balance.component';
// import { CasualComponent } from './leaves/balance/casual/casual.component';
// import { LeavesComponent } from './leaves/leaves.component';
// import { EarnedComponent } from './leaves/balance/earned/earned.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttendanceComponent,
    DashboardComponent,
    // LeavesComponent,
    Page404Component,
    // ApplyComponent,
    // BalanceComponent,
    // CasualComponent,
    // EarnedComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
