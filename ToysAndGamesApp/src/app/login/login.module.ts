import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//components
import { LoginComponent } from './components/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [
   
  ]
})
export class LoginModule { }
