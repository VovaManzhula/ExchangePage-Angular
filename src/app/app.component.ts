import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'exchange';

  response: any;

  constructor(private http: HttpClient) {

  }
  search() {
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .subscribe((response) => {
        this.response = response
      })
  }
  ngOnInit(): void {
    this.search()
  }

}
