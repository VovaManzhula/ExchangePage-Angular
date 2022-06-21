import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rateElement } from '../rates/rates.component';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  cc1: any = "AUD"
  cc2: any = "AUD"
  rate: number = 1
  value1: number = 0
  value2: number = 0
  getRate() {
    this.http.get(`https://free.currconv.com/api/v7/convert?q=${this.cc1}_${this.cc2}&compact=ultra&apiKey=de6c1b8ecae59707e604`)
      .subscribe((res) => {
        this.rate = Object.values(res)[0]
        console.log(this.rate)
      }
      )
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  @Input()
  element: rateElement[] = []

  calc1() {
    this.value2 = this.value1 * this.rate
    return this.value2
  }

  calc2() {
    this.value1 = this.value2 / this.rate
    return this.value1
  }


}
