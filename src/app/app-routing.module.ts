import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // {path:"",component:HomeComponent},
  // {path:"posts",loadChildren:()=>import('./post/post.module').then(m=>m.PostModule)},
  // {path:"king",loadChildren:()=>import('./king/king.module').then(m=>m.KingModule)}
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'leaves',loadChildren:()=>import(`./leaves/leaves.module`).then(m=>m.LeavesModule)},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
