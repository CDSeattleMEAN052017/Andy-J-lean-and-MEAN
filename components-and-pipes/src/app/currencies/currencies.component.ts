import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

    value: number
    // money: Currency = new Currency

    constructor() { }

  ngOnInit() {
    this.value = 123.75
  }

}