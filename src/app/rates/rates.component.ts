import { Input, Component } from '@angular/core';

export interface rateElement {
  cc: string;
  txt: string;
  rate: string;


}

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent {


  @Input()
  element: rateElement[] = []
  constructor() {

  }




}
