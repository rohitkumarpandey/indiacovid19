import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { GraphComponent } from './graph/graph.component';
import { GoogleChartsModule } from 'angular-google-charts';
import * as $ from 'jquery';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StateDetailsComponent,
    GraphComponent,
    ErrorComponent,
    LoadingComponent  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, GoogleChartsModule ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
