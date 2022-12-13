import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared.module';

import { StartComponent } from './start/start.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
declarations: [
    StartComponent,
    HomePageComponent,
    NotFoundComponent
],
imports: [
    CommonModule,
    RoutingModule,
    SharedModule
]
})

export class PagesModule { }
