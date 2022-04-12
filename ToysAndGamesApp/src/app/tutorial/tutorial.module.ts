import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//components
import { TutorialComponent } from './components/tutorial.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    TutorialComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    TutorialComponent,
    MessageComponent
  ],
  providers: [
   
  ]
})
export class TutorialModule { }
