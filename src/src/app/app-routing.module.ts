import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { GraphComponent } from './graph/graph.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'home', component : DashboardComponent},
  {path:'state', component : StateDetailsComponent},
  {path:'graph', component : GraphComponent},
  {path:'error', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
