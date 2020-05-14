import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { GraphComponent } from './graph/graph.component';
import { ErrorComponent } from './error/error.component';
import { GlobalComponent } from './global/global.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component : DashboardComponent},
  {path:'state', component : StateDetailsComponent},
  {path:'graph', component : GraphComponent},
  {path:'global', component : GlobalComponent},
  {path:'error', component : ErrorComponent},
  {path:'**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration : 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
