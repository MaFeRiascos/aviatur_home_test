import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { HomeComponent } from './home/home.component';

//Routing
import { DashboardRoutingModule } from './dashboard-routing.module';

//Modules
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
})
export class DashboardModule { }
