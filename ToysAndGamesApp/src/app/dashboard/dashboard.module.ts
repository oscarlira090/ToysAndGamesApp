import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//components
import { DashboardComponent } from './components/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
   
  ]
})
export class DashboardModule { }
