import { Component } from '@angular/core';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {

  constructor() { }

  show=true;
  hour =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  min =[0,15,30,45];
  timezone=["(GMT-11:00) Midway Island, Samoa",
    "(GMT-11:00) Pago Pago(GMT-11:00) Pago Pago","(GMT+5:30) Mumbai, Kolkata, New Delhi(GMT+5:30) Mumbai, Kolkata, New Delhi"];
  add(){
    this.show=false;
  }

}
