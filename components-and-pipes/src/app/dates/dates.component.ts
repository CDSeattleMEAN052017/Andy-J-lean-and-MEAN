import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
    // dates: Date {}
    dateObj: Date = new Date ();

  constructor() {
  }

  ngOnInit() {
        // this.date = {"date": new Date()}
  }

}
