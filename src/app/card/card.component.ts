import { Component, Input, OnInit } from '@angular/core';
import { Ride } from '../model/Ride';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() ride:Ride = new Ride().builder("", "", "", "", "", 0);

  constructor() { 
  }

  ngOnInit(): void {
  }

}
