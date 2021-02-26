import { Component, OnInit } from '@angular/core';
import { Bou } from '../model/bou';

@Component({
  selector: 'app-dailyride',
  templateUrl: './dailyride.component.html',
  styleUrls: ['./dailyride.component.css']
})
export class DailyrideComponent implements OnInit {

  test: Bou[] = [];
  constructor() { }

  ngOnInit(): void {

    this.test.push(
      new Bou("Bassam", "Abidjan", "02/05/2021", "7.00 AM", "2000 FCFA", 2)
    );
    this.test.push(
      new Bou("Yopougon", "Treichville", "02/08/2021", "9.00 AM", "1000 FCFA", 4)
    );
    this.test.push(
      new Bou("Bingerville", "Treichville", "13/07/2021", "12.00 AM", "1000 FCFA", 3)
    );
  }


}
