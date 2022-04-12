import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})

export class MessageComponent implements OnInit, AfterViewInit {

  @ViewChild('greet') greet?: ElementRef;
  constructor() {

  }
  ngAfterViewInit(): void {
    console.log(this.greet)
    }

  ngOnInit() {
   
  }

}
